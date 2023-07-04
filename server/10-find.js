const numbers = [1, 30, 41, 29, 50, 60];

let forThirty = undefined;

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element === 301) {
		forThirty = element;
		break;
	}
}
console.log('forThirty', forThirty);

// vs

const findThirty = numbers.find(n => n === 30);
console.log('findThirty', findThirty);


// find() con objetos -------------------------------------------
const products = [
	{ name: "Pizza", price: 12, id: '🍕' },
  { name: "Burger", price: 23, id: '🍔' },
  { name: "Hot dog", price: 34, id: '🌭' },
  { name: "Hot cakes", price: 355, id: '🥞' }
];

const findProduct = products.find(p => p.id === '🌭');
console.log('findProduct', findProduct);

const findProductIndex = products.findIndex(p => p.id === '🍔');
console.log('findProductIndex', findProductIndex);