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
    cpf: 41983808806,
    birthDate: "04/03/1993",
    balance: 900,
    bankStatement: [
      { value: 50, date: "23/10/2020", description: "jantei no almanara" },
      {
        value: 400,
        date: "23/10/2020",
        description: "comprei caixinha de som"
      },
      { value: 100, date: "25/10/2020", description: "comprei coxinha" }
    ]
  },
  {
    name: "Natalia",
    cpf: 41983808805,
    birthDate: "08/03/1993",
    balance: 200,
    bankStatement: [
      { value: 90, date: "23/10/2020", description: "jantei no almanara" }
    ]
  }
];
