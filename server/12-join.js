const elements = ["Fire", "Air", "Water" ];

const separator = '--';
let forElements = '';

for (let i = 0; i < elements.length; i++) {
	const element = elements[i];
	
	forElements = (i === elements.length-1)
		? forElements += element
		: forElements += element + separator;

}
console.log('forElements', forElements);

// vs

const joinElements = elements.join(separator);
console.log('joinElements', joinElements); // joinElements Fire--Air--Water

const title = 'Curso de Manipulación de arrays';
const pathURL = '/' + title.split(' ').join('-').toLowerCase();
console.log('pathURL', pathURL); // pathURL /curso-de-manipulación-de-arrays