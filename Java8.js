//Objects in JavaScript
var classOne = {   //Syntax for defining class in js
    'FName': 'Pratik',
    'LName': 'Shah',
    'Age': 21,
    'fav Food': ['Burgers', 'Pizza'],
    66 : 'Ham'    
};
//Created our own object
//Accessing objects inside a class using '.' notation
var firstName = classOne.FName;
var lastName = classOne.LName;
var favFood = classOne["fav Food"];//Accessing using bracket notation, used it because of space in object
var num = 66;
var hu = classOne[num];
classOne.Age = 22;//Update existing object

//We can add a property(object) to class using dot or bracket notation
classOne['fav Screen'] = 'AMOLED';

//delete object from a class 

delete classOne.LName;
console.log(firstName + ' ' + favFood);

//Objets for lookups...

function phoneticLookup(str) {
    var result;

    var lookup = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'frank'

    };

    result = lookup[str];
    return result;
}

console.log(phoneticLookup('bravo'));
console.log(classOne.hasOwnProperty('kill'));//Cheking objects for property..returns true if object contains property

var myRecord = [    //Format for entering multiple array of properties
    {
    'artist' : 'System Of A Down',
    'album' : 'Hypnotize',
    'release_year' : '2005',
    'format' : ['mp3','WMA','mp4']
    },

    {
        'artist' : 'Linkin Park',
        'album' : 'Meteora',
        'release_year' : '2013',
        'format' : ['CD','mp4','AAC']
    }

];

console.log(myRecord[0].release_year);

//Nested object properties...

var myHouse = {
    house : {
        room : {
            cupBoard : 'Clothes',
            underBed : 'Treasure'
        },
        balcony : 'Chairs'
    }
};

console.log(myHouse.house.room['cupBoard']);
console.log(myHouse.house.balcony);

//Accessing nested arrays

var carList = [
    {
        car : 'toyota', 
        types : [
            'Corolla',
            'Hachi Roku',
            'Supra'
        ]
    },
    {
    car : 'nissan', 
    types :[
            'GTR-34',
            'GTR-35',
            '350Z'
        ]
    }
]

var secondToyota = carList[0].types[1];
console.log(secondToyota);

var collection = {
    '2548' : {
        'album' : 'Slippery When Wet',
        'artist' : 'Bon Jovi',
        'tracks' : [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    '2468' : {
        'album' : '1999',
        'artist' : 'Prince',
        'tracks' : [
            '1999',
            'Little Red Corvette'
        ]
    },
    '1245' : {
        'artist' : 'Robert Palmer',
        'tracks' : [ ]
    },
    '5439' : {
        'album' : 'ABBA Gold'
    }

};

//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if(id === ''){
        return 'No id to update!';
    }else if(value === ''){
        delete collection[id][prop];
    }else if(prop === 'tracks'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(collection);
updateRecords(2468,'tracks','tests');
console.log(updateRecords(5439,'artist','ABBA'));
console.log(collection);
