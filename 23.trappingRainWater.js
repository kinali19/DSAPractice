// https://leetcode.com/problems/trapping-rain-water

function findTrappingRainWater(heights) {
    var left = findLeftElement(heights);
    var right = findRightElement(heights);

    var trappingWater = 0;

    for (var i = 0; i < heights.length; i++) {
        trappingWater += (left[i] < right[i] ? left[i] : right[i]) - heights[i];
    }
    return trappingWater;
}

function findLeftElement(arr) {
    let left = new Array();

    var i = 0;
    left.push(arr[i++]);

    while (i < arr.length) {
        left[i] = left[left.length - 1] < arr[i] ? arr[i] : left[left.length - 1]
        i++;
    }
    return left;
}

function findRightElement(arr) {
    let right = new Array();


    var i = arr.length - 1;
    right[i] = arr[i--];

    while (i >= 0) {
        right[i] = right[i + 1] < arr[i] ? arr[i] : right[i + 1]
        i--;
    }
    return right;
}

//optimized Solution

//Time: O(n)
//Space: O(1)

var trap = function (height) {
    var i = 0;
    var j = height.length - 1;
    var maxLeft = 0;
    var maxRight = 0;
    var water = 0;


    while (i < j) {
        if (height[i] <= height[j]) {
            maxLeft = Math.max(maxLeft, height[i]);
            water += maxLeft - height[i];
            i++;
        } else {
            maxRight = Math.max(maxRight, height[j]);
            water += maxRight - height[j];
            j--;
        }
    }
    return water;
}

console.log(findTrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(findTrappingRainWater([4, 2, 0, 3, 2, 5]))