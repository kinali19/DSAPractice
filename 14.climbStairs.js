// 14(Mandatory) Problem name : Staircase steps  
// https://leetcode.com/problems/climbing-stairs/ 
//  ​​​​​​You are climbing a staircase. It takes n steps to reach the top.  
// Each time you can either climb 1 or 2 or 3 steps.  
// In how many distinct ways can you climb to the top  
// 2  
// 1 + 1  
// 2  
// 3  
// 1+1+1  
// 1+2  
// 2+1  
// 3  
// 4  
// 1+1+1+1  
// 1+1+1  
// Example 1:  
//   
// Input : 4  
// Output : 7  
// Explanation:  
// Below are the different ways  
// 1 step+ 1 step + 1step + 1 step  
// 1 step+ 1 step + 2 step  
// 1 step + 3 step  
// 2 step + 1 step + 1 step  
// 2 step + 2 step  
// 3 step + 1 step  
// 1 step + 3 step  

//Time complexity : O(n)
//Space complexity : O(n)

function climbStairs(n){
   var arr = new Array(n+1);
   
   arr[0] = 1;
   arr[1] = 1;
   arr[2] = 2;

   for(var i=3; i<= n; i++){
       arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
   }
   return arr[n];
}


console.log(climbStairs(5))
