// https://leetcode.com/problems/largest-number

var largestNumber = function(nums){
    const res = nums.map(String).sort((a,b) => a.concat(b) > b.concat(a) ?-1 : 1).join("");
    return res.charAt(0) === '0' ? '0' : res;
}

console.log(largestNumber([3,30,34,5,9]))

