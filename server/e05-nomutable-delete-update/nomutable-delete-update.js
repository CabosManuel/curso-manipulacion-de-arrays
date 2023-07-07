const products = [
	{ title: 'Pizza', price: 121, id: '🍕' },
	{ title: 'Burger', price: 121, id: '🍔' },
	{ title: 'Hot cakes', price: 121, id: '🥞' },
];

function print(array) {
	console.log('original', products);
	console.log(array);
	console.log('-'.repeat(20));
}

// como eliminar un array sin mutar ---------------------------------
const remainingProducts = products.filter( p => p.id != '🍕' );
print(remainingProducts);

// como actualizar un array sin mutar -------------------------------
const update = {
	id: '🍕',
	changes: { price: 50, description: '1 sola rebanada de pizza americana' }
};
const updatedProducts = products.map( p => {
	if (p.id === update.id) return p = {...p, ...update.changes };
	
	return p;
});
print(updatedProducts);