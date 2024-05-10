//javascript type conversion

let num1 = 7;
let num2 = '3';
num2 = parseInt(num1,10);
let result = num1 + num2;

console.log('Answer:' + result);

//not a number NaN

let d ;
d = parseInt('bob', 10);

//checking whether d is not a number
let e = isNaN(d);
console.log(d);
console.log(e);