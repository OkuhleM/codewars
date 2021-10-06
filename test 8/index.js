
const names = [{name: 'Troy', mark:100}, {name: 'Zed', mark: 120}, {name: 'Ashley', mark: 150}, {name: 'Thandi', mark: 140}]

const getHighestStudents = (students) => {

    // const emptyArrayToPushResults = [];
    const highest = {marks: 0}
for(var i in students){
    if(names[i].mark > highest.marks)
     highest = names[i]
    // emptyArrayToPushResults.push(highest)
    }
   return highest
}
console.log(getHighestStudents(names))


// const getHighestStudents = (students) => {
//     var sortedList = students.sort((a, b)=>  b.mark - a.mark)
//     // console.log(sortedList)
//     return sortedList[0]
// }
//  console.log(getHighestStudents(names))
