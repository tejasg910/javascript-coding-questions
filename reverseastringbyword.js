const str = "This is javascript code";

const output = "sihT si tpircsavaj edoc ";

const stringarr = str.split(" ");
const outputArr = [];
for (i of stringarr) {
  let str = "";
  const newstr = i;
  for (let i = newstr.length - 1; i >= 0; i--) {
    str += newstr[i];
  }
  outputArr.push(str);
}

const outputString = outputArr.join(" ");

console.log(outputString);

const outPutArr = str.split(" ").map((item) => {
  let temp = "";
  for (let i = item.length - 1; i >= 0; i--) {
    temp += item[i];
  }

  return temp;
});

const newoutput = outPutArr.join(" ");

console.log(newoutput);

const outPutString = str
  .split(" ")
  .map((item) => item.split("").reverse().join(""));

console.log(outPutString.join(" "));
