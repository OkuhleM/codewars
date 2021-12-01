const marks = [20, 60, 50, 20, 150];


const GetTotalMarks = (marks) => {
   var sum = 0
   for(var i = 0; i < marks.length; i++){
      
      sum = sum + marks[i];
   }
   
   
  return sum
}

console.log(GetTotalMarks(marks))

// const marks = [20, 60, 50, 20, 150];


// const GetTotalMarks = (marks) => {
//     marks.reduce(currentValue, currentIndex) 
//       currentValue + currentIndex;

   
// }
// console.log(GetTotalMarks(marks))