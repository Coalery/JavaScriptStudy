var hi = new Array('Seoul', 'New York', 'Ladarkh', 'Busan', 'Tsukuba');

// function getRandomValueFromArray(arr) {
//     return arr[Math.floor(arr.length * Math.random())];
// }
// console.log(getRandomValueFromArray(hi));


Array.prototype.random = function() {
    return this[Math.floor(this.length * Math.random())];
}
console.log(hi.random());