//Create strings using template literals
//Use back tick(`)

const person = {
  name: "Zodiac Hasbro",
  age: 45,
};

const greetings = `Hello, My name is ${person.name}!
I am ${person.age} years old.`;

console.log(greetings);

//Coding challenge:

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  let displayList = [];

  for (let i = 0; i < arr.length; i++) {
    displayList.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return displayList;
}

console.log(makeList(result.failure));

//Write consise object literal declaration using simple fields
const createPerson = (name,age,gender) => {
    return{
      name : name,
      age : age,
      gender : gender
    };
};

console.log(createPerson("Pratik Shah",22,"Male"));

const createPersonEfficient = (name,age,gender) => ({name,age,gender});

console.log(createPersonEfficient("Pratik Shah",22,"Male"));

//Write concise declarative function
//Function inside an object
//#Long way of putting function inside an object

const bicycle ={
  gear : 2,
  setGear : function(newGear){
    'use strict';
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Shorter method to input function

const bicycleEfficient ={
  gear : 2,
  setGear(newGear){
    'use strict';
    this.gear = newGear;
  }
};

bicycleEfficient.setGear(4);
console.log(bicycleEfficient.gear);