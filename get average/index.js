const Marks = [20,10,10,10,10,1];
overAllMarks = 30

const getAverage = (array ,overAllMarks)=> {
   
    // console.log(array)
    // const sortArray = totalMarks.sort((a,b) => a - b);

    let sortArray = array.sort((a,b) => a - b);
    let totalMarks = 0; 
    let results = [];
    
    for (var i in sortArray){
       if (sortArray + sortArray[i])
        totalMarks = totalMarks + sortArray[i]
         results.push(totalMarks) 
         
    
    }
    return totalMarks/array.length/overAllMarks*100
}
console.log(getAverage(Marks, overAllMarks))