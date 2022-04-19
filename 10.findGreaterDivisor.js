// 10.(Mandatory) Find the GCD(Greatest Common Divisor) of two integers .  
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/  
// Ex1 :  
// Input : a = 2, b = 4  
// output = 2  
//   
// Explanation :  
// 2 = 1, 2  
// 4 = 1,2,4  
// GCD : 2 
//   
// Ex2 a = 4, b = 10  
// output = 2  
//   
// Ex3 a = 6, b = 11  
// output = 1  
//    
// Ex4  a = 0, b = 8  
// output = 8  

// GCD means two or more intgers when at least one of them is not zero, is largest positive int 
// that divides the numbers without a reminder.

//Time Complexity O(log(max(a or b)))
//Space Complexity O(1)

function findGreaterDivisor(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;

    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
console.log(findGreaterDivisor(8, 49))