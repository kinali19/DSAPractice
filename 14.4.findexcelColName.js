// Q: Problem Statement: Return the name of the excel column? 
// Input number : 4 
// O/p Column : “D” 
 
// Input number : 26 
// O/p Column : “Z” 
 
// Input number : 52 
// O/p Column : “AZ”​​​​​​​ 

function findExcelColName(n){
    var codeA = 'A'.charCodeAt(0);
    var codeZ = 'Z'.charCodeAt(0);

    var len = codeZ - codeA + 1;

    var colName = [];
    
    while(n > 0){
        let rem = n % len;
        if(rem == 0) {
            colName.push(String.fromCharCode(codeZ));
            n = Math.floor((n / len) - 1);
        }
        else{
            colName.push(String.fromCharCode((rem - 1) + codeA))
            n = Math.floor(n / len)
        }
    }
    return colName.reverse().join("");
}

console.log(findExcelColName(676))
