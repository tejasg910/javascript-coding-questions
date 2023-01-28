const input = [2, 7, 11, 4, -2];
// const output = [20, 15, 11, 18, 24];

const output = [];

input.forEach((element, index) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  sum = sum - element;
  output.push(sum);
});

console.log(output);
