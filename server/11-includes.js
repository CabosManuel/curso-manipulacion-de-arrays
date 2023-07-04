const pets = [ "cat", "dog", "bat" ];

let forPetsIncluded = false;
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  if (pet === 'dog') {
    forPetsIncluded = true;
    break;
  }
}
console.log('forPetsIncluded', forPetsIncluded); // true

// vs

const petsIncluded = pets.includes('dog');
console.log('petsIncluded', petsIncluded); // true