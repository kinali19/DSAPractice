// Function composition translates to combining pure functions in curried form 
// without side effects in point-free style: const compose const compose = f => g => x => f(g(x)).
// Curried functions only accept a single argument (as our compose function). 
// Function composition only works with curried functions, because a function only returns a single value


function addOne(a){
    return a + 1;
}

function timesTwo(b){
    return b * 2;
}

// let composition = (...fns) => (x) => fns.reduce((y,f) => f(y), x)
let composition = (...fns) => fns.reduceRight((y,f) => (x) => f(y(x)))

console.log(composition(addOne,timesTwo)(1))