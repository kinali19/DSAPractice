// 1. (Mandatory) Given a string. Write a function to find the first non-repeating character in it. If there is no non-repeating character, return 0;  - Done
// e.g. 
// Input (string) Output (char)  -> dic key.value pair with count if count==1 then return char
// —– —— 
// aabbccd          d 
// abbccpddee    a 
// iijjkkllmm         0 
// abbcddea        c 	

//1.

function findNonRepeatingChar(str){
    if(str === "" || str.length === 0){ return 0};

    var dic = {};
    for(var i=0; i< str.length; i++){
        var ch = str.charAt(i).trim();

        if(ch in dic){
            dic[ch] += 1;
        }
        else{
            dic[ch] = 1;
        }
    }
    for(ch in dic){
        if(dic[ch] === 1) return ch;
    }
   return 0; 
}

console.log("1:" + findNonRepeatingChar("abbccpddee"))


//2.

// 2.(Mandatory)  
//  Find if given integer is a power of ten without using math.pow() function.   - Done
// input:  x=10    
// output:  true    
// explanation : 10^1 =10;  
// 100 :  10^2  
// 1000 : 10^3  
// input: x=50    
// output: false    

function isPowerOf10(n){
    if(n === 0) return false;

    while(n > 1 && n % 10 == 0){
        n = n / 10;
    }
    return n == 1;
}

console.log("2:" + isPowerOf10(100))

// 3.(Mandatory) Write a function that takes input and output as shown under:-  Done
// Input (string) Output (string)  
// aaa                    a3   
// aabbcc              a2b2c2   
// aaabcdd            a3b1c1d2   
// a                        a1  
// aabbaaa            a2b2a3  

function compressString(str){
    if(str === "" || String.length === 0){ return "Invalid String"}

    var i = 0;
    var result = "";
    var count = 1;

    while(i < str.length){
       var ch = str.charAt(i);
       var next = i + 1 < str.length ? str.charAt(i+1) : -1

       if(ch !== next){
            result += ch + count;
            count = 0;
       }
        i++; count++;
    }
    return result;
}

console.log("3:" + compressString("abaaaa"))

// 4(Mandatory) A robot can move in 4 directions up, down, left and right. It's path is encoded in a string with characters U, D, L and R. If the bot starts at coordinate then find it's final coordinate based on the input path string . - Done
// Ex1 : 
// Input : UDRR 
// Output : [2,0] 
// Ex2 : 
// Input : DD 
// Output : [0,-2]  

function findCordinates(str){
    var x = 0;
    var y = 0;

    var i = 0;

    while(i < str.length) {
        var ch = str.charAt(i);

        switch(ch){
            case "U":
                y += 1;
                break;
            case "D":
                y -= 1;
                break;
            case  "L":
                x -= 1;
                break;
            case  "R":
                x += 1;
                break;
        }
        i++;
    }
    return [x,y]
}

console.log("4:" + findCordinates("UDRR"))

// 5.   (Mandatory) given array of students and their marks in different subjects. Find 
// maximum average of the student in the following format below . Use Math.floor() to convert fractional average to integer . - Done
   
function findMaxAvg(list){

    if(list.length == 0) return 0;

    var map = new Map();
    var maxAvg = 0;

    for(var i=0; i < list.length; i++){
        var student = list[i];

        if(student.length < 2) return 0;

        var key = student[0];
        var value = student[1];

        if(key in map){
            map[key].push(value);
        }
        else{
            map[key] = [value];
        }
    }

    for(key in map){
        var sum = 0;
        for(val of map[key]){
            sum += val;
        }
        sum = Math.floor(sum / map[key].length)
        maxAvg = sum > maxAvg ? sum : maxAvg
    }
    return maxAvg;
}

console.log("5:" + findMaxAvg([
    ['Bob',80 ],
    ['Alice',10 ],
    ['Bob',70 ],
    ['Alice',10 ]
    ]))

// 6. (Mandatory) Given int array find the 2nd minimum number .
// Return the number which should be come at 2nd position when we sort the array . Array may contain duplicates also . Hint : Use max PriorityQueue to remove some candidates (optimised approach, but first try the brute force approach for it) .   - Done
// ex1 : arr = [9,3,5,8,4,7,8] 
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

function findSecondMinNum(arr){
    var minVal = Number.MAX_VALUE;
    var secondMinVal = Number.MAX_VALUE;

    if(arr.length === 0) return 0;
    if(arr.length === 1) return "Invalid Input";

    for(var i=0; i < arr.length; i++){
        
        if(arr[i] < minVal){
            secondMinVal = minVal;
            minVal = arr[i];
        }
        else if(arr[i] < secondMinVal){
            secondMinVal = arr[i];
        }
    }
    return secondMinVal;
}

console.log("6:" + findSecondMinNum([3,9,8,8,5,4]))

// 7. (Mandatory)Missing characters to make a string Pangram - Done
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

function makeStringPangram(str){
    let letters = "abcdefghijklmnopqrstuwxyz";
    let dic = {}

    for(var i=0; i < str.length; i++){
        if(!(str[i] in dic)){
            dic[str[i]] = 1;
        }
    }
    var missingLetters = "";
    for(letter of letters){
         if(!(letter in dic)) {
             missingLetters += letter;
         }
    }
    return missingLetters;
}

console.log("7:" + makeStringPangram("The quick brown fox jumps"))

// 8. (Mandatory) 
// /* Problem Name is &&& Longest Uniform Substring  - Done
// /** 
//  * Instructions to candidate. 
//  *  1) Run this code in the REPL to observe its behaviour. The 
//  *     execution entry point is main(). 
//  *  2) Your task is to implement the following method ('longestUniformSubstring') 
//  *   
//  *  This method should return an integer array with two elements that correctly identifies the location of the longest 
//  *  uniform substring within the input string. The first element of the array should be the starting index of the longest 
//  *  substring and the second element should be the length. 
//  *   
//  *  e.g. for the input: "aaabbbbccda" the longest uniform substring is "bbbb" (which starts at index 3 and is 4 characters long). 
//   
// ex1 : s = "abc" 
// output = [0, 1] 
//   
// ex2 s = "aabbbc" 	
// output = [2, 3] 

function longestUniformSubstring(str){
    if(str === "" || str.length === 0) return [-1,0]
    if(str.length == 1) return [0, 1] 
    
    var idx = -1;
    var count = 0;
    var maxCount = 0;

    for(var i=0; i < str.length; i++){
        if(str[i] === str[i+1]) {
            count++;
        }
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

console.log("8:" + longestUniformSubstring("aaabbccccda"))

// 9. (Mandatory) Problem name : Staircase steps  - Done
// https://leetcode.com/problems/climbing-stairs/ 
//  ​​​​​​You are climbing a staircase. It takes n steps to reach the top.  
// Each time you can either climb 1 or 2 or 3 steps.  
// In how many distinct ways can you climb to the top  
// 2  
// 1 + 1  
// 2  
// 3  
// 1+1+1  
// 1+2  
// 2+1  
// 3  
// 4  
// 1+1+1+1  
// 1+1+1  
// Example 1:  
//   
// Input : 4  
// Output : 7  
// Explanation:  
// Below are the different ways  
// 1 step+ 1 step + 1step + 1 step  
// 1 step+ 1 step + 2 step  
// 1 step + 3 step  
// 2 step + 1 step + 1 step  
// 2 step + 2 step  
// 3 step + 1 step  
// 1 step + 3 step  

function staircaseSteps(step){
    var arr = new Array(step+1);

    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;

    for(var i = 3; i <= step; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
    }
    return arr[step];
}

console.log("9: " + staircaseSteps(4))

// 10.  (Mandatory) Given a string, find the longest substring which is palindrome. 
// For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg” .  

function findLongestPalindrom(str){
    if(str === "" || str.length == 0) return "Invalid Input";

    var maxLength = 0;
    var result = ""
    for(var i = 0; i < str.length; i++){
        {

            const longestSubstring = () => {
                while(l >= 0 && r < str.length && str[l] === str[r]){
                    if(r - l + 1 > maxLength){
                        maxLength = r - l + 1;
                        result = str.substr(l, maxLength);
                    }
                    l--;
                    r++;
                }
            }

            {
                var l = i;
                var r = i;  

                longestSubstring(l,r)
            }
            {
                var l = i;
                var r = i + 1;  

                longestSubstring(l,r)
            }
           
        }
    }
    return result;
}

console.log("10: " + findLongestPalindrom("“forgeeksskeegfor”"))

// 11.(Mandatory) Given a string ” ABABCABABCD”, you have to compress it into the following format: AB* C*D . Here, * always repeats all the characters in front of it .   
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

function decodeString(str){
    if(str.length === 0) return "Invalid String"

    var i = 0;
    var j = 1;
    var output = str[i];

    while(i < str.length && j < str.length){
        if(str[i] !== str[j]){
            output += str[j];
            j++;
        }
        else{
            var temp = j;
            var shouldAdd = true;
            while(str[i] == str[j] && i < str.length && j < str.length){
                i++;
                j++;

                if(temp == j){
                    shouldAdd = true;
                }
            }

            if(shouldAdd){
                output += "*";
                i = 0;
            }
            else{
                while(temp < j){
                    output += str[temp];
                    temp++;
                    i = 0;
                }
            }
        }
    }
    return output;
}

console.log("11:" + decodeString("ABABC"))

//12 remaining

// 13. Largest Histogram - Done
 
// https://leetcode.com/problems/largest-rectangle-in-histogram/ 

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

function findLargestHistogram(heights){
    var ps = findPreSmallestElement(heights);
    var ns = findNextSmallestElement(heights);

    var maxSum = 0;

    for(var i = 0; i< heights.length; i++){
        var sum = (ns[i] - ps[i] - 1) * heights[i];
        maxSum = sum > maxSum ? sum : maxSum;
    }
    return maxSum;
}

function findPreSmallestElement(arr){
    var ps = new Array();
    var stack = [];
    var i = 0;

    while(i < arr.length){
        while(stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ps[i] = -1;
        }
        else{
            ps[i] = stack[stack.length - 1]
        }
        stack.push(i);
        i++;
    }
    return ps;
}

function findNextSmallestElement(arr){
    var ns = new Array();
    var stack = [];
    var i = arr.length - 1

    while(i >= 0){
        while(stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ns[i] = arr.length
        }
        else{
            ns[i] = stack[stack.length - 1]
        }
        stack.push(i);
        i--;
    }
    return ns;
}

console.log("13: " + findLargestHistogram([2,1,5,6,2,3]))

//14: Maximum Rectangle
//https://leetcode.com/problems/maximal-rectangle/

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

function findMaximumRectangle(matrix){
    if(matrix.length === 0) return 0;

    var result = [];
    var maxRectangle = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            if(i == 0) {
                result[j] = parseInt(matrix[i][j]);
            }            
            else{
                result[j] = parseInt(matrix[i][j]) === 0 ? 0 : result[j] + parseInt(matrix[i][j]); 
            }
        }
        var sum = findLargestHistogram(result);
        maxRectangle = sum > maxRectangle ? sum : maxRectangle;
    }
    return maxRectangle;
}

console.log("14: " + findMaximumRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))

//15 Trapping rain water
//https://leetcode.com/problems/trapping-rain-water/
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
//  In this case, 6 units of rain water (blue section) are being trapped.

function findTrappingrainWater(height){
    var i = 0;
    var j = height.length -1;
    var maxLeft = 0
    var maxRight = 0
    var water = 0;

    while(i < j){
        if(height[i] <= height[j]){
            maxLeft = Math.max(maxLeft, height[i]);
            water += maxLeft - height[i];
            i++;
        }
        else{
            maxRight = Math.max(maxRight, height[j]);
            water += maxRight - height[j]
            j--;
        }
    }
    return water;
}

console.log("15: " + findTrappingrainWater([4,2,0,3,2,5]))

//16. GCD
 
// (Mandatory) Find the GCD(Greatest Common Divisor) of two integers .  - Done
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

function findGreaterDivisor(a,b){
    if(a == 0) return b;
    if(b == 0) return a;

    while(b){
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}

console.log("16: " + findGreaterDivisor(0,8))

// 17. Fraction Sum
// Given two fraction in the form int[]  where p and q are integers. 
// Find the sum of two fractions. (Note: The result should be in reduced form)    - Done

function fractionofSum(frac1, frac2){
    if(frac1.length < 2 || frac2.length < 2) return [0,0]

    var a = frac1[0]
    var b = frac1[1]

    var c = frac2[0]
    var d = frac2[1]

    var x = (a*d) + (b*c)
    var y = b*d

    var gcd = findGreaterDivisor(x,y)

    return [x/gcd, y/gcd]
}

console.log("17: " + fractionofSum([1,2], [1,6]))

//18 Winner in Circle
// There are n friends that are playing a game. 
//The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

// The rules of the game are as follows:

// Start at the 1st friend.
// Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
// The last friend you counted leaves the circle and loses the game.
// If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
// Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.

function winnerinCircle(n,k){
    var l = [];

    for(var i=1; i <= n; i++){
        l.push(i);
    }

   //var l = Array.from(Array(n).keys())

   var i = 0;
   while(l.length > 1){
        i = (i + k -1) % (l.length);
        l.splice(i, 1)
   }
   return l[0]
}

console.log("18: " + winnerinCircle(5,2))

// 19. Minimum size subarray
 
// https://leetcode.com/problems/minimum-size-subarray-sum/ 
// Try brute force approach in O(n^2) then  - Done
// Try solving in O(n) time by optimising Brute force. 

function findMinimumSizeSubArray(arr, target){
    var currSum = 0;
    var prevIndex = 0;
    var minLength = Infinity;

    for(var i=0; i < arr.length; i++){
        currSum += arr[i];

        while(currSum >= target){
            currSum -= arr[prevIndex];
            minLength = Math.min(minLength, i - prevIndex + 1)
            prevIndex++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log("19: " + findMinimumSizeSubArray([2,3,1,2,4,3], 7))


// 20. IP Address

// (Mandatory) You have been given a file of IP addresses. - Done
// There are some IP addresses like 10.0.0.1,10.0.0.2 etc. We need to find out which IP address is the most visited 
// INPUT: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​"10.0.0.1 satish","10.0.0.2 Vinay","10.0.0.1 Deepa"}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​;​​​ 
// O/P: "10.0.0.1" 

function findIPAddress(addresses){
    var map = new Map();
    var ipAddress = [];
    var maxCount = 0;

    for(address of addresses){
        var ip = address.split(" ")[0];

        if(ip in map){
            map[ip] += 1
        }
        else{
            map[ip] = 1
        }

        if(maxCount < map[ip]){
            maxCount = map[ip];
        }
    }
    for(ip in map){
        if(map[ip] === maxCount) {
            ipAddress.push(ip);
        }
    }
    return ipAddress.join(",");
}

console.log("20: " + findIPAddress(["10.0.0.2 satish","10.0.0.2 Vinay","10.0.0.3 Deepa", "10.0.0.3 Vinay"]))

//21 recurring decimal
// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.

function findRecurringDecimal(num,den) {
    var sign = "";
    if(Math.sign(num) !== Math.sign(den) && num !== 0){
        sign = "-"
    }

    num = Math.abs(num);
    den = Math.abs(den);

    var res = []
    var reminders = []

    while(true){
        var q = Math.floor(num / den);
        var r = num % den;
        res.push(q);

        if(r in reminders){
            res.splice(reminders[r], 0, "(");
            res.push(")")
            break;
        }
        reminders[r] = res.length;
        num = r * 10;
        
        if(num === 0) 
          break;
        
    }
    if(res.length > 1){
        res.splice(1, 0, ".")
    }
    return sign + res.join("")
}

console.log("21: " + findRecurringDecimal(2,3))

// 22. Subarray sum equals to KA - Done
 
// https://leetcode.com/problems/subarray-sum-equals-k/ 
//Input: nums = [1,2,3], k = 3
  //Output: 2

function sumArraysumK(arr, k){
    var currSum = 0;
    var count = 0;
    var map = new Map();    
    
    for(var i =0; i < arr.length; i++){
        currSum += arr[i];

        if(currSum == k) {
            count += 1;
        }
        if((currSum - k) in map){
            count += map[currSum - k];
        }

        if(currSum in map){
            map[currSum] += 1
        }
        else{
            map[currSum] = 1
        }
    }
    return count;
}

console.log("22: " + sumArraysumK([4,2,5,1,7,6,3],6))

// 23. Product of sub Array 
// Product of Array 
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. 
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer 
// Input: nums = [1,2,3,4] 
// Output: [24,12,8,6] 
// Input: nums = [-1,1,0,-3,3] 
// Output: [0,0,9,0,0] 
// Product of Array Except Self - LeetCode​​​​​​​ 

function productOfSubArray(arr){
    var res = [];
    var left = 1;
    var right = 1;

    for(var i=0; i<arr.length; i++){
        res[i] = left;
        left = left * arr[i];
    }

    for(var i=arr.length-1; i>=0;i--){
        res[i] = right * res[i];
        right = right * arr[i];
    }
    return res;
}

console.log("23: " + productOfSubArray([1,2,3,4]))

// 24, Fetch int from String - Done
//  Mandatory 
//   
// Takes a string str and returns the int value represented by 
//        the string. For example, atoi("42") returns 42. 
//     More Test Cases for Second problem. 
//       ("3") == 3, 
//       ("-3") == -3, 
//       ("acdd") = 0, 
//       ("345a") == 345, 
//       ("34b") == 34, 
//        ("b23") == 0, 
//      ("-zcb34a") = 0, 
//     ("") = 0,     ("3212bas34d5ae4") = 3212 

function atoi(str){
    if(str.length == 0) return 0;

    var result = 0;
    var isNegative = str[0] === "-" ? true : false;
    var i = 0;

    while(i < str.length){
      if(!isNaN(str[i])){
          result = result * 10 + parseInt(str[i])
      }  
      else if(str[i] !== "-"){
          break;
      }
      i++;
    }
    return isNegative ? (result * -1) : result;
}

console.log("24: " + atoi("-3212bas34d5ae4"))

// 25. Excel Column
 
// Q: Problem Statement: Return the name of the excel column? - Done
// Input number : 4 
// O/p Column : “D” 
 	
// Input number : 26 
// O/p Column : “Z” 
 
// Input number : 52 
// O/p Column : “AZ”

function findExcelCol(n) {
    var acode = 'A'.charCodeAt(0);
    var zcode = 'Z'.charCodeAt(0);

    var len = zcode - acode + 1;
    var colName = [];

    while(n > 0) {
        var rem = n % len;
        if(rem === 0){
            colName.push(String.fromCharCode(zcode))
            n = Math.floor(n / len) - 1;    
        }
        else{
            colName.push(String.fromCharCode((rem - 1) + acode));
            n = Math.floor(n / len);
        }
    }
    return colName.reverse().join("");
}

console.log("25: " + findExcelCol(4))


