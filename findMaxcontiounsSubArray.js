function findSumSubarray(arr){
    var maxSum = arr[0];
    var currSum = arr[0];

    
    for(var i=1; i < arr.length; i++){
        currSum += arr[i];

        if(currSum < arr[i]){
            currSum = arr[i];
        }
        if(currSum >= maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
}

console.log(findSumSubarray([-2,-3,4,-1,-2,1,5,-3]))

//100,200,300,400

//find maximum sum of subarray of size k

function findMaximumSum(arr, k){
    var res = 0;

    for(var i=0; i < k; i++){
        res += arr[i];
    }

    var currSum = res;
        for(let i = k; i < arr.length; i++){
            currSum += arr[i] - arr[i-k];
            res = Math.max(res, currSum);
        }
    return res;
}

console.log(findMaximumSum([100,200,300,400], 2))