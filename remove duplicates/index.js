const numbers = [2,9,23,21,9,7,3,5,2,7];

const removeDuplicates = (list) => {
const sortArray = list.sort((a,b)=> a - b);
const filteredArray = sortArray.filter((value, index)=> list.indexOf(value) === index)
// const results = []
// for(var i in sortArray){
//     sortArray[i] >= list[i] 
//     // console.log(sortArray[i])
//       results.push(sortArray[i])
// }
// return results
   return filteredArray
}
console.log(removeDuplicates(numbers))