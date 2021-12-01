const firstList = [3, 9, 1, 5];
const secondList = [6, 7, 8, 3, 2, 9];

const getTotal = (list1, list2) => {
    // var results = [];
    var sum = 0;
    var combinedList = list1.concat(list2);
   
    for(var i = 0; i < combinedList.length; i++){
        sum = sum + combinedList[i]
        
    }
    return sum
}
console.log(getTotal(firstList, secondList ))