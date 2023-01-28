let input = [3, 5, 2, 5, 7];
let output = [2, 5, 7, 3, 5];
let index = 2;
let out = [];

for (let i = index; i < input.length; i++) {
  out.push(input[i]);
}

for (let i = 0; i < index; i++) {
  out.push(input[i]);
}
console.log(out);
