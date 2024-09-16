//Arrays

var myArray = ['One', 2, 'Two', 3];
console.log(myArray[2]);

var ourArray = ["Hello", 34];
console.log(ourArray[0]);

//Nested array or multi-dimensional array i.e array within an array

var multiArray = [['Eat', 43], ['Pizza', 50]];
console.log(multiArray[1][0]);

//Modifying array data

multiArray[0][1] = 30;
console.log(multiArray[0][1]);

//Appending data to an array using push() 

console.log(multiArray);
multiArray.push('Burger', 2);
console.log(multiArray[2]);

//Removing element from an array using pop()

var removedElement = multiArray.pop();
console.log(removedElement);
console.log(multiArray);

//Manipulate arrays with shift()
//shift() and pop() do the same operation i.e remove array elements but shift removes and returns the first array element

removedElement = multiArray.shift();
console.log(removedElement);
console.log(multiArray);

//Manipulate arrays with unshift()
//unshift() adds element to the begining of array

multiArray.unshift(['Gobble', 29]);
console.log(multiArray);

//Nested array to create shopping list

var myGroceryList = [['milk', 1], ['tomatoes', 1], ['curd', 0.5]];
console.log(myGroceryList);
