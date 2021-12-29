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