// const names = ["Rafael", "Alex", "Chris" ,"Rafael", "Rooster", "Chris", "Rafael", "Musa", "Banana", "Kevin"];

// const getTotal = (array, names) => {
//     var sum = 0
//     for(var i in array) {
//         if(array[i] === names){
//           sum = sum + 1
//         }
//     }
//     return sum 
// }





// console.log(getTotal(names, 'Chris'))

const names2 = ["Rafael", "Alex", "Chris" ,"Rafael", "Rooster", "Chris", "Rafael", "Musa", "Banana"];
 const getTotal1 = (array, names2) => {
     var filteredArray = array.filter(elements => elements === names2)
     return filteredArray.length
 }
 console.log(getTotal1(names2, 'Chris'))