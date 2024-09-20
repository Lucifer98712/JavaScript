//var, let and const
//declaring variable with var is outdated and has its disadvantage in coding
//var lets you declare the same variable twice in the same scope which is inappropriate
let car = 'Nissan';
car = 'Toyota';
var gun = 'MP4';
var gun = '.99';//No error

function catwalk(){
'use strict';//this prevents unsafe action errors, a lot of people use 'use strict' on the top of their JS file, it's also used to catch coding mistakes
//coding mistakes such as declaring a variable w/o using var,let or const
gun = gun + car;
console.log(gun);
}
catwalk();

//Scope of var: its globally defined
//Scope of let: its limited to the line of code its within i.e block of code

function abc(){
    'use strict';
    var i = 'function scope';
    if(1){
        var i = 'block scope';
        console.log('Scope of i:',i);
    }
    console.log('Scope of i:',i);

}

function def(){
    'use strict';
    let i = 'function scope';
    if(1){
        let i = 'block scope';
        console.log('Scope of i:',i);
    }
    console.log('Scope of i:',i);

}

abc(); def();
//const is used to define constants i.e const variable not changeable throughout the program
function constant(name){
    'use strict';
    const STUDENT = 'Is cool!';//STUDENT is read-only
    //STUDENT = 'Not cool!';
    console.log(name + ' ' + STUDENT);
} 
constant('');

//Mutate array declared with const 
//we can mutate an array by using bracket array notation

const S = [2,4,5];

function mutateArray(){
    'use strict';
   // S = [5,2,4]; error
   //Right method:
   S[0]=5;
   S[1]=2;
   S[2]=4;
    console.log(S);
}
mutateArray();

