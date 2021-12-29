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
    today: { min: 72, max:83 },
    tomorrow: { min:73.3, max = 84.6 }
};

function getMaxOfTmrw (forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));