import { users, account, transaction } from "./data";
import { findUser } from "./functions";

export function validateAuthentication(query: any): void {
  if (!query.name || !query.cpf) {
    throw new Error("Erro de autenticação: envie um nome e CPF!");
  } else {
    const user: account | undefined = findUser(
      String(query.name),
      String(query.cpf)
    );

    if (!user) {
      throw new Error("Erro: não encontramos um usuário com esse nome e CPF");
    }
  }
}

export function validateUser(user: account | undefined): void {
  if (!user) {
    throw new Error("Não foi possível encontrar sua conta");
  }
}

export function checkIfCpfAlreadyExists(cpf: string): void {
  const cpfAlreadyExists = users.some(user => user.cpf === Number(cpf));

  if (cpfAlreadyExists) {
    throw new Error("Já existe um cadastro com esse CPF");
  }
}

export function checkIfIsUnderage(age: number): void {
  if (age < 18) {
    throw new Error("Não aceitamos menores de idade");
  }
}

export function checkIfSufficientBalance(value: number, user: account) {
  if (value > user.balance) {
    throw new Error("Saldo insuficiente para essa transação");
  }
}
