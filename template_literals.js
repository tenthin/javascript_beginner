// create strings using template literals
// template literals are special type of string that makes creating complex string easier

const person = {
    name:"Zodiac Hasbro",
    age:56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


// We want to create a list based on the array that passed
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure)
console.log(resultDisplayArray)