//https://leetcode.com/problems/di-string-match/
Input: s = "IDID"
Output: [0,4,1,3,2]


var diStringMatch = (str) => {
    var res = [];
    var l = 0;
    var r = str.length;

    for(var i = 0; i < str.length; i++){
        if(str[i] === "I"){
            res.push(l);
            l++;
        }
        else if(str[i] === "D"){
            res.push(r);
            r--;
        }   
    }
    res.push(l);
    return res;
}

console.log(diStringMatch("IDID"))