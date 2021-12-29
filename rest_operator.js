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
console.log(sum(1,2,3,4));   //we can also add additional numbers