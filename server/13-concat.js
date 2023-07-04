const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements]; // Para no crear una referencia en memoria, que esta mal (newArray = elements)
for (let i = 0; i < otherElements.length; i++) {
  const element = otherElements[i];
  newArray.push(element);
}

console.log('newArray', newArray);

// vs

const concatElements = elements.concat(otherElements);
console.log('concatElements', concatElements);

// Utilizando Split Operator (...) --------------------------------
const rta2 = [...elements, ...otherElements];
console.log('rta2', rta2);

elements.push(...otherElements) // push() si mutará el array
console.log('elements', elements);