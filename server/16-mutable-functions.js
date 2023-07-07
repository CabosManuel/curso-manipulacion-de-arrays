const products = [
	{ title: 'Pizza', price: 121, id: '🍕' },
	{ title: 'Burger', price: 121, id: '🍔' },
	{ title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

function printList() {
	console.log("products", products);
	console.log("myProducts", myProducts);
	console.log("-".repeat(10));
}

printList();

// Agregar un producto buscado a myProducts
const product = products.find(item => item.id === '🍔');
if (product) myProducts.push(product);
printList();

// Eliminar un producto de myProducts
const productIndex = myProducts.findIndex(item => item.id === '🍔');
if (productIndex >= 0) myProducts.splice(productIndex, 1);
printList();

// Actualizar la lista de productos por id
const update = {
	id: '🥞',
	changes: { price: 200, description: '4 panqueques con jarabe' }
};

const productIndexToUpdate = products.findIndex(item => item.id === '🥞');
products[productIndexToUpdate] = { 
		...products[productIndexToUpdate], // dejar sus valores originales
		...update.changes // agregar actualizaciones
	};
console.log('products updated', products);