export default async function login(input: any) {
  if (!input.email || !input.password) {
    throw new Error(
      'Preencha os campos "name","nickname", "email" e "password"'
    );
  }
}
