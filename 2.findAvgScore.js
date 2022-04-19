// 2.  (Mandatory) given array of students and their marks in different subjects. Find 
// maximum average of the student in the following format below . Use Math.floor() to convert fractional average to integer . 
//   
// Testcase: StudentScoreTest.java 
// {name, avg} 
// e.g. 
//   
// input : {'Bob',10 ],
// ['Alice',10 ],
// ['Bob',20 ],
// ['Alice',10 ]}
// output : 25

//Time Complexity O(n)
//Space Complexity O(n)

function findmaximumAvg(arr) {
    if (arr === null || arr.length == 0) return 0;

    var maxAvg = Number.NEGATIVE_INFINITY;
    var map = new Map();

    for (var i = 0; i < arr.length; i++) {
        var student = arr[i]

        if (student.length < 2) continue;

        var key = student[0];
        var value = student[1];

        if (key in map) {
            map[key].push(value);
        } else {
            map[key] = [value];
        }
    }
    for (var key in map) {
        var sum = 0;
        for (var val of map[key]) {
            sum += val;
        }
        sum = sum / map[key].length;
        if (sum > maxAvg) {
            maxAvg = Math.floor(sum);
        }
    }
    return maxAvg;
}

console.log(findmaximumAvg([
    ['Bob', 10],
    ['Alice', 10],
    ['Bob', 20],
    ['xyz', 40]
]))

console.log(findmaximumAvg([
    ['Bob', 2],
    ['Bob', 2],
]))

console.log(findmaximumAvg([
    ['Bob', -2],
    ['Bob', -2],
    ['Bob', -2]
]))

console.log(findmaximumAvg([
    ['Bob', 40],
    ['Alice', 38],
    ['Alice', 38],
    ['Bob', 40],
    ['Bob', 20],
    ['Bob', 20]
]))

console.log(findmaximumAvg([]))

console.log(findmaximumAvg([
    ['Bob', 2],
]))

console.log(findmaximumAvg([
    ['Bob', 2],
    ['Bob', 2],
]))

console.log(findmaximumAvg([
    ['Bob', 1000000000],
    ['Bob', 1000000000],
]))

console.log(findmaximumAvg([
    ['Bob', -1],
    ['Bob', -4],
]))

console.log(findmaximumAvg([
    []
]))