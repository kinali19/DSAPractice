/* Problem Name is &&& JS Object to String &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate:
 *
 *  1) Given the below code. Write a function (ES6 recommended) that loops through all the properties of the Employee and create a comma-seperated string with the values
 *     For e.g.
 *     { 
 *        firstName: "X",
 *        lastName: "Y",
 *        project: { 
 *           id: 1,
 *           name: "ABC"
 *         } 
 *     }
 *     should be converted to a string like this "X, Y, 1, ABC, "
 *
 *
 *  NOTE: The function shouldn't convert the prototypically inherited properties For e.g. in this case "managerId"
 *
 */

const Employee = function (fName, lName, project) {
  this.firstName = fName;
  this.lastName = lName;
  this.project = project;

  this.getFullName = function () {
    return this.lastName + ", " + this.firstName;
  }
};
Employee.prototype.managerId = 123;
Employee.prototype.sayHello = function () {
  console.log("Hello");
};
// ---------------------------------------------

/**
 * TODO: Write a function here called 'convertToString' that will return the expected result.
 */
var output = "";

function convertToString(inputs) {
  Object.keys(inputs).reduce((acc, curr) => {
    if (inputs[curr] && typeof inputs[curr] !== "function") {
      if (typeof inputs[curr] === 'object') {
        convertToString(inputs[curr])
      } else {
        output += output !== "" ? "," + inputs[curr] : inputs[curr]
      }
    }
  }, "")
  return output;
}

let result = []

function convertToString1(inputs) {
  for (prop in inputs) {
    if (typeof inputs[prop] !== "function" && inputs.hasOwnProperty(prop)) {
      if (typeof (inputs[prop]) === "object") {
        convertToString1(inputs[prop])
      } else {
        result.push(inputs[prop])
      }
    }
  }
  return result.join(",")
}
const flatten = (inputs) => Object.keys(inputs).reduce((a, b) =>
  typeof (inputs[b]) !== "function" ?
  a.concat(typeof (inputs[b]) === "object" ? flatten(inputs[b]) : inputs[b]) :
  a, []).join(",")

let inputs = new Employee("Frank", "Sinatra", {
  id: 1,
  name: "Trader Platform"
})
console.log("flatten: " + flatten(inputs))

// const object1 = {a: 'mayuri'}
// const object2 = object1
// object2.a = "kinali"
//{ 
// *        firstName: "X",
// *        lastName: "Y",
// *        project: { 
// *           id: 1,
// *           name: "ABC"
//               type: { typeTitle: 'title', type: 'abc'}
// *         } 
// *     }
// ---------------------------------------------
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass(testCases) {
  // todo: add more test cases
  return testCases.reduce((result, testCase) => {
    const answer = convertToString(testCase.inputs);
    console.info("expected: ", testCase.expected, ", answer: ", answer);
    return result && (answer === testCase.expected);
  }, true);
}


const testCases = [{
  expected: "Frank,Sinatra,1,Trader Platform",
  inputs: new Employee("Frank", "Sinatra", {
    id: 1,
    name: "Trader Platform"
  })
}];

/**
 * Main execution entry.
 */
if (doTestsPass(testCases)) {
  console.log("All tests pass!");
} else {
  console.log("There are test failures.");
}