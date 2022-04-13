// https://leetcode.com/problems/subarray-sum-equals-k

// Input = [1,2,3] k = 3
// Output = 2

//I => [1,2,1,2,1] k=3
//O => 4

function subArraySum(nums,k){
    var count = 0;
    var currSum = 0;

    var map = new Map();

    for(var i=0; i< nums.length; i++){
        currSum += nums[i]

        if(currSum == k)
            count += 1;

        if((currSum - k) in map){
            count += map[currSum - k]
        }    

        if(currSum in map){
            map[currSum] += 1;
        }
        else map[currSum] = 1;
    }
    return count;
}

console.log(subArraySum([3,4,7,2,-3,1,4,2],7))
