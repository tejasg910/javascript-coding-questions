const str = "This is Javascript code and you to find max char";

let charMap = {};
let char = "";
let maxCount = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charMap[char]) {
    charMap[char]++;
  } else {
    charMap[char] = 1;
  }
}
delete charMap[" "];

for (s of str) {
  if (charMap[s] > maxCount) {
    char = s;

    maxCount = charMap[s];
  }
}

console.log(maxCount);

console.log(char);
