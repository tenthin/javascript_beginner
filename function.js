function ourReusableFunction() {
    console.log("Hello","World");
}
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();


// Passing values to functions with arguments
function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}
ourFunctionWithArgs(10,5);


function functionWithArgs(a,b) {
    console.log(a+b);
}
functionWithArgs(10,5);

// Global Scope and function
var myGlobal = 10;


function fun1() {
oppsGlobal = 5;
}


function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oppsGlobal != "undefined") {
        output += " oppsGlobal: " + oppsGlobal;
    }
    console.log(output);
}
fun1;
fun2;


// Variable which are declared within the function as well as function parameters have local scope
// that means its visible only within the function
// local scope and function
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// Global VS Local scope in function
// Local variable took precidence over Global Var

var outerWear = "T-Shirt"; //Global Var

 function myOutFit() {
     var outerWear = "Sweater";

    return outerWear;
 }

 console.log(myOutFit());

 console.log(outerWear);


//  Return a value from a function with return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num*5;
}
console.log(timesFive(5));

// Understanding Undefined Value Returned from a Function
var sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log(addThree);

function addFive() {
    sum = sum + 5;
}
console.log(addFive);


// Assignment with a Returned Value to a variable
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);


var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);