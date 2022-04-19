// 3. (Mandatory) Given int array find the 2nd minimum number . 
//Return the number which should be come at 2nd position when we sort the array .
// Array may contain duplicates also .
// Hint : Use max PriorityQueue to remove some candidates (optimised approach, but first try the brute force approach for it) .  
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
// output : "invalid input" 

// 1 solution 
// function find2ndMinimumNumber(str) {
//     var temp = []
//     const minPosition = 2;
//     for (var i = 0; i < str.length; i++) {
//         temp.push(str[i]);
//         if (temp.length > minPosition) {
//             temp.sort((function (a, b) { return a - b; }))
//             temp.reverse();
//             temp.shift();
//         }
//     }
//     temp.sort((function (a, b) {
//         return a - b;
//     }))
//     temp.reverse();
//     return temp[0];
// }

// console.log(find2ndMinimumNumber([9,3,5,8,4,7,8]))

//2nd Solution

//Time: O(n)
//Space: O(1)

function find2ndMinimumNumber(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return "Invalid input"
    }

    var minVal = arr[0];
    var secondMinVal = Number.NEGATIVE_INFINITY;

    for (var i = 1; i < arr.length; i++) {
        if (minVal >= arr[i]) {
            secondMinVal = minVal;
            minVal = arr[i];
        } else if (secondMinVal > arr[i]) {
            secondMinVal = arr[i]
        }
    }
    return secondMinVal;
}

console.log(find2ndMinimumNumber([3, 9, 8, 8, 5, 3, 3]))

//Time: nlogn
//space: O(1)
function findKthElement(arr, k) {
    if (arr.length === 0 || arr.length === 1) {
        return "Invalid input"
    }

    var arr = arr.sort();
    if (k > 0) {
        return arr[k - 1]
    }
}
console.log(findKthElement([1, 2, 5, 4, 7], 4))