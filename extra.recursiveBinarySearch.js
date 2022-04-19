//Time: O(log n)
//Space: O(log n)

function recursiveBinarySearch(array, val, left, right) {
    if (left > right) return -1;

    var mid = Math.floor((left + right) / 2);
    if (array[mid] === val) return mid;
    else if (array[mid] > val) {
        return recursiveBinarySearch(array, val, left, mid - 1);
    } else {
        return recursiveBinarySearch(array, val, mid + 1, right);
    }
}

console.log(recursiveBinarySearch([1, 3, 6, 7, 8, 9, 12], 8, 0, 6))