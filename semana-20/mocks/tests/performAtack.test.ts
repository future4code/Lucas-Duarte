import { Character } from "../src/characters";
import performAttack from "../src/performAttack";

describe("Testing performAttack()", () => {
  const validatorMockTrue = jest.fn((input: any) => {
    return true;
  });

  const validatorMockFalse = jest.fn((input: any) => {
    return false;
  });

  test("Should perform attack", () => {
    const attacker: Character = {
      name: "Atacante",
      life: 900,
      strength: 600,
      defense: 200
    };

    const defender: Character = {
      name: "Defensor",
      life: 900,
      strength: 400,
      defense: 400
    };

    performAttack(attacker, defender, validatorMockTrue as any);

    expect(defender.life).toEqual(700);
    expect(validatorMockTrue).toBeCalled();
    expect(validatorMockTrue).toBeCalledTimes(2);
    expect(validatorMockTrue).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    const attacker: Character = {
      name: "Ryu",
      life: 100,
      strength: 0,
      defense: 200
    };

    const defender: Character = {
      name: "Ken",
      life: 900,
      strength: 400,
      defense: 400
    };
    try {
      performAttack(attacker, defender, validatorMockFalse as any);
    } catch (error) {
      expect(error.message).toBe("Invalid Character");
      expect(validatorMockFalse).toBeCalled();
      expect(validatorMockFalse).toBeCalledTimes(1);
      expect(validatorMockFalse).toHaveReturnedTimes(1);
    }
  });

  test("Should not alter character life", () => {
    const attacker: Character = {
      name: "Ryu",
      life: 100,
      strength: 200,
      defense: 200
    };

    const defender: Character = {
      name: "Ken",
      life: 900,
      strength: 400,
      defense: 400
    };

    performAttack(attacker, defender, validatorMockTrue as any);

    expect(defender.life).toEqual(900);
  });
});
