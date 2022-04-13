// 6.(Mandatory)  
//  Find if given integer is a power of ten without using math.pow() function.  
// input:  x=10    
// output:  true    
// explanation : 10^1 =10;  
// 100 :  10^2  
// 1000 : 10^3  
// input: x=50    
// output: false    


function powerof10(n){
    while(n > 1 && n % 10 == 0){
        n = n / 10;
    }
    return n == 1;    
}

console.log(powerof10(50))