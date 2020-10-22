type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// A) rodaria o comando 'tsc exercicio4.ts'
// B) rodaria 'tsc ./src/exercicio4.ts'
// C) 'tsc arquivo1.ts arquivo2.ts arquivo3.ts', ou definindo um script no package.json
// D) tá ok!