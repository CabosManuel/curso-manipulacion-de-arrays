const numbers = [1,30,39,29,10,13];

let result = true;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element >= 40) {
		result = false;
		break;
	}
}

console.log('result', result);

// vs

const isLowerThan40 = numbers.every(n => n <= 40);
console.log('isLowerThan40', isLowerThan40);

// some () con Objetos -------------------------------------------------
// Evaluar si todos lo jugadores son menores a 15 años
const team = [
	{ name: "Nicolas", age: 12 },
	{ name: "Andrea", age: 8 },
	{ name: "Zulema", age: 2 },
	{ name: "Santiago", age: 18 }
];

const isLowerThan15 = team.some( player.age <=15 );
console.log('isLowerThan15', isLowerThan15);