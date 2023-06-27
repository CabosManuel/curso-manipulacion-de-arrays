const users = [
	{ name: 'Manuel', lastName: 'Cabos', age: 23 },
	{ name: 'Mario', lastName: 'Palomino', age: 12 },
	{ name: 'Pedro', lastName: 'Carrillo', age: 83 },
	{ name: 'Roberto', lastName: 'Moran', age: 37 },
];

function search(query) {
	return users.filter( user => {
		let keyword = query.toString();
		
		return user.age.toString().includes(keyword) ||
		user.name.toUpperCase().includes(keyword.toUpperCase()) ||
		user.lastName.toUpperCase().includes(keyword.toUpperCase())
	});
};

console.log('search "m"', search('m'));
console.log('search "3"', search('3'));
console.log('search "ca"', search('ca'));