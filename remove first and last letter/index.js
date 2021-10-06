// function removeChar(str) {
//   const array = str.split("");
//   let res = "";
//   for (let i = 1; i < array.length - 1; i++) res += array[i];
//   return res;
//   console.log(res)
// }
// console.log(removeChar('Chris'));

function removeCharacter(string) {
  let characters = string.split('');
  let results = '';
  for (var i = 1; i < characters.length - 1; i++)
  results += characters[i];
  return results;
  console.log(results)
  
}
console.log(removeCharacter('Peter'))

