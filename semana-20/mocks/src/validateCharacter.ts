import { Character } from "./characters";

const validateCharacter = (input: Character) => {
  if (!input.name || !input.life || !input.strength || !input.defense) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }

  return true;
};

export default validateCharacter;
