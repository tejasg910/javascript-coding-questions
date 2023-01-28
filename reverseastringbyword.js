// Q2: Given a string, reverse each word in the sentence

// let str = "this is normal string";
// // let output = "siht si lamron gnirts"

// let output = "";

// let arr = str.split(" ");

// arr.forEach((item) => {
//   let newarr = item.split("");
//   let rev = newarr.reverse().join("");
//   output += `${rev} `;
// });

// console.log(output);

let str = "this is normal string";
let output = "";

let arr = str.split(" ");
let revArr = [];
arr.forEach((item) => {
  let rev = "";
  for (let i = item.length - 1; i >= 0; i--) {
    rev += item[i];
  }
  revArr.push(rev);
});

const revString = revArr.join(" ");
console.log(revString);
