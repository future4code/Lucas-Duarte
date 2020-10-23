export type account = {
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  bankStatement: transaction[] | [];
};

export type transaction = {
  value: number;
  date: string;
  description: string;
};

export const users: account[] = [
  {
    name: "Lucas",
    cpf: 41983808805,
    birthDate: "04/03/1993",
    balance: 900,
    bankStatement: [
      { value: 5, date: "23/10/2020", description: "comprei coxinha" },
      { value: 90, date: "23/10/2020", description: "jantei no almanara" },
      { value: 500, date: "23/10/2020", description: "comprei caixinha de som" }
    ]
  }
];
