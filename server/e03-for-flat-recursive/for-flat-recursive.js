// Flat matrix con for y recursividad 🤔

const matrix = [
	[1,2,3],
	[4,5,6, [12,13, [1,2,3,[4]]]],
	[7,8,9],
];

let newArray = [];
for (let i = 0; i < matrix.length; i++) {
	const element = matrix[i];
	for (let j = 0; j < element.length; j++) {
		const subElement = element[j];
		newArray.push(subElement);
	}
}
console.log(newArray);

function recursive (array) {
	let newArray = [];

	if (!Array.isArray(array)) return array;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		newArray = newArray.concat(recursive(element));
	}
	
	return newArray;
}

console.log(recursive(matrix));