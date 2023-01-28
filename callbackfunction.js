// Q1: Explain what a callback function is and provide a simple example

function addElement(arr, callback) {
  arr.push(10);

  //calling a function inside a function at the end
  callback();
}

const arr = [539, 23, 2, 2];

addElement(arr, function () {
  console.log("this is arr");
});
