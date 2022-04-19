// https://leetcode.com/problems/largest-rectangle-in-histogram/

//Time: O(n)
//Space: O(n)

function findMaximumRectangleHistomgram(heights) {
    var ps = previousSmallestElement(heights);
    var ns = nextSmallestElement(heights);

    var maxSum = 0;
    for (var i = 0; i < heights.length; i++) {
        var sum = (ns[i] - ps[i] - 1) * heights[i];
        maxSum = sum > maxSum ? sum : maxSum;
    }
    return maxSum;
}

function previousSmallestElement(arr) {
    var ps = new Array();
    var stack = [];

    var i = 0;
    while (i < arr.length) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            ps[i] = -1;
        } else {
            ps[i] = stack[stack.length - 1]
        }
        stack.push(i);
        i++;
    }
    return ps;
}

function nextSmallestElement(arr) {
    var ns = new Array();
    var stack = [];

    var i = arr.length - 1;
    while (i >= 0) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            ns[i] = arr.length;
        } else {
            ns[i] = stack[stack.length - 1]
        }
        stack.push(i);
        i--;
    }
    return ns;
}

console.log(findMaximumRectangleHistomgram([]))