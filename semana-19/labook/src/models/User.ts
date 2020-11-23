import hashManager from "../services/hashManager";

interface AuthenticationData {
  id: string;
}

interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getEmail = (): string => this.email;
  public getPassword = (): string => this.password;

  public async passwordIsCorrect(inputPassword: string): Promise<any> {
    try {
      const passwordIsCorrect: boolean = await hashManager.compare(
        inputPassword,
        this.getPassword()
      );

      if (!passwordIsCorrect) {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export { AuthenticationData, SignUpInput, LoginInput, User };
