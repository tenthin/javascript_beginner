// create strings using template literals
// template literals are special type of string that makes creating complex string easier

const person = {
    name:"Zodiac Hasbro",
    age:56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

