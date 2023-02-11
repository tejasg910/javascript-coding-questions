const arr = [23, 42, 21, 2, 12, 5, 23, 1, 42, 32, 12, 23];

// find the smallest element in the array

// const sortedArray = arr.sort((a, b) => a - b);

// console.log(sortedArray[0]);

let minLength = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minLength] > arr[j]) {
      minLength = j;
    }
  }
}
console.log(arr[minLength]);
