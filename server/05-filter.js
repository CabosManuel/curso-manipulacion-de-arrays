const words = ['spray', 'elites', 'limit', 'apple', 'exuberant'];

const newArray = [];

for (let i = 0; i < words.length; i++) {
	const item = words[i];
	if (item.length > 6) {
		newArray.push(item);
	}
}

console.log('newArray', newArray);
console.log('words', words);

// vs

const filterArray = words.filter(item => item.length > 6);

console.log('newArray', filterArray);
console.log('words', words);


// ---------------------------------------------------------------------------

// Filtrar ordenes entregadas y total mayor o igual a 100
const orders = [
	{ customerName: 'Nicolas', total: 60, delivered: true },
	{ customerName: 'Nicole', total: 60, delivered: true },
	{ customerName: 'Zoe', total: 120, delivered: false },
	{ customerName: 'Santiago', total: 180, delivered: true },
	{ customerName: 'Valentina', total: 240, delivered: true }
]

const filteredOrders = orders.filter(order => order.delivered && order.total >= 100);

console.log('filteredOrders', filteredOrders);
console.log('orders', orders);

// Buscador de ordenes por nombre
const search = (query) => {
	return orders.filter(order => {
		return order.customerName.toUpperCase().includes(query.toUpperCase());
	});
}

console.log('search', search('n'));