const Marks = [10,10,10,10,10];

const getAverage = array => {
   
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
    return totalMarks / 5 / 10 * 100
}
console.log(getAverage(Marks))