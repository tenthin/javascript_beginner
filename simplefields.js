const createPerson = (name,age,gender) => ({ name, age, gender });
//     return {
//         name:name,
//         age:age,
//         gender:gender
//     };
// };
console.log(createPerson("Zodiac Hasbro", 56, "male"));


// Write concise Declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
    // setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);