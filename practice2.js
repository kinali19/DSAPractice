// 1. (Mandatory) Given a string. Write a function to find the first non-repeating character in it. If there is no non-repeating character, return 0; 
// e.g. 
// Input (string) Output (char) 
// —– —— 
// aabbccd       d 
// abbccpddee    a 
// iijjkkllmm    0 
// abbcddea      c 

function findNonrepeatingChar(str) {
    if (str.length === 0) return "Invalid Input";
    if (str.length === 1) return str[0];

    var dic = {};

    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch in dic) {
            dic[ch] += 1;
        } else {
            dic[ch] = 1;
        }
    }
    for (ch in dic) {
        if (dic[ch] === 1) return ch;
    }
    return 0;
}

console.log("nonRepeating: " + findNonrepeatingChar("abbccpddee"))

//avg of student score

function findAvgStudentScore(arr) {
    if (arr === null || arr.length === 0) return 0;

    var map = new Map();
    var maxSum = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < arr.length; i++) {
        var stu = arr[i];
        if (stu.length < 2) return 0;

        var key = stu[0];
        var val = stu[1];

        if (key in map) {
            map[key].push(val);
        } else {
            map[key] = [val];
        }
    }
    for (key in map) {
        var sum = 0;
        for (val of map[key]) {
            sum += parseInt(val);
        }
        sum = sum / map[key].length;
        if (sum >= maxSum) {
            maxSum = Math.floor(sum);
        }
    }
    return maxSum;
}

console.log("avgStuScore: " + findAvgStudentScore([
    ['Bob', 10],
    ['Alice', 20],
    ['Alice', 30],
    ['Bob', 20],
]))

//find second minimum number
//  ex1 : arr = [9,3,5,8,4,7,8] 
// output : 4 
//   
// ex2: arr = [3,9,8,8,5,3,3] -> [3, 3, 3, 5, 8, 8, 9] 
// output : 3 
//   
// ex3: arr = [4,3] 
// output : 4 
//   
// ex4: arr = [5] 
// output : "invalid input"  - Done   

function findSecondMinNumber(arr) {
    if (arr.length === 0 || arr.length === 1) return "Invalid input";

    var minVal = arr[0];
    var secondMin = Infinity;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            secondMin = minVal;
            minVal = arr[i];
        }
        // else if(arr[i] < secondMin &&  arr[i] != minVal){  //not considering duplicates
        //     secondMin = arr[i];
        // }
        else if (arr[i] < secondMin) { //considering duplicates
            secondMin = arr[i];
        }
    }
    return secondMin;
}

console.log("SecondMinNumber: " + findSecondMinNumber([3, 9, 8, 8, 5, 3, 3]))

// 4. (Mandatory)Missing characters to make a string Pangram - Done
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

function findmissingChars(str) {
    if (str.length === 0) return "invalid string";

    const letters = "abcdefghijklmnopqrstuvwxyz"
    var dic = {};
    var missingLetters = []
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i).toLowerCase();

        if (!(ch in dic)) {
            dic[ch] = true
        };

    }
    for (letter of letters) {
        if (!(letter in dic)) {
            missingLetters += letter;
        }
    }
    return missingLetters;
}

console.log("missingPangramLetter: " + findmissingChars("welcome to geeksforgeeks"))

//Longest Uniform Substring
// e.g. for the input: "aaabbbbccda" the longest uniform substring is "bbbb" 
//(which starts at index 3 and is 4 characters long). 
//   
// ex1 : s = "abc" 
// output = [0, 1] 
//   
// ex2 s = "aabbbc" 
// output = [2, 3] 

function FindLongestUniformSubString(str) {
    if (str.length === 0) return [0, 0]

    var idx = -1;
    var count = 1;
    var maxCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if (count > maxCount) {
                maxCount = count;
                idx = i - count + 1;
            }
            count = 1;
        }
    }
    return [idx, maxCount];
}

console.log("logestUnifromSubString: " + FindLongestUniformSubString("aabbbc"))

//power of 10 
// input:  x=10    
// output:  true    
// explanation : 10^1 =10;  
// 100 :  10^2  
// 1000 : 10^3  
// input: x=50    
// output: false    

function powerOf10(n) {
    if (n === 0) return true;

    while (n > 1 && n % 10 === 0) {
        n = n / 10;
    }
    return n == 1;
}

console.log("powerOf10: " + powerOf10(50))

// 7.(Mandatory) Write a function that takes input and output as shown under:-  Done
// Input (string) Output (string)  
// aaa   a3   
// aabbcc a2b2c2   
// aaabcdd a3b1c1d2   
// a  a1  
// aabbaaa a2b2a3 

function compressString(str) {
    var count = 1;
    var result = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}

console.log("compressString: " + compressString("bcaaa"))

// 8. (Mandatory) You have been given a file of IP addresses. - Done
// There are some IP addresses like 10.0.0.1,10.0.0.2 etc. We need to find out which IP address is the most visited 
// INPUT: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​"10.0.0.1 satish","10.0.0.2 Vinay","10.0.0.1 Deepa"}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​;​​​ 
// O/P: "10.0.0.1" 
// INPUT: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​"10.0.0.1 satish","10.0.0.2 Vinay","10.0.0.1 satish"}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​;​​​ 
// O/P: "10.0.0.1" 


function findIPAddress(addresses) {
    if (addresses.length === 0) return "invalid address";

    if (addresses.length === 1) return addresses.split(" ")[0];

    var ipAddress = [];
    var map = new Map();
    var maxCount = 0;

    for (var i = 0; i < addresses.length; i++) {
        var add = addresses[i].split(" ");
        var ip = add[0];

        if (ip in map) {
            map[ip] += 1;
        } else {
            map[ip] = 1;
        }
        if (map[ip] > maxCount) {
            maxCount = map[ip];
        }
    }
    for (ip in map) {
        if (map[ip] === maxCount) {
            ipAddress.push(ip);
        }
    }
    return ipAddress.join(",");
}
console.log("mostVisitedIP: " + findIPAddress(["10.0.0.2 satish", "10.0.0.3 Vinay", "10.0.0.1 Deepa", "10.0.0.3 Vinay"]))


// 9.(Mandatory) A robot can move in 4 directions up, down, left and right. It's path is encoded in a string with characters U, D, L and R. If the bot starts at coordinate​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ then find it's final coordinate based on the input path string . - Done
// Ex1 : 
// Input : UDRR 
// Output : [2,0] 
// Ex2 : 
// Input : DD 
// Output : [0,-2]  

function findCoordinates(str) {
    if (str === "") return [0, 0];

    var x = 0;
    var y = 0;

    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);

        switch (ch) {
            case "U":
                y += 1;
                break;

            case "D":
                y -= 1;
                break;

            case "R":
                x += 1;
                break;

            case "L":
                x -= 1;
                break;
        }
    }
    return [x, y];
}

console.log("findCoordinates: " + findCoordinates("UDRR"))

// 10.(Mandatory) Find the GCD(Greatest Common Divisor) of two integers .  - Done
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

function findGCD(a, b) {
    if (a === 0 && b === 0) return 0;
    if (a === 0) return b;
    if (b === 0) return a;

    while (b) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}

console.log("GCD: " + findGCD(2, 4))

//11 Fraction of Sum

function findFractionSum(frac1, frac2) {
    if (frac1 === null || frac2 === null) return [0, 0]
    if (frac1.length != 2 || frac2.length != 2) return [0, 0]

    var a = frac1[0];
    var b = frac1[1];

    var c = frac2[0];
    var d = frac2[1];

    var top = a * d + b * c
    var bottom = b * d;

    var gcd = findGCD(top, bottom);

    return [top / gcd, bottom / gcd]

}

console.log("fractionSum: " + findFractionSum([1, 2], [1, 6]))


// 12 (Mandatory) Given a string, find the longest substring which is palindrome.
//  For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg” .  - Done

function findPalindromString(str) {
    if (str == "" || str === null) return "invalid string";

    var result = "";
    var resLength = 0;

    var l = 0;
    var r = 0;

    for (var i = 0; i < str.length; i++) {
        const findSubstringoddorEven = () => {
            while (l >= 0 && r < str.length && str[l] === str[r]) {
                if (r - l + 1 > resLength) {
                    resLength = r - l + 1;
                    result = str.substr(l, resLength);
                }
                l--;
                r++;
            }
        }

        //odd
        {
            l = i;
            r = i;
            findSubstringoddorEven();
        } {
            //even
            l = i;
            r = i + 1;
            findSubstringoddorEven();
        }
    }
    return result;
}

console.log("palindrom: " + findPalindromString("forgeeksskeegfor"))

// 13 (Mandatory) Given a string ” ABABCABABCD”, you have to compress it into the following format: AB* C*D . Here, * always repeats all the characters in front of it .   
// Return a compressed string of minimal length . Treat lowercase and uppercase letters differently . We should get input string if we decode the output string .   - Check testcases
// For ex :   
// ABABCABABCD -> AB*C*D    
// AB*C*D -> ABABCABABCD  

// Eg:   
// input : AAAA  
// output : A**  j
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

function decodeString(str) {
    if (str === "" || str === null) return "invalid string";
    if (str.length === 1) return str;

    var i = 0;
    var j = 1;
    var output = str[i];

    while (i < str.length && j < str.length) {
        if (str[i] !== str[j]) {
            output += str[j];
            j++;
        } else {
            var temp = j;
            var shouldAdd = false;
            while (str[i] === str[j] && i < str.length && j < str.length) {
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
                    output += str[temp];
                    temp++;
                    i = 0;
                }
            }

        }
    }
    return output;
}

console.log("ABAB: " + decodeString("aaaabbbb"))

//Staircase problem

function findStairSteps(n) {
    var arr = new Array(n + 1);

    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;

    for (var i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }

    return arr[n];
}

console.log("Staircase Steps: " + findStairSteps(5))

//reverse String
//s = ['h','e','l','l','o']

function reverseStringArr(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
    return arr;
}

console.log("reverseString: " + reverseStringArr(['h', 'e', 'l', 'l', 'o']))


// //number of identical pairs
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

//0(n2)
const findIdenticalPairs1 = (nums) => {
    let cnt = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j])
                cnt++;
        }
    }
    return cnt;
}

//O(n)
const findIdenticalPairs2 = (nums) => {
    let map = new Map();
    let count = 0;

    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (!(n in map)) {
            map[n] = 1;
        } else {
            count += map[n];
            map[n] += 1
        }
    }
    return count;
}

console.log("identicalPairs1: " + findIdenticalPairs1([1, 2, 3, 1, 1, 3]))
console.log("identicalPairs2: " + findIdenticalPairs1([1, 2, 3, 1, 1, 3]))

//valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


const isAnagram = (s, t) => {
    var dic = {};

    for (var i = 0; i < s.length; i++) {
        if (s[i] in dic) {
            dic[s[i]] += 1;
        } else dic[s[i]] = 1;
    }

    for (var j = 0; j < t.length; j++) {
        if (!(t[j] in dic)) return false;
        else {
            dic[t[j]] -= 1;
        }
    }

    for (key in dic) {
        if (dic[key] !== 0) return false;
    }
    return true;
}

console.log("Anagram: " + isAnagram("car", "rat"))

//Best Time to Buy and Sell Stock
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function findProfitfromSellStock(prices) {
    var totalProfit = 0;
    var minBuyPrice = prices[0];

    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < minBuyPrice) {
            minBuyPrice = prices[i];
        }
        var profit = prices[i] - minBuyPrice;
        if (profit > totalProfit) {
            totalProfit = profit;
        }
    }
    return totalProfit;
}

console.log("profit: " + findProfitfromSellStock([1, 6, 4, 3, 7]))


//check valid parentheses
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Input: s = "()"
// Output: true

function checkvalidParentheses(str) {
    var stack = [];

    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (ch == "(" || ch == "{" || ch == "[") {
            stack.push(ch);
        }

        check = '';
        switch (ch) {
            case ")":
                check = stack.pop();
                if (check !== "(") return false;
                break;
            case "}":
                check = stack.pop();
                if (check !== "{") return false;
                break;
            case "]":
                check = stack.pop();
                if (check !== "[") return false;
                break;
        }
    }
    return stack.length === 0
}

console.log("validParentheses: " + checkvalidParentheses("({})"))

//remove adjacent duplicates in string
//s= "abbaca"
//o = "ca"

function removeAdjacentduplicates(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
}

console.log("remove adacentDuplicate:" + removeAdjacentduplicates("abbaca"));

//Missing Number
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

function findMissingNumber(nums) {
    var sum = nums.length;

    for (var i = 0; i < nums.length; i++) {
        sum += i - nums[i]
    }
    return sum;
}

console.log("missingNumber: " + findMissingNumber([2, 0, 1]))

//Height Checker
//A school is trying to take an annual photo of all the students. 
//The students are asked to stand in a single file line in non-decreasing order by height. 
//Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

function heightChecker(heights) {
    var arr = [...heights];
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                var temp = arr[i - 1]
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] !== heights[j]) count++;
    }
    return count;
}

console.log("heightChecker: " + heightChecker([5, 1, 2, 3, 4]))

//sum of two
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//0(n2)
function sumofTwo1(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];
        for (var j = 1; j < nums.length; j++) {
            var y = nums[j];

            if (x + y == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1]
}

//0(n)
function sumofTwo(nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        if (!((target - nums[i]) in map))[
            map[nums[i]] = i
        ]
        else {
            return [map[target - nums[i]], i];
        }
    }
    return [-1, -1]
}

console.log("sumofTwo: " + sumofTwo([3, 2, 4], 6))


//di string match
// Input: s = "IDID"
// Output: [0,4,1,3,2]

function diStringMatch(str) {
    var l = 0
    var r = str.length;
    var res = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "I") {
            res.push(l);
            l++;
        } else if (str[i] === "D") {
            res.push(r);
            r--;
        }
    }
    res.push(l);
    return res;
}

console.log("diStringMatch: " + diStringMatch("DDI"))

//unique tuples
// ing unique tuples from a String of given length. 
// For e.g.  
// inputString: aabcde , length = 2 
// Output:  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​“aa”,”ab”,”bc”,”cd”,”de”}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
//   
// inputString: abc , length = 3 
// Output:  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​“abc”}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
//   
// inputString: abc , length = 1 
// Output:  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​“a”,”b”,”c”}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
//   
// inputString: aabc , length = 1 
// Output:  {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​“a”,”b”,”c”}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 

function findUniqueTuples(str, len) {
    var tuples = new Set();

    for (var i = 0; i < str.length; i++) {
        var temp = str[i];

        for (var j = i + 1; j < i + len; j++) {
            temp += str[j];
        }

        if (temp.length === len) {
            tuples.add(temp);
        }
    }
    let res = [];
    tuples.forEach(function (value) {
        res.push(value);
    })
    return res;
}

console.log("uniqueTuples: " + findUniqueTuples("aabcde", 2))

// Q: Problem Statement: Return the name of the excel column? - Done
// Input number : 4 
// O/p Column : “D” 

// Input number : 26 
// O/p Column : “Z” 

// Input number : 52 
// O/p Column : “AZ”​​​​​​​

function findExcelCol(n) {
    if (n === 0 || n === null) return 0;

    var codeA = 'A'.charCodeAt(0);
    var codeZ = 'Z'.charCodeAt(0);
    var len = codeZ - codeA + 1;

    var colName = [];
    while (n > 0) {
        var rem = n % len;

        if (rem === 0) {
            colName.push(String.fromCharCode(codeZ));
            n = Math.floor(n / len - 1);
        } else {
            colName.push(String.fromCharCode(rem - 1 + codeA))
            n = Math.floor(n / len)
        }
    }
    return colName.reverse().join("");
}

console.log("Excel Col: " + findExcelCol(42))

//find winner in the circle
//There are n friends that are playing a game. 
//The friends are sitting in a circle and are numbered from 1 to n in clockwise order.
// More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, 
//and moving clockwise from the nth friend brings you to the 1st friend.

// Input: n = 5, k = 2
// Output: 3
// Explanation: Here are the steps of the game:
// 1) Start at friend 1.
// 2) Count 2 friends clockwise, which are friends 1 and 2.
// 3) Friend 2 leaves the circle. Next start is friend 3.
// 4) Count 2 friends clockwise, which are friends 3 and 4.
// 5) Friend 4 leaves the circle. Next start is friend 5.
// 6) Count 2 friends clockwise, which are friends 5 and 1.
// 7) Friend 1 leaves the circle. Next start is friend 3.
// 8) Count 2 friends clockwise, which are friends 3 and 5.
// 9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.

function winnerinCircle(n, k) {
    var l = []
    for (var i = 1; i <= n; i++) {
        l.push(i);
    }

    var i = 0;
    while (l.length > 1) {
        i = (i + k - 1) % (l.length);
        l.splice(i, 1);
    }
    return l[0];
}

console.log("findWinnerinCircle: " + winnerinCircle(5, 2))

//minimum subarray to k
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function findSubArraySumKwithMap(nums, k) {
    var count = 0;
    var map = new Map();
    var currSum = 0;

    for (var i = 0; i < nums.length; i++) {
        currSum += nums[i];

        if (currSum === k) {
            count++;
        } else if (currSum - k in map) {
            count += map[currSum - k]
        }

        if (currSum in map) {
            map[currSum] += 1;
        } else {
            map[currSum] = 1;
        }
    }
    return count;
}

//if positive numbers only
function findSubArraySumK(nums, k) {
    var i = 0;
    var j = 0;
    var currSum = 0;
    var count = 0;

    while (i < nums.length && j < nums.length) {
        currSum += nums[j];

        if (currSum >= k) {
            while (currSum > k) {
                currSum = currSum - nums[i];
                i++;
            }

            if (currSum === k) {
                count++;
            }
        }
        j++
    }
    return count;
}
console.log("findSubArraySumKwithMap: " + findSubArraySumKwithMap([-1, -1, 1], 0))
console.log("findSubArraySumK: " + findSubArraySumK([1, 1, 1], 2))

//Input: target = 7, nums = [2,3,1,2,4,3]
//Output: 2
//Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function findMinimumSizeSubarray(arr, target) {
    var prevIndex = 0;
    var minLength = Infinity;
    var currSum = 0;

    for (var i = 0; i < arr.length; i++) {
        currSum += arr[i];

        while (currSum >= target) {
            minLength = Math.min(minLength, i - prevIndex + 1)
            currSum -= arr[prevIndex];
            prevIndex++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log("findMinSizeSubarray: " + findMinimumSizeSubarray([1, 4, 4], 4))

//18 remaining

//recurring decimal

// Given two integers representing the numerator and denominator of a fraction,
//  return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.

//Input: numerator = 1, denominator = 2
//Output: "0.5"

// Input: numerator = 4, denominator = 333
// Output: "0.(012)"

function recurringDecimal(num, den) {
    var sign = "";
    if (Math.sign(num) !== Math.sign(den) && num !== 0) {
        sign = "-";
    }

    num = Math.abs(num);
    den = Math.abs(den);

    var res = [];
    var reminders = [];

    while (true) {
        var q = Math.floor(num / den);
        var r = num % den;
        res.push(q);

        if (r in reminders) {
            res.splice(reminders[r], 0, "(");
            res.push(")");
            break;
        }

        reminders[r] = res.length;
        num = r * 10;
        if (num === 0)
            break;
    }
    if (res.length > 1) {
        res.splice(1, 0, ".")
    }
    return sign + res.join("");
}

console.log("recurringDecimal: " + recurringDecimal(2, 8))

//product of array except self
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function productofArr(nums) {
    var res = [];
    var left = 1;
    var right = 1;

    for (var i = 0; i < nums.length; i++) {
        res[i] = left;
        left = left * nums[i];
    }
    for (var j = nums.length - 1; j >= 0; j--) {
        res[j] = right * res[j];
        right = right * nums[j];
    }
    return res;
}

console.log("productofArray: " + productofArr([1, 2, 3, 4]))

//house robber
//Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

function rob(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            res[i] = nums[i];
        } else {
            var sum = 0;
            if (res[i - 2] > 0) {
                sum = res[i - 2] + nums[i]
            } else {
                sum = res[i - 1] > nums[i] ? res[i - 1] : nums[i];
            }
            res[i] = sum > res[i - 1] ? sum : res[i - 1]
        }
    }
    return Math.max(res[nums.length - 1], res[nums.length - 2]);
}

console.log("house rob: " + rob([2, 1, 1, 2]))

//palindrom Substring
//Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

function countPalindromSubString(str) {
    var result = 0;

    for (var i = 0; i < str.length; i++) {
        const findPalindromSubString = (l, r) => {
            while (l >= 0 && r < str.length && str[l] === str[r]) {
                l--;
                r++;
                result++;
            }
        }

        findPalindromSubString(i, i)
        findPalindromSubString(i, i + 1);
    }
    return result;
}

console.log("findPalindromSubString Count: " + countPalindromSubString("aaa"))

//trapping rain water

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

function trappingRainWater(heights) {
    var i = 0;
    var j = heights.length - 1;
    var left = 0;
    var right = 0;
    var water = 0;

    while (i < j) {
        if (heights[i] <= heights[j]) {
            left = Math.max(left, heights[i])
            water += left - heights[i];
            i++;
        } else {
            right = Math.max(right, heights[j])
            water += right - heights[j];
            j--;
        }
    }
    return water;
}

console.log("trapped Water: " + trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

//largest Histogram

function largestHistogram(heights) {
    var maxSum = 0;

    var ps = findPrevSmallElement(heights);
    var ns = findNextSmallElement(heights);

    for (var i = 0; i < heights.length; i++) {
        var sum = (ns[i] - ps[i] - 1) * heights[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

function findPrevSmallElement(arr) {
    var ps = [];
    var stack = [];

    for (var i = 0; i < arr.length; i++) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ps[i] = -1
        } else {
            ps[i] = stack[stack.length - 1]
        }
        stack.push(i);
    }
    return ps;
}

function findNextSmallElement(arr) {
    var ns = [];
    var stack = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ns[i] = arr.length
        } else {
            ns[i] = stack[stack.length - 1]
        }
        stack.push(i);
    }
    return ns;
}

console.log("Largest Histogram: " + largestHistogram([2, 1, 5, 6, 2, 3]))


//maximum rectangle

//Given a rows x cols binary matrix filled with 0's and 1's,
// find the largest rectangle containing only 1's and return its area.

// matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6

function maximumRectangle(matrix) {
    var result = [];
    var maxSum = 0;

    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i].length === 1) return matrix[i];
        for (var j = 1; j < matrix[0].length; j++) {
            if (i === 0) {
                result[j] = parseInt(matrix[i][j])
            } else {
                result[j] = parseInt(matrix[i][j]) === 0 ? 0 : parseInt(matrix[i][j]) + result[j];
            }
        }
        var sum = largestHistogram(result);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log("maximum rectangle: " + maximumRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]))

//median of two sorted array
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function medianOfSortedArray(num1, num2) {
    if (num1.length === 0 && num2.length === 0) return 0

    var res = num1.concat(num2).sort((a, b) => a - b);

    if (res.length % 2 === 0) {
        var n = res.length / 2;
        return ((res[n - 1] + res[n]) / 2).toFixed(5);
    } else {
        if (res.length === 1)
            return res;
        else {
            var n = (res.length - 1) / 2;
            return res[n].toFixed(5);
        }
    }
}

console.log("median of SortedArray: " + medianOfSortedArray([1, 3], [2]))

//2 median problem remaining

// akes a string str and returns the int value represented by 
//        the string. For example, atoi("42") returns 42. 
//     More Test Cases for Second problem. 
//       ("3") == 3, 
//       ("-3") == -3, 
//       ("acdd") = 0, 
//       ("345a") == 345, 
//       ("34b") == 34, 
//        ("b23") == 0, 
//      ("-zcb34a") = 0, 
//     ("") = 0, 
//     ("3212bas34d5ae4") = 3212 

function atoi(num) {
    var isNegative = num[0] === "-" ? true : false;

    var result = 0;
    var i = 0;
    while (i < num.length) {
        if (!isNaN(num[i])) {
            result = result * 10 + parseInt(num[i]);
        } else if (num[i] !== "-") {
            break;
        }
        i++;
    }
    return isNegative ? (result * -1) : result;
}


console.log("atoi: " + atoi("3212bas34d5ae4"))