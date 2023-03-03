//printing pattern

let n = 5;
// External loop
for (let i = 1; i <= n; i++) {
  let string = "";
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }

  console.log(string);
}
