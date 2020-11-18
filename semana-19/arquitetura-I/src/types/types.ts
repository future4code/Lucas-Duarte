export enum USER_ROLES {
  NORMAL,
  ADMIN
}

export type signUpInput = {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};
