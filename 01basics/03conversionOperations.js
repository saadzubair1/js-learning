let score = "45"

console.log(typeof score);

let scoreInNumber = Number(score);

console.log(typeof scoreInNumber);

//////////////////////////////////////

let score1 = "45A"

console.log(typeof score1);

let scoreInNumber1 = Number(score1);

console.log(typeof scoreInNumber1);
// it will print NaN = Not a Number because of alphabet in score
// if we put null it will show 0 (zero)
// if we put undefined it will show NaN
// if we put boolean like true or false it will print 1 for true and zero for false
// "" or empty string gives 0 (zero)

console.log( "2" == 2 ); 

