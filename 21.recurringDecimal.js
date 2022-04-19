// https://leetcode.com/problems/fraction-to-recurring-decimal

//Time: O(r)
//Space: 0(n)

function recurringDecimal(num, den) {
    let sign = "";

    if (Math.sign(num) !== Math.sign(den) && num !== 0) {
        sign = "-"
    }

    let res = [];
    let reminders = {}

    num = Math.abs(num);
    den = Math.abs(den);

    while (true) {
        var q = Math.floor(num / den); //1/2
        var r = num % den;
        res.push(q);

        if (r in reminders) {
            res.splice(reminders[r], 0, "(");
            res.push(")");
            break;
        }

        reminders[r] = res.length;
        num = r * 10;

        if (num === 0)
            break;

    }
    if (res.length > 1) {
        res.splice(1, 0, ".");
    }
    return sign + res.join("")
}

console.log(recurringDecimal(4, 333))