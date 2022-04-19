// 13 (Mandatory) Given a string ” ABABCABABCD”, 
//you have to compress it into the following format: AB* C*D . 
//Here, * always repeats all the characters in front of it .   
// Return a compressed string of minimal length . 
//Treat lowercase and uppercase letters differently . We should get input string if we decode the output string .   
// For ex :   
// ABABCABABCD -> AB*C*D    
// AB*C*D -> ABABCABABCD  

// Eg:   
// input : AAAA  
// output : A**  
//    
// input : AAA  
// output : A*A  
//    
// AAAAA => A**A  
// ABABCABABCD -> AB*C*D  
// ABABC -> AB*C  
// abcd -> abcd  
// aaaabbbb -> a**bbbb  
// abcba -> abcba  
// aaaaaaaa -> a***   

//Time Complexity O(n)
//Space Complexity O(1)

function decodeString(s) {
    var i = 0;
    var j = 1;

    var output = s[i];

    while (i < s.length && j < s.length) {

        if (s[i] != s[j]) {
            output += s[j]
            j++;

        } else {
            
            var temp = j;
            var shouldAdd = false;

            while (s[i] == s[j] && i < s.length && j < s.length) {
                i++;
                j++;

                if (i == temp) {
                    shouldAdd = true;
                    break;
                }
            }
            if (shouldAdd) {
                output += "*";
                i = 0;

            } else {
                while (temp < j) {
                    output += s[temp];
                    temp++;
                }
                i = 0
            }
        }
    }
    return output;
}

console.log(decodeString("ABABCABABCD"))
console.log(decodeString("AAAA"))
console.log(decodeString("ABABC"))
console.log(decodeString("abcd"))
console.log(decodeString("aaaabbbb"))
console.log(decodeString("abcba"))
console.log(decodeString("aaaaaaaa"))
console.log(decodeString("abcabcabdabcabcabdefghi"))