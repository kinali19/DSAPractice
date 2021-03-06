// 12 (Mandatory) Given a string, find the longest substring which is palindrome. 
//For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg” .  


function isPalindrome(str) {
    let isPalindrome = false;
    if (str.length == 1) return isPalindrome = true;

    var j = str.length - 1;
    for (var i = 0; i < j; i++, j--) {

        if (str[i] == str[j]) {
            isPalindrome = true
        } else isPalindrome = false;
    }
    return isPalindrome;
}
// console.log(isPalindrome("akka"))

//Time Complexity O(n*n)
//Space Complexity O(1)

function longestPalindromeString(str) {
    if (str.length == 0) return "";
    if(str.length === 1) return str;

    var result = ""
    var resLength = 0
    for (var i = 0; i < str.length; i++) {

        const subStringbasedOddorEven = () => {
            while (l >= 0 && r < str.length && str[l] == str[r]) {
                if (r - l + 1 > resLength) {
                    resLength = r - l + 1
                    result = str.substr(l, resLength)
                }
                l--
                r++
            }
        }
        //odd
        subStringbasedOddorEven(i, i);
        //even
        subStringbasedOddorEven(i, i + 1);
    }
    return result
}

console.log(longestPalindromeString("forgeeksskeegfor"))
console.log(longestPalindromeString("babad"))