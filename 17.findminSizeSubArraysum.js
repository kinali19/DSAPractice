//https://leetcode.com/problems/minimum-size-subarray-sum/submissions

//0(n2)
var minSubArrayLen = function(target, nums) {
    
    var minLength = Number.MIN_VALUE
    
    for(var i=0; i < nums.length; i++){
         var currSum = 0
       
        var j=i
        for(; j < nums.length; j++){
            currSum += nums[j];

            if(currSum >= target){
                break;
            }                
        }
        var temp = (j - i) + 1
        if((currSum >= target) && (minLength == Number.MIN_VALUE || minLength > temp)) {
            minLength = temp;
        }
    }
    
    return minLength == Number.MIN_VALUE ? 0 : minLength;
}; 


//optimized solution 0(n)
var minSubArrayLen = function(target, nums) {
    
    var minLength = Infinity;
    var prevIndex = 0;
    var currSum = 0;
    
    
    for(var i = 0; i < nums.length; i++){
        currSum += nums[i];
        
        while(currSum >= target){
           minLength = Math.min(minLength, i - prevIndex + 1) 
           currSum -= nums[prevIndex];
           prevIndex++;    
        }
       
    }
    return minLength === Infinity ? 0 : minLength;
}; 


console.log(minSubArrayLen(7,[2,3,1,2,4,3]))