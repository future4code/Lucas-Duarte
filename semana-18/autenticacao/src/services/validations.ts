export async function validateBody(body: {}): Promise<void> {
  const bodyPropertiesNames: string[] = Object.keys(body);
  const bodyValues: string[] = Object.values(body);

  for (let i = 0; i < bodyValues.length; i++) {
    if (!bodyValues[i]) {
      throw new Error(`O campo "${bodyPropertiesNames[i]}" é obrigatório`);
    }
  }
}
