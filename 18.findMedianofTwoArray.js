// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

//https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianTwoArray(nums1, nums2){
    if(nums1.length == 0 && nums2.length === 0) return 0;

    var res = nums1.concat(nums2).sort((a,b) => (a-b));
    
    if(res.length % 2 === 0) {   
        let n = res.length / 2;
        return ((res[n-1] + res[n]) / 2).toFixed(5);
    }
    else{
        if(res.length === 1)
            return res;
        else{
                let n = (res.length-1) / 2;
                return res[n].toFixed(5);
        }    
    }
}

console.log(findMedianTwoArray([1,2],[3,4]))
