/*//function without parameters
function sayHello() {
    console.log('-------');
    console.log('hello');
    console.log('-------');
}

//sayHello();

let a = sayHello();
a();

*/

function sayHello(name,age) {
    console.log('-------');
    console.log('hello  '+ name +' you are '+ age +'years old');
    console.log('-------');
}

sayHello('James',20);

function summation(num1,num2){
    let result = num1 + num2;
    console.log('-------');
    console.log(result);
    console.log('-------');
}

summation(20,40);

function calculateTax(amount) {
    let  result = amount * 0.0825;
   return result;
}

let tax = calculateTax(100);
console.log(tax);