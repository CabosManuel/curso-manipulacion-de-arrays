var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

// Encontrar si al menos 1 es par
const numbers = [1,2,3,4];

let result = false;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element % 2 === 0) {
		result = true;
		break;
	}
}

console.log('result', result); // result true

// vs

const result2 = numbers.some(item => item % 2 === 0);
console.log('result2', result2); // result2 true


// some() con Objetos ---------------------------------------------------------
// Al menos 1 orden fue entregada?
const orders = [
	{ customerName: 'Nicolas', total: 60, delivered: true },
	{ customerName: 'Nicole', total: 60, delivered: true },
	{ customerName: 'Zoe', total: 120, delivered: false },
	{ customerName: 'Santiago', total: 180, delivered: true },
	{ customerName: 'Valentina', total: 240, delivered: true }
];

const oneOrderDelivered = orders.some(o => o.delivered);
console.log('oneOrderDelivered', oneOrderDelivered); // oneOrderDelivered true

// some() con Librería --------------------------------------------------------
// Retornar si la fecha nueva coincide con una fechas de la lista
const dates = [
  {
    startDate: new Date(2023, 1, 1, 10),
    endDate: new Date(2023, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2023, 1, 1, 15),
    endDate: new Date(2023, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2023, 1, 1, 20),
    endDate: new Date(2023, 1, 1, 21),
    title: "Cena",
  },
];

const isOverlap = (newDate) => {
	return dates.some( date => {
		
		return areIntervalsOverlapping( // función que valida si 2 fechas se sobreponen
			{start: date.startDate, end: date.endDate},
			{start: newDate.startDate, end: newDate.endDate}
		);

	});
}

const newAppointment = {
	startDate: new Date(2023, 1, 1, 19),
	endDate: new Date(2023, 1, 1, 20, 30)
}

console.log('isOverlap', isOverlap(newAppointment));