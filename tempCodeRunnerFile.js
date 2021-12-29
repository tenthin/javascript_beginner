const sum = (function() {
    return function sum (...args) {   //what rest operator(...) it will converts everything that passed in into one array 
                                     // and that array is called "args". 
        // const args = [x,y,z];          // and we don't need this line anymore
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));