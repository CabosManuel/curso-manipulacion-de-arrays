// Ordenar de la más reciente a la más antigua
const orders = [
	{ customerName: "Nicolas", total: 600, delivered: true, date: new Date(2023, 0, 16) },
	{ customerName: "Zulema", total: 120, delivered: false, date: new Date(2023, 0, 23) },
	{ customerName: "Santiago", total: 1840, delivered: true, date: new Date(2023, 0, 7) },
	{ customerName: "Valentina", total: 240, delivered: true, date: new Date(2023, 0, 1) },
];

orders.sort( (a, b) => b.date - a.date )
console.log(orders);
/*
[
	{
		customerName: 'Zulema',
		total: 120,
		delivered: false,
		date: 2023-01-23T05:00:00.000Z
	},
	{
		customerName: 'Nicolas',
		total: 600,
		delivered: true,
		date: 2023-01-16T05:00:00.000Z
	},
	{
		customerName: 'Santiago',
		total: 1840,
		delivered: true,
		date: 2023-01-07T05:00:00.000Z
	},
	{
		customerName: 'Valentina',
		total: 240,
		delivered: true,
		date: 2023-01-01T05:00:00.000Z
	}
]
*/