const marks = [{name:'Rafael',mark:20},
{name:'Hope',mark:20},
{name:'Josette',mark:1},
{name:'Landon',mark:11},
{name:'Elizabeth',mark:7}];

const overAllMark = 20;
const getAverage = (array, totalMarks) => {
    let sum = 0; 

    for(let i in array){
        sum = sum + array[i].mark
        
    }
    
    let average = sum / array.length
    let percentageAverage = average / totalMarks * 100 
    
    return percentageAverage
}



const getStudentAboveAverage = (array, totalMarks) => {
    var studentAboveAverage = []
    var classAverage = getAverage(array , totalMarks)
    for(var i in array){
        if(getAverage([array[i]] , totalMarks) > classAverage){
            studentAboveAverage.push(array[i])
        }
    }

    return studentAboveAverage
}

// console.log(getAverage(marks , 50))

// console.log(getAverage(marks , 30))

// const getStudentAboveAverage = (array, totalMarks) => {
//     var overAllAverage = getAverage(array, totalMarks);
    

//     var sortArray = array.sort((a,b)=> a.mark - b.mark);
//     let results = []
//     // var above = average
//     for(var i in sortArray){
//         if(sortArray[i] > sortArray)
//         results.push(sortArray)
         
        
//     }
//     return results
// }
console.log(getStudentAboveAverage(marks, 20))
