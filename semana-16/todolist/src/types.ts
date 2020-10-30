export type User = {
  id: number;
  name: string;
  nickname: string;
  email: string;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  limitDate: string;
  status: STATUS;
  user_id: number;
};

export enum STATUS {
  TO_DO = "to do",
  DOING = "doing",
  DONE = "done"
}
