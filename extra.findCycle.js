//Given an integer array of size n.
//Elements of the array is >= 0. Starting from arr[startInd],
//follow each element to the index it points to.
// Find a cycle and return its length. No cycle is found -> -1.

//Time: O(n)
//Space: O(1)

function findCycleLength(arr){ 
    if(arr.length === 0) return false;

    var fast = 0;
    var slow = 0;
    var isCycle = false;

    while(slow >= 0 && fast >=0 && fast < arr.length && slow < arr.length) {
        fast = arr[fast];
        if(fast === slow) {
            isCycle = true;
            break;
        }

        if(fast < 0 || fast >= 0) break;

        fast = arr[fast]
        if(fast === slow) {
            isCycle = true;
            break;
        }
        slow = arr[slow];
    }

    if(isCycle){
        var length = 1;
        fast = arr[fast];
        while(fast !== slow){
            length++;
            fast = arr[fast];
        }
        return length;
    }
    else return -1;
}

console.log(findCycleLength([1, 0]))
