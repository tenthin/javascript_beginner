function randomFraction() {

    return Math.random();
}
console.log(randomFraction())


// Generating random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())


// Generating Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
};
console.log(ourRandomRange(1,9));

function randomRange(myMin,myMax) {
    return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5,15);
console.log(myRandom);