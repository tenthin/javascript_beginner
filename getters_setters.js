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