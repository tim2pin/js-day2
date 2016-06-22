// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

//Originally speed was NaN because if no amount is given as a parameter, amount will 
//equal string 'undefined'.

var speed = 0;

function accelerate(amount) {
    if (typeof amount === "undefined" || speed === 0){
    amount = 1;
  } 
    speed += amount;
 
}

accelerate();

console.assert(speed === 1);

accelerate(5);

console.assert(speed === 6);

accelerate();

console.assert(speed === 7);
