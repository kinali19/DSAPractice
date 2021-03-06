// (Mandatory) A robot can move in 4 directions up, down, left and right.
// It's path is encoded in a string with characters U, D, L and R. 
// If the bot starts at coordinate 0.0 then find it's final coordinate based on the input path string . 
// Ex1 : 
// Input : UDRR 
// Output : [2,0] 
// Ex2 : 
// Input : DD 
// Output : [0,-2]  

//Time Complexity O(n)
//Space Complexity O(1)
//    1 
// -1 0 1
//   -1
function findCoordinates(input) {

    if(input.indexOf(" ") >= 0){
        var newPath = input.split(" ");
        input = "";
        for(var i=0; i<newPath.length; i++){
             newPath[i].split("").map((item) => {
                if(item === "U" || item === "R" || item === "L" || item  === "D"){
                    input += item;
                }
            })
        }
    }

    if (input == null) return [0, 0]

    var x = 0
    var y = 0

    for (var i = 0; i < input.length; i++) {
        var c = input[i]

        switch (c) {
            case 'U':
                y += 1
                break;

            case 'D':
                y -= 1
                break;

            case 'L':
                x -= 1
                break;

            case 'R':
                x += 1
                break;
        }
    }
    return [x, y]
}
console.log(findCoordinates("UP DOWN 2xRIGHT"))