// 4. (Mandatory)Missing characters to make a string Pangram 
//   
// A pangram is a sentence containing every letter in the English alphabet. 
// Given a string, find all characters that are missing from the string, i.e., 
// the characters that can make the string a Pangram. We need to print output in alphabetic order. 
//   
// Input: welcome to geeksforgeeks 
// Output : abdhijnpquvxyz 
//   
// Input: The quick brown fox jumps 
// Output: adglvyz 


//pangram means string contains all the letters of english alphabet.


function findmissingLetterofPangram(str){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    var dic = {};
    var missingLetters = "";

    for(let i=0; i < str.length; i++){
        const char = str.charAt(i).trim();
        if(!(char in dic)){
            dic[char] = true;
        }
    }
    for(var i = 0; i < letters.length; i++) {
        if(!(letters[i] in dic)){
            missingLetters = missingLetters + letters[i]
        }
    }
    return missingLetters;
}

console.log(findmissingLetterofPangram("az"))
