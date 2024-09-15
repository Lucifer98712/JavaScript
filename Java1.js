console.log("Data types in Java!");

/*
Data types:
undefined(used for variables that hasn't been defined.)
null(used for variables that are null.)
boolean(used for variables that are either true ir false.)
string(for string variables.)
symbol(for symbols?)
number(used for storing numbers.)
object(used to store a lot of key value pairs.)

*/

//Defining a variable in JS:

var myName = 'Pratik' //declared variables using var can be used throughout the whole program

myName = 'Patrick' //Properties of variables!

let urName = 'George' //declared variables using let can be only used where it's scope is declared at

const g = 9.8 //for declaring constant 

console.log(myName + ' ' + urName + ' ' + 2*g )

//Assingining variables using assingment '=' operator

var a;

var b = 8;
console.log(a + ' and ' + b);

a = 12;
b = a;

console.log(a + ' and ' + b);

//Variable names are case sensitive
//Use camelCase structure for name declaration ie first letter small and then first letter capital of each word
//E.g:
var myStudentRecord;

//Compound assignment with augmented arithemetic
a += 7; //Same as a = a+7
console.log(a);
a -= 5;
console.log(a);
a *= 2;
console.log(a);
a /= 3;
console.log(a);



