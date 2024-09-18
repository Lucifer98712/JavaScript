//Profile Lookup

var contacts = [
    {
        'firstName': 'Akira',
        'lastName': 'Lane',
        'number': '098726545323',
        'likes': ['Pizza', 'Coding','Brownie Points']
    },
    {
        'firstName':'Harry',
        'lastName':'Potter',
        'number':'048463288293',
        'likes':['Hogwarts','Magic','Hagrid']
    },
    {
        'firstName':'Sherlock',
        'lastName':'Holmes',
        'number':'02313445345',
        'likes':['Intriguing Cases', 'Violin']
    },
    {
        'firstName':'Kristian',
        'lastName':'Vos',
        'number':'unknown',
        'likes':['JavaScript','Gaming','Foxes']
    }
];

function lookUpProfile(name,prop){
    for(var i=0; i<contacts.length; i++){
        if(contacts[i].firstName===name){
            return contacts[i][prop] || 'No such contact!';
        }
    }
}

var data = lookUpProfile('Harry','likess');
console.log(data);

//Generating random fraction between 0 and 1

console.log(Math.random());

//Generating random whole numbers between 0 and 9

console.log(Math.floor(Math.random()*10)); //Math.floor rounds to the floor value of floating point number

//Generating random whole numbers within a range

function randomNumberWithinRange(myMin,myMax){
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}

var random = randomNumberWithinRange(7,90);
console.log(random);

//Convert string number to integer with parseInt()

function stringToInteger(st){
    return parseInt(st);
}

console.log(stringToInteger("55"));

//Using parseInt with radix(i.e base of the number system)

//parseInt(string,base) base specifies what number system the passed string is to the computer

function withRadix(stri){
    return parseInt(stri,2);//default base is 10
}

var ra = withRadix('1101');
console.log(ra);

