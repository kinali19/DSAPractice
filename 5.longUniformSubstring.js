//5. (Mandatory) 
/* Problem Name is &&& Longest Uniform Substring 
/** 
 * Instructions to candidate. 
 *  1) Run this code in the REPL to observe its behaviour. The 
 *     execution entry point is main(). 
 *  2) Your task is to implement the following method ('longestUniformSubstring') 
 *   
 *  This method should return an integer array with two elements that correctly identifies the location of the longest 
 *  uniform substring within the input string. The first element of the array should be the starting index of the longest 
 *  substring and the second element should be the length. 
 *   
 *  e.g. for the input: "aaabbbbccda" the longest uniform substring is "bbbb" (which starts at index 3 and is 4 characters long). 
  
ex1 : s = "abc" 
output = [0, 1] 
  
ex2 s = "aabbbc"  
output = [2, 3] */  

function findLongUniformSubstring(str){

    if(str == null || str.length == 0) return [-1,0]
    if(str.length == 1) return [0, 1] 

    let idx = Number.MIN_VALUE;
    let count = 1;
    let maxCharCount = 1;

    for(var i = 1; i< str.length; i++){
        if(str.charAt(i) == str.charAt(i-1)) {
            count++; 
        }
        else{
            if(count > maxCharCount){
                maxCharCount = count;
                idx = i - count;
            }
           count = 1;
        }
    }

        if(count > maxCharCount){
        maxCharCount = count;
        idx = i - count;
    }

    return [idx, maxCharCount]
}

console.log(findLongUniformSubstring("abcd"))


function findLongUniformSubstring(str){

    if(str == null || str.length == 0) return [-1,0]
    if(str.length == 1) return [0, 1] 
   
    var idx = -1;
    var count = 1;
    var maxCount = 0;
    for(var i=0; i<str.length; i++) {
         if(str[i] == str[i+1]) count++;
        else{
           if(count > maxCount){
                maxCount = count;
                idx = i - count + 1
            }
             count = 1;
        }
    }
    return [idx, maxCount];
 }
 
 
 console.log(findLongUniformSubstring("aaabbbbccda"))



