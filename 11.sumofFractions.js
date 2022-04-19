// (Mandatory) Sum of Fractions  
//Find the sum of two fractions. (Note: The result should be in reduced form)   
// fraction 1= {1,2} fraction 2= {1,6} 
// output: {2,3}

//Time Complexity O(log(max(a or b)))
//Space Complexity O(1)

function sumofTwoFraction(frac1, frac2) {
    if (frac1 == null || frac2 == null) return [0, 0]
    if (frac1.length != 2 || frac2.length != 2) return [0, 0]

    const a = frac1[0]
    const b = frac1[1]

    const c = frac2[0]
    const d = frac2[1]

    const ad = a * d;
    const cb = c * b;

    const x = (ad + cb);
    const y = (b * d);

    const gcd = findGreaterDivisor(x, y)
    return [(x / gcd), (y / gcd)];
}

function findGreaterDivisor(x, y) {
    if (x == 0) return y;
    if (y == 0) return x;

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(sumofTwoFraction([1, 5], [3, 15]))