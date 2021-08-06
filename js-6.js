///1

// module.exports = function upperCaser(input) {
//
//     return input.toUpperCase();
// }

/// 2 - higher order functions

// function repeat(operation, num) {
//    if(num){
//        operation();
//        repeat(num-1);
//    }
// }
//
// // Do not remove the line below
// module.exports = repeat

///3 - map

// function doubleAll(numbers) {
//     var result = [];
//     result = numbers.map(number => number * 2);
//     return result;
// }
//
// module.exports = doubleAll


///4 - filter

// function getShortMessages(messages) {
//    return messages.filter( (item) => {
//         return item.message.length < 50;
//    }).map((item) => {
//        return item.message;
//    });
// }
//
// module.exports = getShortMessages


// /5 - every and some

// gooduser = [1,2,3,4,5]
// submittedUsers = [ 2 ,3 ,4 ]
//
// function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every( (submittedUser) => {
//             return goodUsers.some( (goodUser) => {
//                 return goodUser.id === submittedUser.id
//             })
//         })
//     };
// }
//
//  module.exports = checkUsersValid

///6 - array reduce

//reduce - (callbackFunction, initialValue)

// function countWords(arr) {
//     return arr.reduce(
//         (countMap, word) => {
//             countMap[word] = ++countMap[word] || 1
//             return countMap;
//         }, {})
// }

// module.exports = countWords

///7 - recursion - reducing

// function reduce(arr, fn, init) {
//     return (function reduceOne(index, value) {
//         if (index > arr.length - 1) return value;
//         return reduceOne(index + 1, fn(value, arr[index], index, arr))
//     })(0, init) //valori inceput
// }
//
// module.exports = reduce;


///8 - duck typing

// function duckCount() {
//     return Array.prototype.slice.call(arguments).filter(function (obj) {
//         return Object.prototype.hasOwnProperty.call(obj, "quack");
//     }).length
// }
//
// module.exports = duckCount


///9 - partial application without bind

//The apply() method calls a function with a given this value,
// and arguments provided as an array (or an array-like object).

// var slice = Array.prototype.slice
//
// function logger(namespace) {
//     return function () {
//         console.log.apply(console, [namespace].concat(slice.call(arguments)));
//     }
// }
//
// module.exports = logger

///10 - Partial Application with Bind  ?????

// module.exports = function(namespace) {
//     return console.log.bind(console, namespace);
// }


///11 - Implement Map with Reduce   ???????

// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function (acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc;
//     }, [])
// }


///12 - Function Spies

// function Spy(target, method) {
//     var originalFunction = target[method];
//
//     //foloseste un obiect casa putem transmite prin referinta si nu prin valoare
//     //putem returna rezultatul dar sa updatam numaratoarea din acest scope
//
//     var result = {
//         count: 0
//     }
//
//
//     //inlocuieste metoda cu metoda spy
//
//     target[method] = function() {
//         result.count++;
//         return originalFunction.apply(this, arguments) //invoca functia originala
//     }
//     return result;
// }
//
// module.exports = Spy


///13 - blocking event loop

// function repeat(operation, num) {
//     // modify this so it can be interrupted
//     if (num <= 0) return
//     operation()
//
//     if (num % 10 === 0) {
//         setTimeout(() => {
//             repeat(operation, --num);
//         })
//     } else {
//         return repeat(operation, --num)
//     }
// }
//
// module.exports = repeat

///14 - Async Loops

// function loadUsers(userIds, load, done) {
//     var completed = 0;
//     var users = [];
//     userIds.forEach((id, index) => {
//         load(id, (user) => {
//             users[index] = user;
//             if(++completed === userIds.length) return done(users);
//         })
//     })
// }
//
// module.exports = loadUsers
//

///15 ?????????

// function getDependencies(mod, result) {
//     result = result || []
//     var dependencies = mod && mod.dependencies || []
//     Object.keys(dependencies).forEach(function(dep) {
//         var key = dep + '@' + mod.dependencies[dep].version
//         if (result.indexOf(key) === -1) result.push(key)
//         getDependencies(mod.dependencies[dep], result)
//     })
//     return result.sort()
// }
//
// module.exports = getDependencies

///17 ??

// function curryN(fn, n) {
//     n = n || fn.length
//     return function curriedN(arg) {
//         if (n <= 1) return fn(arg)
//         return curryN(fn.bind(this, arg), n - 1)
//     }
// }

// module.exports = curryN


///18 ??

// module.exports = Function.call.bind(Array.prototype.slice)

