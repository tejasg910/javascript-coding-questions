// Q3: How to check if an object is an array or not? Provide some code.

let sample = [43, 2, 3, 5, 23, 5, 2, 3];
let sample2 = {};
let str = "this is";
function checkArray(arr) {
  if (Object.prototype.toString.call(arr) === "[object Array]") {
    console.log("this is array");
  } else {
    console.log("this is not array");
  }
  console.log(Object.prototype.toString.call(arr));
}

checkArray(sample);
