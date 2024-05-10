/*
let i = 5;

if(i==4){
    console.log('It is equal to i');
}else {
    console.log('It is not equal');
}
*/

//switch statement
let grade = 'A';

switch(grade){

case 'A':
    console.log('Excellence performance');
    break;
case 'B':
    console.log('Better Performance');
    break;
case 'C':
    console.log('Better performance');
    break;
case 'D':
    console.log('poor performance');
    break;
case 'E':
    console.log('Failed');
    break;
default:
    console.log('No result');               
}


//ternary operator

let a = 1 ,b ='1';

let result = (a == b) ? 'equal' : 'Inequal';//triple equal sign is for striked equality.
console.log(result);
