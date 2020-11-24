import { Character } from "./characters";

const performAttack = (
  attacker: Character,
  defensor: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defensor)) {
    throw new Error("Invalid Character");
  }

  if (attacker.strength > defensor.strength) {
    defensor.life -= attacker.strength - defensor.strength;
  }
};

export default performAttack;
