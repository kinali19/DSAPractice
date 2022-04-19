// https://leetcode.com/problems/maximal-rectangle

//Time: O(r*c)
//Space: O(n)

function maximalRectangle(matrix) {
    var result = [];
    var maxSum = 0;

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (i == 0) {
                result[j] = parseInt(matrix[i][j])
            } else {
                result[j] = parseInt(matrix[i][j]) === 0 ? 0 : result[j] + parseInt(matrix[i][j])
            }
        }
        var sum = largestRectangleArea(result);
        maxSum = sum > maxSum ? sum : maxSum;
    }
    return maxSum;
}

function largestRectangleArea(array) {
    var ps = findPrevSmallestElement(array);
    var ns = findNextSmallestElement(array);

    var maxSum = 0;
    for (var i = 0; i < array.length; i++) {
        var sum = (ns[i] - ps[i] - 1) * array[i];
        maxSum = sum > maxSum ? sum : maxSum;
    }
    return maxSum;
}

function findPrevSmallestElement(arr) {
    var ps = new Array();
    var stack = [];

    var i = 0;
    while (i < arr.length) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length == 0) {
            ps[i] = -1
        } else
            ps[i] = stack[stack.length - 1]

        stack.push(i);
        i++;
    }
    return ps;
}

function findNextSmallestElement(arr) {
    var ns = new Array();
    var stack = [];

    var i = arr.length - 1
    while (i >= 0) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length == 0) {
            ns[i] = arr.length
        } else
            ns[i] = stack[stack.length - 1]

        stack.push(i);
        i--;
    }
    return ns;
}

console.log(
    maximalRectangle(
        [
            ["0", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]
        ]
    )
)

console.log(
    maximalRectangle(
        [
            ["0"]
        ]
    )
)

console.log(
    maximalRectangle(
        [
            ["1"]
        ]
    )
)