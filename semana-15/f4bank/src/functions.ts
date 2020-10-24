import { users, account } from "./data";

// - - - - - DATAS - - - - -

export function getTodayDate(): string {
  const todayDate: Date = new Date();
  const month: number = todayDate.getUTCMonth() + 1;
  const day: number = todayDate.getUTCDate();
  const year: number = todayDate.getUTCFullYear();
  const date = day + "/" + month + "/" + year;

  return date;
}

export function determineAge(birthDate: string): number {
  const [day, month, year] = birthDate.split("/");
  const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

  const today: Date = new Date();
  const ageInMilisseconds: number = today.getTime() - dateOfBirth.getTime();
  const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365;

  return ageInYears;
}

export function isPastDay(dateAsString: string): boolean {
  const [day, month, year] = dateAsString.split("/");
  const date: Date = new Date(`${year}-${month}-${day}T21:00:00`);
  const today: Date = new Date();

  if (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  ) {
    return false;
  }

  const dateTimeStamp: number = date.getTime();
  const todayTimeStamp: number = new Date().getTime();

  if (todayTimeStamp - dateTimeStamp > 0) {
    return true;
  } else {
    return false;
  }
}

// - - - - - USER - - - - -

export function findUser(name: string, cpf: string): account | undefined {
  const user: account | undefined = users.find(
    user =>
      user.name.toLowerCase() === name.toLowerCase() && user.cpf === Number(cpf)
  );

  return user;
}
