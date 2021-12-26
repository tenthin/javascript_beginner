// Arrays allows you to store lots of data in one place
var ourArray = ["John", 23];
var myArray = ["Quincy", 1]
console.log(ourArray);
console.log(myArray);


// Nested Arrays
 var ourArray = [["the universe", 42], ["everythings", 101010]];
 var myArray = [["name ", "age"],["tim",42],["jphn",23]];
 console.log(myArray);
 console.log(ourArray);

//  Access array data with indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData);

var myArray = [12,123,14];
var myData = myArray[0];
console.log(myData);

// Modify array data with indexes
var array1 = [18,64,99];
array1[1] = 45;
array1[0] = 21;
console.log(array1);

// Access multi dimensional arrays with indexes
var array2 = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14]];
var myData = array2[0][0];
var myData1 = array2[2][1];
console.log(myData1);
console.log(myData);

// Manipulate arrays with push()
var ourArray = ["Stimpson","J","cat"];
ourArray.push(["happy","joy"]);  //it pushes this element at the end of above array
console.log(ourArray);

var myArray = [["John",23],["cat",2]];
myArray.push(["dog",3]);
console.log(myArray);

// Manipulate Arrays with pop()  ***It removes the last element
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);

var myArray = [["john",23],["cat",2]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

// Manipulate Arrays with shift()  *******removes the first element
var ourArray = ["Stimpson","j",["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

var myArray = [["john",23],["cat",22]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

// Manipulate Arrays with unshift()
var ourArray = ["Stimpson","j",["cat"]];
ourArray.shift();
ourArray.unshift("happy");
console.log(ourArray);