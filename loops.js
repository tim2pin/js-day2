var stable = {
  horses:[
    {
      name: 'Prancy',
      color: 'brown'
    },
    {
      name:'Buttercup',
      color: 'yellow'
    },
    {
      name: 'BIG BROWN REAL HORSE',
      color: 'fawn'
    }gjxvgxcvgcxvgjc
  ]

};

// function feed(horses) {
//   var numHorses = horses.length; 
//   for (var i=0; i < numHorses; i++) {
//     console.log(horses[i].name + ':thanks for feeding me');
//   }
//   console.log('done feeding!');
// }


// feed(stable.horses);

// function brush(horses) {
//   var numHorses = horses.length; 
//   var i = 0;
//   horses.map(function(horse){
//     console.log(horse.name + ':thanks for brushing me' + i);
//     i++;
//   });
//   console.log('done brushing!');
// }

// brush(stable.horses);

// // [2, 7, 9].forEach(function(element, index){
// //   console.log(element + " " + index);
// })

var farm = {
  address: "my street",
  type: "corn"
};

//console.log(farm['type']);


for (prop in farm){
  console.log(prop + ':' + farm[prop]);
}









