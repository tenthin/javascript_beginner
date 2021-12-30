// There are couple of problems with this approach
// first problem is that,this is read only
// In other words we cannot set the person name from outside

const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    fullName() {
        return `${person.firstName} ${person.lastName}`
    }
};
console.log(person.fullName())


// getters => access properties
// setters => change (mutate) them
 
const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person.fullName)


function makeClass() {
    class Thermostast {
        constructor(temp) {
            this._temp = 5/9 * (temp -32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostast;
}

const Thermostast = makeClass();
const thermos = new Thermostast(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)