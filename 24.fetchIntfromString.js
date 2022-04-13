//Description. The atoi() function converts a character string to an integer value.
// The input string is a sequence of characters that can be interpreted as a numeric value of the specified return type. 
//The function stops reading the input string at the first character that it cannot recognize as part of a number.

// function atoi(str){
//     if(str === null || str === "") return null;

//     var isNegative = false;
//     // var val = str[0] == "-" ? str[1] : str[0];
//     // if(isNaN(val)) return 0;
    
//     var i = 0;
//     var result = "";

//     while(i < str.length){
//         var temp = str[i] == "-" ? str[i+1] : str[i];
//         isNegative = str[i] == "-" ? true : false;

//         if(!isNaN(temp)){
//             result += temp;
//             if(isNegative) {
//                 i+= 2;
//                 break;
//             }
//         }
//         i++;
//     }
//     return isNegative ? (parseInt(result) * -1) : parseInt(result);
// }


function atoi(str) {
	var result = 0
	var i = 0

	if(str.length === 0) return 0;
	var isNegative = str[i] === "-" ? true : false;
 
    var INT_MAX = Number.MAX_SAFE_INTEGER;
    var INT_MIN = "-" + Number.MIN_SAFE_INTEGER;

	while (i < str.length) {
		var temp = str[i]
		if (!isNaN(temp))  { //temp <= 9 && temp >= 0
			result = result * 10 + parseInt(temp)
		} else if(temp !== "-"){
			break
		}
		i++
	}
    if(result > INT_MAX) return INT_MAX;
    if(result < INT_MIN) return INT_MIN;

	if(result == 0) isNegative = false;

	return isNegative ? (result * -1) : result
}


console.log(atoi("3"))
console.log(atoi("-43"))
console.log(atoi("-3"))
console.log(atoi("acdd"))
console.log(atoi("345a"))
console.log(atoi("34b"))
console.log(atoi("b23"))
console.log(atoi("-zcb34a")) //check
console.log(atoi(""))
console.log(atoi("3212bas34d5e4"))
