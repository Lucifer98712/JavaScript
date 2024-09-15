//String declaration

//Nested double quoute problem
var myHeroAcademia = "Deku is the 9th weilder of \"One for all\""; //Can be fixed by using \"\"
console.log(myHeroAcademia);

var dragonBallZ = 'Goku is the "GOAT "i.e Greatest Of All Time""';//Or the nested double quote problem can be solved by putting the main string in single quote...
console.log(dragonBallZ);

/****
Escape sequences i.e \n or \t
\' single quote
\" double qoute
\n newline
\\ backslash
\t tab
\f form feed
\b backslash 
\r carriage return

****/

var myStr = '\\FirstLine\\\n\'SecondLine\'\n\t\"ThirdLine\"';
console.log(myStr);

//Concatenation of string: 
//using + operator

var conStr = 'Hello, there. ' + 'How do you do?';
console.log(conStr);

//Using += operator
conStr += ' It is nice to finally meet you.';
console.log(conStr);

//Using variables
var firstName, lastName, fullName;
firstName = 'Pratik ';
lastName = 'Shah.';
fullName = 'My name is ' + firstName + lastName;
console.log(fullName);

//Joining variables using += operator

firstName += lastName;
console.log(firstName);

//Finding length of string  just use .length object

var firstNameLength = firstName.length;
console.log(firstNameLength);

//String is just a char array
//Accessing positional elements of string

console.log(firstName[2]);

//Bracketing method to find last character in a string

var lastChar = firstName[firstName.length-1];
console.log(lastChar);

//for nth last character

var n = 4; //Put value of n
var nthLastChar = firstName[firstName.length-n];
console.log(nthLastChar);
