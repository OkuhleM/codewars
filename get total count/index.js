const names = ["Hope", "Hope","Rafael","Landon","Landon"];

function getTotalCount(myArray, names) {
    var finalList = [];
    for(var i in myArray){
        // console.log(myArray);
        if(myArray[i] == names)
        finalList.push(myArray[i])
    }

    return finalList.length
}

console.log(getTotalCount(names,"Landon"))