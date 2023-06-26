const letters = ['a','b','c'];

const newArray = [];
for (let i = 0; i < letters.length; i++) {
	const element = letters[i];
	newArray.push(element + '_new');
}

console.log('original', letters); // original [ 'a', 'b', 'c' ]
console.log('newArray', newArray); // newArray [ 'a_new', 'b_new', 'c_new' ]


// vs

const newNewArray = letters.map(item => item + '_new');

console.log('original', letters); // original [ 'a', 'b', 'c' ]
console.log('newNewArray', newNewArray); // newNewArray [ 'a_new', 'b_new', 'c_new' ]
