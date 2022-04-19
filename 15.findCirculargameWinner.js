//https://leetcode.com/problems/find-the-winner-of-the-circular-game/

//Time complexity : O(n)
//Space Complexity : O(n)

var findTheWinner = function (n, k) {
    var l = [];

    if (n == 0) return 0;

    for (var i = 1; i <= n; i++) {
        l.push(i);
    }
    var i = 0;
    while (l.length > 1) {
        i = (i + k - 1) % (l.length);
        l.splice(i, 1);
    }
    return l[0]
};

console.log(findTheWinner(5, 2))