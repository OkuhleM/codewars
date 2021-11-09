const values = [8, 9, 3, 7, -1, "9", -4, "8"];

const halfAndReturn = (array) => {
    const negativeNumbersToPositive = [];
    const onlyPositiveNumbers = [];
    const removeStrings = [];
    const half = []

    for (var i in array) {
        if (array[i] < 0) {
            negativeNumbersToPositive.push(array[i] * -1)
            // console.log("negative" , array[i])
        }
        if (array[i] > 0) {
            onlyPositiveNumbers.push(array[i])
            // console.log("positive" , array[i])
        }
    }

    var combinrdList = negativeNumbersToPositive.concat(onlyPositiveNumbers)
    for(var i in combinrdList){
        if(typeof combinrdList[i] !== 'string' ){
            removeStrings.push(combinrdList[i])
        }
    }
    for(var i in removeStrings){
        // if(RemoveStrings[i] / 2)
        half.push(removeStrings[i] / 2)
    }

    return half
}
console.log(halfAndReturn(values))