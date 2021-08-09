// WORKSHOP https://github.com/stevekane/promise-it-wont-hurt

//1

setTimeout(() => console.log("TIMED OUT!"), 300);


//2

let promise = new Promise(function (fulfill, reject) {
    setTimeout(() => fulfill('FULFILLED!'), 300);
});

promise.then((r) => console.log(r))

///3

let promise = new Promise(function (fulfill, reject) {
    setTimeout(() =>
            reject(new Error('REJECTED!'))
        , 300);
});

function onReject(error) {
    console.log(error.message)
}

promise.then(null, onReject)

////4

let promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
    console.log(error.message);
}

promise.then(console.log, onRejected)

////5

let promise = new Promise(function (fulfill, reject){
    fulfill("PROMISE VALUE");
});

promise.then(console.log, null);
console.log("MAIN PROGRAM")


///6

let promiseOne = new Promise (function(fulfill, reject) {

});

promiseOne.catch(function (err) {
    console.log('THERE IS AN ERROR');
    console.log(err.message);
})

let promiseTwo = Promise.resolve("SECRET VALUE");
let promiseThree = Promise.reject(new Error("SECRET VALUE"));



///7

first()
    .then(function (response) {
        return second(response)
    })
    .then(function (response) {
        onFulfilled(response)
    })

function onFulfilled(response) {
    console.log(response)
}

///8

function attachTitle(name) {
    return 'DR. ' + name;
}

let promise = new Promise(function (resolve, reject) {
    resolve('MANHATTAN')
})
    .then(attachTitle)
    .then(console.log)

///9

function parsePromised (text){
    return new Promise(function (resolve, reject){
        try{
            const r = resolve(JSON.parse(text))
            console.log(r);
        }
        catch (error) {
            reject(error)
        }
    });
}

parsePromised(process.argv[2])
.then(console.log)
.then(null,console.log)


///10

function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(integer = 1) {
    console.log(integer);
    return integer + 1;
}

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject)

///11

function all(promiseOne, promiseTwo) {

  return new Promise(function(fulfill, reject){
      let counter = 0;
      let out = [];

      promiseOne.then(function (val) {
          out[0] = val;
          counter ++;

          if(counter >=2) {
              fulfill(out);
          }
      });

      promiseTwo.then(function(val){
          out[1] = val;
          counter ++;

          if(counter >= 2) {
              fulfill(out);
          }
      });

  })

}

all(getPromise1(), getPromise2())
    .then(console.log);

///12

var q = require('q-io/http');

q.read("http://localhost:1337")
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()

///13

var q = require('q-io/http');

q.read("http://localhost:7000")
    .then(function (id) {
        return q.read("http://localhost:7001/" + id);
    })
    .then(function (obj) {
        console.log(JSON.parse(obj));
    })
    .then(null, console.error)
    .done();
