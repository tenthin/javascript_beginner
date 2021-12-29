// Use Destrucuring Assignment to Assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };   //object

// This is old way of assigining
var x = voxel.x; //x = 3.6
var y = voxel.y; //x = 7.4
var z = voxel.z; //x = 6.54


// Heres the destrucuring syntax
const { x: a, y : b, z : c } = voxel; // a = 3.6 , b = 7.4 , c = 6.54



const AVG_TEMPERATURES = { today: 77.5, tomorrow: 79 };

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const {tomorrow : tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES))



// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {    
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max : 84.6 }
};

function getMaxOfTmrw (forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


// Use Destructuring Assignment to Assigin variables from arrays
const [z, x, ,y] = [1,2,3,4,5,6];
console.log(z,x,y);




let a = 8, b = 6;
(() => {
    "use strict";
    [a,b] = [b,a];
}) ();
console.log(a);
console.log(b)



// Use destructuring assignment with the rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


// Use Destructuring Assignment to pass an object as a functions parameter
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
}
const half = (function () {
    // return function half(stats) 
    return function half({ max, min }) {
        // return (stats.max * stats.min) / 2.0;
        return (max * min) / 2.0;
    }
})();

console.log(stats);
console.log(half(stats))