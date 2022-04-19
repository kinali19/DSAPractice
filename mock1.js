// //Input :

// // Given n non-negative integers representing an elevation map where the width of each bar is 1,
// //  compute how much water it can trap after raining.


// // Example 1:


// // Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// // Output: 6
// // Explanation: The above 

// // Input: height = [4,2,0,3,2,5]
// // Output: 9



// function TrappingRain(arr){
//     if(arr.length == 0) return 0;

//     var i= 0;   //2
//     var j = arr.length -1;  //
//     var maxLeft = 0;
//     var maxRight = 0;
//     var water = 0;

//     while(i < j){   
//         if(arr[i] <= arr[j]){
//             maxLeft = Math.max(maxLeft, arr[i])
//             water += maxLeft - arr[i]; //0, 0, 1,
//             i++;
//         }
//         else{
//             maxRight = Math.max(maxRight, arr[j]);
//             water += maxRight - arr[j];
//             j--;
//         }
//     }
//     return water;
// }

// //0 < 1 
// //left = 1

// console.log(TrappingRain([0,1,0,2,1,0,1,3,2,1,2,1]))



//aabbccd -> d
//iijjkkllmm-> 0

function findNonRepeatingChar(str){
    if(str == "" || str === null) return "invalid string";

    if(str.length === 1) return str;

    var dic = {};
    for(var i=0; i < str.length; i++){
        var ch = str.charAt(i);

        if(ch in dic){
            dic[ch] += 1;
        }
        else{
            dic[ch] = 1;
        }
    }
    for(ch in dic){
        if(dic[ch] === 1) {
            return ch;
        }
    }
    return 0;
}

//console.log(findNonRepeatingChar("abbcddea"))

//
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// output: [0,1,2]

function findSortedArr(arr){
    if(arr.length === 0) return [];

    var done = false;

    while(!done){
        done = true;
        for(var i=1; i<arr.length; i++){
            if(arr[i-1] > arr[i]){
                done = false;
                var temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
 
}

console.log(findSortedArr([2,0,1,1,2,0,1,2]))
