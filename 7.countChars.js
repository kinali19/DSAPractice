// 7.(Mandatory) Write a function that takes input and output as shown under:-  
// Input (string) Output (string)  
// aaa                    a3   
// aabbcc              a2b2c2   
// aaabcdd            a3b1c1d2   
// a                        a1  
// aabbaaa            a2b2a3  


function countChars(str){

    if(str == null || str.length == 0) return 0;

    var result = "";
    var count = 1;

    for(var i=0; i < str.length; i++, count++){
        const ch = str.charAt(i);
        const next = i + 1 < str.length ? str.charAt(i+1) : -1;
        if(ch != next){
            result += ch + count;
            count = 0;
        }   
    }
    return result;
}

console.log(countChars("abc"))