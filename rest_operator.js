// Rest operator allows you to create a function that takes a variable number
// of argument. The rest operator is 3 dots. ...

const sum = (function() {
    return function sum (x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));

const sum = (function() {
    return function sum (...args) {   //what rest operator(...) it will converts everything that passed in into one array 
                                     // and that array is called "args". 
        // const args = [x,y,z];          // and we don't need this line anymore
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));   //we can also add additional numbers of arguments


// Use the spread operator to evaluate In-Place
// the "spread" operator looks just like "rest" operator  (3 dots)
// it expands the an already existing array or it spreads out an array
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato';
})();
console.log(arr2)

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; //it will spread out the contents of arr1 into new array [...arr1]
                        //So we are not making arr2 = arr1. We are making arr2 equals to 
                        //all contents of arr1
    arr1[0] = 'potato';
})();
console.log(arr2)
