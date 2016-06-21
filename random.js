function randomInRange(a,b) {
  return Math.random() * (b - a) + a;
}

var x = randomInRange(5,100);
console.assert(x >= 5 && x <= 100);
var y = randomInRange(-25,30);
console.assert(y >= -25 && y <= 30);

console.log(x);