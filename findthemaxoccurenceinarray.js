const arr = [3, 4, 5, 3, 2, 5, 7, 3, 6, 3, 2];

let maxElement = {};
let maxCount = 0;
let index = undefined;

arr.forEach((value, i) => {
  if (maxElement[value]) {
    maxElement[value]++;
  } else {
    maxElement[value] = 1;
  }
});

arr.forEach((value, i) => {
  if (maxElement[value] > maxCount) {
    maxCount = maxElement[value];
    index = i;
  }
});

console.log(
  `The max occurance in array is ${maxCount} and element is ${arr[index]}`
);
