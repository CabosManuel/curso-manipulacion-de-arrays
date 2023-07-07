const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(); // [ 'Dec', 'Feb', 'Jan', 'March' ]

// -------------------------------------------------------
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [ 1, 100000, 21, 30, 4 ]

// de menor a mayor
numbers.sort( (a, b) => a - b );
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]

// de mayor a menor
numbers.sort( (a, b) => b - a );
console.log(numbers); // [ 100000, 30, 21, 4, 1 ]

// -------------------------------------------------------
const words = [ "réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana", ];
words.sort();
console.log(words); // [ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]

// Para versiones más antiguas
words.sort( (a, b) => a.localeCompare(b) );
console.log(words); // [ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]

// -------------------------------------------------------
const orders = [
	{ customerName: "Nicolas", total: 600, delivered: true, },
	{ customerName: "Zulema", total: 120, delivered: false, },
	{ customerName: "Santiago", total: 1840, delivered: true, },
	{ customerName: "Valentina", total: 240, delivered: true, },
];

orders.sort( (a, b) => b.total - a.total );
console.log(orders);
/*
[
  { customerName: 'Santiago', total: 1840, delivered: true },
  { customerName: 'Nicolas', total: 600, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false }
]
*/