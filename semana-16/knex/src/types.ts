export enum ACTOR_GENDER {
  MALE = "male",
  FEMALE = "female"
}

export type Actor = {
  id: string;
  name: string;
  salary: number;
  birth_date: string;
  gender: ACTOR_GENDER;
};
