const numbers = [1, 2, 3, 4];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	sum += element;
}
console.log('sum', sum);

// vs

const sumTotal = numbers.reduce((total, element) => total + element, 10);
console.log('sumTotal', sumTotal);