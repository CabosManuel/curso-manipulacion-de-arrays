// Mutable: Esto pasa porque la copia (para ser más eficiente hacer 
// referencia al mismo espacio en memoria que el original)
//
// No primitivos: Object, Arrays, Functions

const original = [1,2,3]
const copia = original
copia[0] = "Hola"

console.log(original) // [ 'Hola', 2, 3 ]