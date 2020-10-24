import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { users, account, transaction } from "./data";
import { determineAge, findUser, isPastDay, getTodayDate } from "./functions";
import {
  validateAuthentication,
  validateUser,
  checkIfCpfAlreadyExists,
  checkIfIsUnderage,
  checkIfSufficientBalance
} from "./errors";

const app = express();
app.use(express.json());
app.use(cors());

// CONSULTAR TODOS USUÁRIOS
app.get("/users", (req: Request, res: Response): void => {
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send("Erro ao pegar todos usuários");
  }
});

// CONSULTAR SALDO DE USUÁRIO
app.get("/users/balance", (req: Request, res: Response): void => {
  try {
    validateAuthentication(req.query);

    const user: account = findUser(
      String(req.query.name),
      String(req.query.cpf)
    )!;

    const balance: number = user.balance;
    const response = { balance };

    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// CRIAR CONTA
app.post("/users/create", (req: Request, res: Response): void => {
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      throw new Error("Envie nome, cpf e data de nascimento!");
    }

    checkIfCpfAlreadyExists(cpf);

    const age: number = determineAge(birthDate);

    checkIfIsUnderage(age);

    const user: account = {
      name,
      cpf,
      birthDate,
      balance: 0,
      bankStatement: []
    };

    users.push(user);

    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PAGAR CONTA
app.post("/users/pay", (req: Request, res: Response): void => {
  try {
    validateAuthentication(req.query);

    const { value, description } = req.body;

    if (!value || !description) {
      throw new Error("Envie o valor, a data de pagamento e a descrição!");
    }

    const user: account = findUser(
      String(req.query.name),
      String(req.query.cpf)
    )!;

    checkIfSufficientBalance(value, user);

    if (req.body.date && isPastDay(req.body.date)) {
      throw new Error("Não é possível pagar uma conta de um dia que já foi!");
    }

    const transaction: transaction = {
      value,
      date: req.body.date ? req.body.date : getTodayDate(),
      description
    };

    const bankStatement: transaction[] = user.bankStatement;

    bankStatement.push(transaction);

    res.status(200).send("Conta paga!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DEPOSITAR DINHEIRO
app.put("/users/balance", (req: Request, res: Response): void => {
  try {
    validateAuthentication(req.query);

    const { value } = req.body;

    if (!value) {
      throw new Error("Envie seu saldo");
    }

    const user: account = findUser(
      String(req.query.name),
      String(req.query.cpf)
    )!;

    user.balance += value;

    const transaction: transaction = {
      value: value,
      date: getTodayDate(),
      description: "Depósito de dinheiro"
    };

    const bankStatement: transaction[] = user.bankStatement;
    bankStatement.push(transaction);

    res.status(200).send("Seu saldo foi atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ATUALIZAR SALDO

app.put("/users/update-balance", (req: Request, res: Response): void => {
  try {
    validateAuthentication(req.query);

    const user: account = findUser(
      String(req.query.name),
      String(req.query.cpf)
    )!;

    const bankStatement: transaction[] = user.bankStatement;

    for (let i = 0; i < bankStatement.length; i++) {
      if (isPastDay(bankStatement[i].date)) {
        user.balance -= bankStatement[i].value;
      }
    }

    res.status(200).send("Saldo atualizado!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// TRANSFERÊNCIA INTERNA
app.put("/transfer", (req: Request, res: Response): void => {
  try {
    validateAuthentication(req.query);

    const receiverName = req.body.name;
    const receiverCpf = req.body.cpf;
    const transferValue = req.body.value;

    if (!receiverName || !receiverCpf || !transferValue) {
      throw new Error(
        "Envie o valor, o nome e o CPF do destinatário da transferência"
      );
    }

    const user: account = findUser(
      String(req.query.name),
      String(req.query.cpf)
    )!;

    checkIfSufficientBalance(transferValue, user);

    const receiver: account = findUser(
      String(receiverName),
      String(receiverCpf)
    )!;

    validateUser(receiver);

    receiver.balance += transferValue;
    user.balance -= transferValue;

    res.status(200).send("Transferência realizada com sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// - - - - - - - - - - SERVIDOR - - - - - - - - - - //

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
