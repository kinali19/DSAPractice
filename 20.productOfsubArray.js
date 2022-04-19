// 20. Product of Array 
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. 
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer 
// Input: nums = [1,2,3,4] 
// Output: [24,12,8,6] 
// Input: nums = [-1,1,0,-3,3] 
// Output: [0,0,9,0,0] 
// Product of Array Except Self - LeetCode​​​​​​​ 

//brute force approch 0(n2)

var productExceptSelf = function (nums) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        var product = 1;
        for (var j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
};


var productExceptSelf = function (nums) {
    var res = []

    var mulTillNow = 1;
    var i = 0;
    while (i < nums.length) {
        res.push(mulTillNow);
        mulTillNow *= nums[i];
        i++;
    }

    i = nums.length - 2;
    mulTillNow = nums[nums.length - 1]

    while (i >= 0) {
        res[i] = res[i] * mulTillNow;
        mulTillNow *= nums[i];
        i--;
    }

    return res;
}

//simple way

//Time: O(n)
//Space: O(n)

function productExceptSelf(nums) {

    if (nums === null || nums.length === 0) return [];

    var res = [];
    var left = 1;
    var right = 1;

    for (var i = 0; i < nums.length; i++) {
        res[i] = left;
        left = left * nums[i];
    }

    for (var i = nums.length - 1; i >= 0; i--) {
        res[i] = right * res[i];
        right = right * nums[i];
    }
    return res;
}


console.log(productExceptSelf([10, 3, 5, 6, 2]))