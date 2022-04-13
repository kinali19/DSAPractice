var sortArray = function(nums) {
    var result = "";
 var A = [...nums]
     var done = false;

     while(!done){
         done = true;
         for(var i=1; i < A.length; i++){
             if(A[i-1] > A[i]){
                 done = false;
                 var temp = A[i-1];
                 A[i-1] = A[i]
                 A[i] = temp;
             }
         }
     }
     console.log(A);
};