var weekTemperature = [
  '31',
  '20',
  '39',
  '35',
  '28.9',
  '36',
  '26',
];

var daysOfWeek = [
  'Synday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

for (key in daysOfWeek) {
  console.log(`${weekTemperature[key]} ºC at ${daysOfWeek[key]}`);
}
