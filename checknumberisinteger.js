// Q5: How would you check if a number is an integer?

let num = 322;
let float = 32.32;
// console.log(num % 1);

function checkInt(int) {
  if (int % 1 === 0) {
    console.log("given value is an integer");
  } else {
    console.log("given value is not an integer");
  }
}
checkInt(num);
checkInt(float);
