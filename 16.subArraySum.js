// https://leetcode.com/problems/subarray-sum-equals-k

// Input = [1,2,3] k = 3
// Output = 2

//I => [1,2,1,2,1] k=3
//O => 4

function subArraySum(nums,k){

    if(nums.length === 0) return 0;

    var count = 0;
    var currSum = 0;

    var map = new Map(); 

    for(var i=0; i< nums.length; i++){
        currSum += nums[i]

        if(currSum == k)
            count += 1;

        if((currSum - k) in map) {
            count += map[currSum - k]
        }    

        if(currSum in map){
            map[currSum] += 1;
        }
        else map[currSum] = 1;
    }
    return count;
}

console.log(subArraySum([15,2,4,8,9,5,10,23],23))
