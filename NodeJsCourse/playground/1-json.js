const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
//
// console.log(JSON.stringify(book))
//
// fs.writeFileSync('1-json.json', JSON.stringify(book))
//
//
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
//
// console.log(data.name)
// console.log(data.age)
//
// data.name = "Roxana"
// data.age = "21"
//
// fs.writeFileSync('1-json.json', JSON.stringify(data))
//
// console.log(data.name)
// console.log(data.age)
//

// function map(a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//         result[i] = f(a[i]);
//     return result;
// }
// const f = function(x) {
//     return x * x * x;
// }
//
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(numbers);
// console.log(cube);

// console.log(`string text line 1
// string text line 2`);
// // "string text line 1
// // string text line 2"

function displayCar() {
    var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
    pretty_print(result);
}

displayCar()
