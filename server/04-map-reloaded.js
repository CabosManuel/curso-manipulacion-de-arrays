const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zoe",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]

const result = orders.map(o => o.total);
console.log('totals', result); // totals [ 60, 120, 180, 240 ]

const ordersTax = orders.map(ord => {
	return {
		...ord,
		tax: .18
	};
});

console.log('ordersTax', ordersTax);
// ordersTax [
//   { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.18 },
//   { customerName: 'Zoe', total: 120, delivered: false, tax: 0.18 },
//   { customerName: 'Santiago', total: 180, delivered: true, tax: 0.18 },
//   { customerName: 'Valentina', total: 240, delivered: true, tax: 0.18 }
// ]

console.log('orders', orders);
// orders [
//   { customerName: 'Nicolas', total: 60, delivered: true },
//   { customerName: 'Zoe', total: 120, delivered: false },
//   { customerName: 'Santiago', total: 180, delivered: true },
//   { customerName: 'Valentina', total: 240, delivered: true }
// ]