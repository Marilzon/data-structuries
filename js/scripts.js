const weekTemperature = [
  '31',
  '20',
  '39',
  '35',
  '28.9',
  '36',
  '26',
];

const daysOfWeek = [
  'Synday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

for (let key in daysOfWeek) {
  console.log(`${weekTemperature[key]} ºC at ${daysOfWeek[key]}`);
}
//
const numbers = [];
for (let i = 0; i < 6; i++) {
  numbers.push(i); /* Auto incrementing values to array */
}

for (let i = 0; i > -6; i--) {
  numbers.unshift(i); /* Auto incrementing valus to array */
}

console.log(numbers);
