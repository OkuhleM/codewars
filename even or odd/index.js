// function even_or_odd(number) {
//     if(number % 2 == 0) {
//       return "Even"
//     } else {
//       return "Odd"
//     }
    
//   }

// function isPalindrome(x) {
//   console.log(x);
//   return true;
// }
// isPalindrome('car')
// const numbers = [1,-4,7,12];

// function positiveSum(arr) {
// //    console.log(arr)
//     let sum = 0;
//     let results = []
//     for (let i in arr) {
//       if(arr[i] >= 0)
      
//         sum = sum + arr[i]
//       results.push(sum)
//     }
//     return results.pop()
//   }

//   console.log(positiveSum(numbers))
// const numbers = [3,9,19,4,6];

// function twoHighest(arr) {
//   let results = [];
//   let sortArray = arr.sort((a,b)=>a - b);
//   console.log(sortArray)
//   for(let i in sortArray){
//     if(sortArray[i]>arr[i])
//       results = sortArray >= sortArray[i]
      
      
//   }
//   return results
  
// }
// console.log(twoHighest(numbers))
values = [2,4,8]
function doubleInteger(arr) {
  const empty = [];
 for(var i in arr){
  //  if(arr[i] * 2)
empty.push(arr[i] * 2)
 }
 return empty
}
console.log(doubleInteger(values))