// Arrays itarations
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

// Arrays methods

// array.push(element) add to last key and array.unshift() add to first key
// array.pop() remove last key and array.shift() remove first key

const numbers = [];
for (let i = 0; i < 6; i++) {
  numbers.push(i); /* loop to increment values to array */
}

for (let i = 0; i > -6; i--) {
  numbers.unshift(i); /* loop to increment values to array */
}
console.log(numbers);
