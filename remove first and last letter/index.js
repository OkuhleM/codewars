function removeChar(str) {
  const array = str.split("");
  let res = "";
  for (let i = 1; i < array.length - 1; i++) res += array[i];
  return res;
  console.log(res)
}