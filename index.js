// var horseRacing = {
//   title: "Kentucky Derby",
//   date:"5-6-16",
//   attendance: 170513,
//   started: false,
//   address: {
//     street: "700 central ave",
//     city: "Louisville",
//     state: "Kentucky",
//     zip: "40208",
// },
//     races :[[5,8,2], [1,3,9], [7,4,6]];
  
//    //horses: [1,2,3,4,5,6,7,8,9],
//   //race: [1,2,3],
//   //raceCard[[1[5,8,2]], [2[1,3,9]], [3[7,4,6]]
// };
  
//reality

var raceDay = {
   title:"Horse Bonanza",
   date: new Date('2017/08/17 12:09:36'),
   numAttendees: 600,
   started: false,
   location:{
     streetAddress:'123 Horse Street',
     city: 'Minneapolis',
     state: 'MN',
     zip: '55420'
   },
   races: [
      [5,8,2], [1,3,9], [7,4,6]
   ]


};

//Test driven development checks our assumptions vs reality


//assumptions
console.assert(typeof raceDay === 'object');
console.assert(typeof raceDay.title === 'string');
console.assert(typeof raceDay.date === 'object');
console.assert(raceDay.date instanceof Date);
console.assert(typeof raceDay.numAttendees === 'number');
console.assert(typeof raceDay.started === 'boolean');
console.assert(typeof raceDay.location === 'object');
console.assert(typeof raceDay.location.streetAddress === 'string');
console.assert(typeof raceDay.location.city === 'string');
console.assert(typeof raceDay.location.state === 'string');
console.assert(typeof raceDay.location.zip === 'string');
console.assert(raceDay.races.length === 3);
console.assert(raceDay.races[0].length === 3);
console.assert(raceDay.races[1].length === 3);
console.assert(raceDay.races[2].length === 3);
console.assert(raceDay.races[0].indexOf(5) === 0);


