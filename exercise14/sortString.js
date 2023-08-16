//withSort func
function sortString(str) {
  return str.split("").sort().join("");
}

//withoutSort func
function sortString2(str) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      if (strArr[i] > strArr[j]) {
        let tempArr = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = tempArr;
      }
    }
  }
  return strArr;
}
console.log(sortString("abdce"));
console.log(sortString2("abdce"));
