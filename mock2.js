[-2,-3,4,-1,-2,1,5,-3] 
//[]
// 7
//

function findSumSubarray(arr){
    var maxSum = arr[0];
    var currSum = arr[0];

    
    for(var i=1; i <= arr.length; i++){
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

console.log(findSumSubarray([-2,1,-3,4,-1,2,1,-5,4]))
