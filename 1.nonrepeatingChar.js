// 1. (Mandatory) Given a string. Write a function to 
//find the first non-repeating character in it. 
//If there is no non-repeating character, return 0; 
// e.g. 
// Input (string) Output (char) 

// —– —— 
// aabbccd      d 
// abbccpddee   a 
// iijjkkllmm   0 
// abbcddea     c 

//Time Complexity O(n2)
// function findNonRepeatingChar(str) {
//     for(var i=0; i< str.length; i++) {
//         var c = str.charAt(i); //each characters
//         if(str.indexOf(c) == i && str.indexOf(c, i + 1) === -1) 
//             return c;
//     } 
//     return 0;
// }

//Time Complexity O(n)
//Space Complexity O(n)
function findNonRepeatingChar(str) {
    if(str === null || str === "") return "invalid string";
    if(str.length === 1) return str;
     
    var dic = {};
    for (const char of str) {
        if (char in dic) {
            dic[char] += 1
        } else {
            dic[char] = 1;
        }
    }
    for (const char in dic) {
        if (dic[char] === 1) return char;
    }
    return 0;
}

console.log(findNonRepeatingChar("ababccpddee"))