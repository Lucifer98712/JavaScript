//Use destructuring assignments to assign variables from objects
/*
Destructuring assignment syntax: var,const or let { object : assignment_variable1,
 object : assignment_variable2, .... }
*/

var voxel = { x: 3.7, y: 4.8, z: 5.5 };

//Normal assignment:

var x = voxel.x; // x = 3.7
var y = voxel.y; // y = 4.8
var z = voxel.z; // z = 5.5

//Destructuring assignment:
//Quicker way of assigning values into variables
const { x: a, y: b, z: c } = voxel; // a = 3.7, b = 4.8, c = 5.5

const AVG_TEMPERATURES = {
  today: 77.8,
  tomorrow: 78,
};

function TempOftomorrow(avgTemperature) {
  "use strict";

  const { tomorrow: tempOfTmrw } = avgTemperature;

  return tempOfTmrw;
}

console.log(TempOftomorrow(AVG_TEMPERATURES));

//Destructuring assignment for nested objects

//Creating nested object:

const LOCAL_FORECAST = {
  today: { min: 55, max: 75 },
  tomorrow: { min: 58, max: 74.6 },
};

//Function for max of tomorrow:
function maxOfTmrw(forecast) {
    'use strict';
    const {tomorrow : {max : maxTmrw}} = forecast;
    return maxTmrw;
}

console.log(maxOfTmrw(LOCAL_FORECAST));

//Use destructuring assignment to assign variables from arrays
//Can't specify which elements from a array go into a variable

const [xx,yy, , ,zz] = [1,2,3,4,5,6];

console.log(xx,yy,zz);

let aa = 8, bb = 6;
[aa,bb] = [bb,aa]; //destructuring can be used to swap variables
(() => {
  "use strict";
  [aa,bb] = [bb,aa];
})();
console.log(aa,bb);

//Use destructuring assignment with the rest operator

const source = [1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
  let [ , , ...arr] = list;
  return arr;
}

console.log(source);
console.log(removeFirstTwo(source));

//Using destructuring algorithm to pass object as argument in function parameter

const stats = {
  max : 56.78,
  standard_deviation :  4.34,
  median : 34.54,
  mode : 23.87,
  min : -0.75,
  average : 35.85
};

const half = (function(){
  return function half({max,min}){
    return (max + min) / 2.0;
  };
})();
console.log(stats); 
console.log(half(stats));