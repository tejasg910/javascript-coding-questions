let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];

// let arr2 = [[1, 7], [2, 6], [3, 5], [4,4]];

let arr3 = [];
let start = 0;
let mid = Math.floor((start + arr1.length) / 2);
console.log(mid);
let last = arr1.length - 1;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < arr1[last - i]) {
    let arr2 = [];
    arr2.push(arr1[i]);
    arr2.push(arr1[last - i]);
    arr3.push(arr2);
  }
  if (arr1.length % 2 !== 0 && i === mid) {
    let arr2 = [];
    arr2.push(arr1[i]);
    arr2.push(arr1[i]);
    arr3.push(arr2);
  }
}

console.log(arr3);
