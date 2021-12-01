const List = ["Hope", "Landon", "Raphael","Elizabeth","Josie"];

const getLongestString = (array) => {
    // console.log(array)
    // console.log("Hi")
    var longestString = array.sort((a,b) => a.length - b.length);
    // var results = '';
    // for (var i in array[i]) {
    //     console.log("hi");
    //     if(longestString[i].length = array[i].length);
    //     longestString[i] =+ array[i];
    //     console.log("hi");
    // }
    console.log(longestString)
    
    return longestString[longestString.length - 1];
}
console.log(getLongestString(List))