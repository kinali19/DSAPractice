// Function composition translates to combining pure functions in curried form
// without side effects in point-free style: const compose const compose = f => g => x => f(g(x)).
// Curried functions only accept a single argument (as our compose function).
// Function composition only works with curried functions, because a function only returns a single value

// Function composition is an approach where the result of one function is passed on to the next function,
// which is passed to another until the final function is executed for the final result.
//  Function compositions can be composed of any number of functions.



function addOne(a){
    return a + 1;
}

function addOne1(a){
    return a + 2;
}

function timesTwo(b){
    return b * 2;
}
function timesTwo1(b){
    return b * 4;
}
// let composition = (...fns) => (x) => fns.reduce((y,f) => f(y), x)
// let composition = (...fns) => fns.reduceRight((y,f) => (x) => f(y(x)))

function composition(...fns) {
    return fns.reduceRight((y,f) => {
        return (x) => f(y(x))
    })
}

function composition1([a,b]) {
    return function (c){
        return a(b(c))
    }
}

const composition2 = (arr) => value => {
  if(arr && arr.length){
      arr.reverse();
      const [first, ...fns] = arr;
      let finalValue = first(value);
      for(var i = 0; i < fns.length; i++){
          finalValue = fns[i](finalValue);
      }
      return finalValue;
  }
}

console.log(composition(addOne,timesTwo)(1))
console.log(composition1([addOne,timesTwo])(1))
console.log(composition2([addOne,timesTwo])(1))

/* Problem Name is &&& Function Composition &&& PLEASE DO NOT REMOVE THIS LINE. */
// Instructions to candidate

// 1. Implement a function `compose`
//    `compose([ a, b, c])` will return a new function which is `a(b(c())))`

// 2. Consider adding more tests

// 'use strict';

// var chai = require('chai');
// var Mocha = require('mocha');
// var mocha = new Mocha({​​​​​​ui: 'bdd'}​​​​​​);
// var assert = chai.assert;

// //
// // compose takes in a list of functions and returns a function which is the composition of each

// function addOne(a) {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//     return a+1;
// }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

// function timesTwo(a) {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//   return a*2;
// }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

// function compose(...fns) {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//     //todo
// }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

// // Start CoderPad testing bootstrap - do not modify
// mocha.suite.emit('pre-require', this, 'solution', mocha);
// // End CoderPad testing bootstrap

// describe('"compose" Test Suite', function() {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

//   function addOne(a) {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//   return a + 1;
//   }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

//   function timesTwo(a) {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//   return a * 2;
//   }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

//   it('takes a list of two single arg functions', function() {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
//   var actual = compose([addOne, timesTwo])(1);
//   assert.equal(actual, 3, '(1 * 2) + 1 === 3');
//   }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
// }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);

// mocha.run(function() {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
