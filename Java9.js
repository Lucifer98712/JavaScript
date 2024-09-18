//Loops in JS
//while loop:

var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray);

//For loop:
for(var i = 5; i <=9; i++){
    myArray.push(i);
}

console.log(myArray);

//Odd numbers with for loop:
var ourArray = [];
for (let i = 1; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

//Counting backwards with loops:
var hisArray = [];
var i = 10;
do {
    hisArray.push(i);
    i -= 2;
} while (i>0);

console.log(hisArray);

//Iterating through arrays with loops:

var herArray = [1,2,3,4,5,6,7];
var total = 0;
for(var i =0; i<herArray.length; i++){
    total += herArray[i];
}

console.log(total);

//Nested loops:
var nestArray = [[1,2],[3,4],[5,6,7]];

function product(arr){
    var pro = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            pro *= arr[i][j];
        }
    }
    return pro;
}

console.log(product(nestArray));
