const numbers = [1, 5, 9, 4, 9, 3, 3, 5, 8, 2];

const removeDuplicates = (array) => {
    
    const sortArray = array.sort((a,b) => a - b);
    const results = [];
    for (var i in sortArray){
        if (results.indexOf(sortArray[i]) === -1){
         results.push(sortArray[i])
    }
}
    return results
}

console.log(removeDuplicates(numbers))