let arr = [43, 23, 2, 23, 2];

// method 1

arr.length = 0;
console.log(arr);

// method 2
arr = [];
console.log(arr);

// method 3

arr.splice(0, arr.length);
console.log(arr);

// method 4
while (arr.length) {
  arr.pop();
}
console.log(arr);

// method 5
let emptryarr = [];
arr = emptryarr;
