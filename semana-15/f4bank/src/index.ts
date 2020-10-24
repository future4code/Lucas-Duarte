import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { users, account, transaction } from "./data";
import { determineAge, findUser, isPastDay, getTodayDate } from "./functions";

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
  let errorMessage: string = "Erro ao consultar seu saldo";

  try {
    const { name, cpf } = req.query;

    if (!name || !cpf) {
      errorMessage = "Passe seu nome e CPF para consultar o saldo";
      throw new Error();
    }

    const user: account | undefined = findUser(String(name), String(cpf));

    if (!user) {
      errorMessage = "Não encontramos sua conta!";
      throw new Error();
    }

    const balance: number = user.balance;
    const response = { balance };

    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(errorMessage);
  }
});

// CRIAR CONTA
app.post("/users/create", (req: Request, res: Response): void => {
  let errorMessage: string = "Erro ao criar nova conta!";

  try {
    const { name, cpf, birthDate } = req.body;
    const age: number = determineAge(birthDate);
    const user: account = {
      name,
      cpf,
      birthDate,
      balance: 0,
      bankStatement: []
    };

    const cpfAlreadyExists = users.some(user => user.cpf === cpf);

    if (!name || !cpf || !birthDate) {
      errorMessage = "Envie nome, cpf e data de nascimento!";
      throw new Error();
    }

    if (cpfAlreadyExists) {
      errorMessage = "CPF já existe!";
      throw new Error();
    }

    if (age < 18) {
      errorMessage = "Não aceitamos menores de idade!";
      throw new Error();
    }

    users.push(user);
    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(400).send(errorMessage);
  }
});

// ADICIONAR SALDO
app.put("/users/balance", (req: Request, res: Response): void => {
  let errorMessage: string = "Erro ao adicionar o saldo!";

  try {
    const { name, cpf } = req.query;
    const { balance } = req.body;

    if (!name || !cpf) {
      errorMessage = "Envie seu nome e CPF para alterar seu saldo";
      throw new Error();
    }

    if (!balance) {
      errorMessage = "Envie seu saldo";
      throw new Error();
    }

    const user: account | undefined = findUser(String(name), String(cpf));

    if (!user) {
      errorMessage = "Não encontramos sua conta!";
      throw new Error();
    }

    user.balance = balance;

    res.status(200).send("Seu saldo foi atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(errorMessage);
  }
});

// PAGAR CONTA

app.post("/users/pay", (req: Request, res: Response): void => {
  let errorMessage: string = "Erro ao pagar conta!";

  try {
    const { name, cpf } = req.query;
    const { value, description } = req.body;

    if (!name || !cpf) {
      errorMessage = "Envie seu nome e CPF para pagar uma conta";
      throw new Error();
    }

    const user: account | undefined = findUser(String(name), String(cpf));

    if (!user) {
      errorMessage = "Não encontramos sua conta!";
      throw new Error();
    }

    if (!value || !description) {
      errorMessage = "Envie o valor, a data de pagamento e a descrição!";
      throw new Error();
    }

    if (value > user.balance) {
      errorMessage = "Seu saldo é insuficiente para essa transação!";
      throw new Error();
    }

    if (req.body.date && isPastDay(req.body.date)) {
      errorMessage = "Não é possível pagar uma conta de um dia que já foi!";
      throw new Error();
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
    res.status(400).send(errorMessage);
  }
});

// TRANSFERÊNCIA INTERNA

app.put("/transfer", (req: Request, res: Response): void => {
  let errorMessage = "Não foi possível realizar a transferência";

  try {
    const { name, cpf } = req.query;
    const receiverName = req.body.name;
    const receiverCpf = req.body.cpf;
    const transferValue = req.body.value;

    if (!name || !cpf) {
      errorMessage = "Envie seu nome e CPF para fazer a transferência";
      throw new Error();
    }

    const user: account | undefined = findUser(String(name), String(cpf));

    if (!user) {
      errorMessage = "Não encontramos sua conta!";
      throw new Error();
    }

    if (transferValue > user.balance) {
      errorMessage = "Seu saldo é insuficiente para essa transferência!";
      throw new Error();
    }

    if (!receiverName || !receiverCpf || !transferValue) {
      errorMessage =
        "Envie o valor, o nome e o CPF do destinatário da transferência";
      throw new Error();
    }

    const receiver: account | undefined = findUser(
      String(receiverName),
      String(receiverCpf)
    );

    if (!receiver) {
      errorMessage = "Não encontramos a conta do destinatário!";
      throw new Error();
    }

    receiver.balance += transferValue;
    user.balance -= transferValue;

    res.status(200).send("Transferência realizada com sucesso");
  } catch (error) {
    res.status(400).send(errorMessage);
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
