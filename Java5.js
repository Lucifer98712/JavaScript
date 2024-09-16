//functions i.e reusable code
//function is either called or invoked
function reusableCode(name){
    console.log('Hello ' + name);
}

reusableCode('Pratik');

function sum(a, b){
    console.log(a + b);
}

sum(5,6);
sum(4,2);

//Global scope and functions

//Global variable:

var globalVariable = 10;

function test1(){
    //If we don't use var keyword inside this function scope while declaring variable then variable becomes global
    oopsGlobal = 5;
    var Local = 2; //Only can be accessed inside this function
    console.log(Local);
}

function test2(){

    var output;

    if(typeof globalVariable != 'undefined'){ //returns the typeof given variable
        output += '\nglobalVariable: ' + globalVariable;
    }

    if(typeof oopsGlobal != 'undefined'){
        output += ' \noopsGlobal: ' + oopsGlobal;
    }

    if(typeof Local != 'undefined'){
        output += ' \nLocal: ' + Local;
    }

    console.log(output);
}

test1();
test2();

//Local variable will take precedence over the global variable with the same name inside a function
var outerWear = 'Shirt';

function clothe(){
    var outerWear = 'Hoddie';

    return outerWear;
}

console.log(outerWear);
console.log(clothe());

//Using return to evaluate value of a function

function plusFive(num){
    return num + 5;
}

function square(num){
    return num*num;
}

console.log(plusFive(5));
console.log(square(5));


//Undefined value returned

var undef;

function plusTen(){
    undef += 10; 
}

console.log(plusTen());

//Using assignment operator to store return value

var changed = 0;

function change(num){
    return (12*num)/44;
}

changed = change(20);

console.log(changed);

//stand in line or queue

var testArr = [1,2,3,4,5];
console.log(testArr);

function nextInLine(arr,dat){
    arr.push(dat);
    return arr.shift();
}

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log('After: ' + JSON.stringify(testArr));

//Boolean values
const prompt = require('prompt-sync')({sigint: true});//Need to use this code to use prompt
function compare(a,b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}

console.log(compare(2,3));

var firstNumber, secondNumber;
firstNumber = prompt('Enter first number: ');
secondNumber = prompt('Enter second number: ');

console.log(compare(firstNumber,secondNumber));

//equality operator i.e. == : What this does is that it converts both comparison elements to the same type
//strict equality opertaot i.e. === : What this does is that it doesn't convert types

function equalityOperator(num){
    if(num == 5){
        return true;
    }
    return false;
}

function strictEqualityOperator(num){
    if(num === 4){
        return true;
    }
    return false;
}

console.log(equalityOperator(5));
console.log(equalityOperator('5'));
console.log(strictEqualityOperator(4));
console.log(strictEqualityOperator('4'));

//iequality operator != : type conversion
//strict inequality operator !== : no type conversion

function inEqua(a,b){
    if(a != b){
        return 'Not equal';
    }
        return 'equal';
}

function strInEqua(a,b){
    if(a !== b){
        return 'Not equal';
    }
        return 'Equal';
}

console.log(inEqua(10,'10'));
console.log(inEqua(5,'8'));
console.log(strInEqua(10,10));
console.log(strInEqua(10,10));
