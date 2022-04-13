// given array of students and their marks in different subjects.
// Findmaximum average of the student in the following format below . Use Math.floor() to convert fractional average to integer .

// Testcase: StudentScoreTest.java
// {name, avg}
// e.g.

// {“Alice”, “70”}   ,
// {"Bob", "80"}   
// {"Charles", "75"}  
// {"Bob", "80"}  
// {"Dane", 1},{"Dane", 2},{"Dane", 3}   -> avg = (1 + 2+ 3) / 3

// So, here average marks for Alice, Bob, Charles and Dane are 70, 80, 75, 2 respectively. 
//So the highest avg is 80 so it should be returned .

function findMaxAvgStudentScore(arr) {
    if(arr == null || arr.length == 0) return 0;

    var maxAvgScore = Number.NEGATIVE_INFINITY;
    var map = new Map();

    for(var i=0; i < arr.length; i++){
        var student = arr[i];

        if(student.length == 0 || student.length < 2) return 0;

        var key = student[0];
        var val = student[1];

        if(key in map){
            map[key].push(val);
        }
        else map[key] = [val];
    }

    for(student in map){
        var sum = 0;
        for(val of map[student]){
            sum = sum + parseInt(val);
        }
        sum = sum / map[student].length
        if(sum > maxAvgScore){
            maxAvgScore = Math.floor(sum);
        }
    }
    return maxAvgScore;
}

console.log(findMaxAvgStudentScore(
    [
        ['a', '70'],
        ['b', '80'],
        ['c', '75'],
        ['b', '80'],
    ]
))




