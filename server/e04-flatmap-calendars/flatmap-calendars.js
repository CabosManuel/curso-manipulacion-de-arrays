const calendars = {
	primaryCalendar: [
		{ startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 15, 30), title: "Cita 1", },
		{ startDate: new Date(2021, 1, 1, 17), endDate: new Date(2021, 1, 1, 18), title: "Cita 2", },
	],
	secondaryCalendar: [
		{ startDate: new Date(2021, 1, 1, 12), endDate: new Date(2021, 1, 1, 12, 30), title: "Cita 2", },
		{ startDate: new Date(2021, 1, 1, 9), endDate: new Date(2021, 1, 1, 10), title: "Cita 4", },
	],
};

const dates = [...calendars.primaryCalendar, ...calendars.secondaryCalendar]
	.flatMap( (calendar) => calendar.startDate );
console.log('dates', dates);

/*
// Solución del reto -------------------------------------------------------
const rtaReto = Object.values(calendars).flatMap()(item => {
	return item.map(date => date.startDate)
});
console.log(rtaReto);
*/