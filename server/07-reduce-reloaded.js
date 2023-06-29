// Contar en un objeto cuantos hay de cada número
/* output:
{
	1: 1,
	2: 1,
	3: 2
}
*/
const items = [1, 3, 2, 3, 3, 3, 3, 10000];

const reducedItems = items.reduce( (obj, item) => {
	if(!obj[item]) obj[item] = 1;
	else obj[item] = obj[item] + 1;

	return obj;
}, {} );

console.log('reducedItems', reducedItems); // reducedItems { '1': 1, '2': 1, '3': 5, '10000': 1 }

// El objeto lo está utilizando como un array, ejemplo
let object = {};
object[1] = 10;
console.log(object); // { '1': 10 }


// Filtrar en 3 listas cuantos hay por niveles
const users = [
  { name: "Nicolas", level: "low" },
  { name: "Andrea", level: "medium" },
  { name: "Zulema", level: "hight" },
  { name: "Santiago", level: "low" },
  { name: "Valentina", level: "medium" },
  { name: "Lucia", level: "hight" }
];

const lvls = users
	.map( user => user.level )
	.reduce( (levels, lvlValue) => {
		if (!levels[lvlValue])
			levels[lvlValue] = 1;
		else
			levels[lvlValue] = levels[lvlValue] + 1;

		return levels;
	}, {} );

console.log('lvls', lvls); // lvls { low: 2, medium: 2, hight: 2 }