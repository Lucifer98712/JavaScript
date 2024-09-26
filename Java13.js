//Freezing objects i.e not abling properties off an object to be changed
//Suntax Object.freeze(object name)

//Prevent object from mutation:
function freezeobj() {
    'use strict';
    const MATH_CONSTANT = {
        PI : 3.14
    };

   // Object.freeze(MATH_CONSTANT);
    try {
        MATH_CONSTANT.PI = 99;
    } catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANT.PI;
}

const PI = freezeobj();

//#Arrow functions:

//1.Anonymous function i.e function w/o a name

let magic = function(){
    return new Date();
};
console.log(magic);
//can also be writen as:
let mag =()=>{
    return new Date();
};//This is much faster than above
console.log(mag);
//can also be written as:

const MA = () => new Date();//Much shortened version 
console.log(MA);

//Steps to arrow function:
/*
1.Remove function keyword.
2.Put arrow (=>) after parameter bracket.
3.Remove the return keyword.
*/ 

var myConcat = function (arr1,arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2],[3,4,5]));

//Reducing the function, we get:

var myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

//High order function: A function that takes in other function to produce another function
//HOF: Take in function as argument to process collection of data
const areaOfSquare = (length) => length*length;
const perimeterOfSquare = (length) => 4*length;

console.log(areaOfSquare(5));
console.log(perimeterOfSquare(5));

function dualCalculate(length,logic){
    let output = [];
    for (let i = 0; i < length.length; i++) {
        output.push(logic(length[i]));
        }
    return output;    
}

console.log(dualCalculate([3,4,5],perimeterOfSquare));
function primeCheck(num){
    for (let i = 2, s=Math.sqrt(num); i<=s; i++) {
        if(num % i === 0){
            return !1;
        }
        return num>1;
    }
}
console.log([5,9,10,1,6,3].filter(primeCheck));

const realNumberArray = [1.2,-2,-6,46,12,-3.6,9.8,10,11.2];

const squareList = (arr) =>{
    //To filter given array into +ve Integers
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//We just passed in an arrow function to make everything fit in one line and easy

//Default parameters:
const increment = (function(){
    return function increment(number,value = 1){
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

//rest operator i.e.(...), syntax: ...name , converts the passed arguments into a single array called name

let restOp = (...args) => args;
console.log(restOp(1,2,3,4));

//Spread operator: It's denoted just like the rest operator i.e with ...
//Spread operator only used in an argument to a function or an array illeteral

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
let arr3;
(function(){
    arr2 = arr1; //Not static copying but dynamic copying i.e. if we change arr1, arr2 will change
    //To prevent dynamic copying we use spread operator i.e [...arr]. It spreads the contents of the array and copies them
    arr3 = [...arr1];
    arr1[0] = 'potato'; 
})();
console.log(arr3);
console.log(arr2);
