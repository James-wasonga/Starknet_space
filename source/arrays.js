let a = [4,2,6,8,9,7];
let b = ['Bob','Mark','john','philip'];

console.log(a[4]);
console.log(a);


//inserting an element in an array
a[7]=3;
console.log(a);

//Array is of type object
console.log(typeof a);

//array in js can hold elements of different datatypes

let c = [20,'mark',true];
console.log(c);
console.log(c[4]); //accessing array with index that does not exist,the output is undefined for that case
console.log(c.length);

//ading an element to array above the expected index
c[10] = 10;
console.log(c);

//push and pop

a.push(77);
console.log(a);

a.pop();
a.pop();
a.pop();

console.log(a);

