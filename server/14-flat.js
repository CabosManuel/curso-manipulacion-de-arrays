const matrix = [
	[1,2,3],
	[4,5,6, [12,13, [21,22]]],
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
console.log('newArray', newArray); // newArray [ 1, 2, 3, 4, 5, 6, [ 12, 13, [ 21, 22 ] ], 7, 8, 9 ]

// vs

flatMatrix = matrix.flat(3);
console.log('flatMatrix', flatMatrix); // flatMatrix [ 1, 2, 3, 4, 5, 6, 12, 13, 21, 22, 7, 8, 9 ]
