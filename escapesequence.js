/* CODE OUTPUT\

\' single quote
\" double quote
\\ backslash
\n newline
\t tab
\r carriage return
\b backspace
\f form feed

*/


var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// concatenating strings
var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

// concatenating strings with variable
var ourName = "tenzin";
var ourStr = "Hello, my name is " + ourName + ", how are you?";
console.log(ourStr);

var someAdjective = "worthwhile.";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr)


// Find length of string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "tenzin";
lastNameLength = lastName.length;
console.log(lastNameLength);


