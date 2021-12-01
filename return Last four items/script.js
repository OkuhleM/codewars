// const numbers = [3,78,23,09,89,43,54,22,12,52];

// const returnLastFourItems = (array) => {
    
//     const slicedArray = array.slice(0,4);
//     const secondSlice = array.slice(-4);
//     const bothFirstFourAndLastFour = slicedArray.concat(secondSlice)

    
//         return bothFirstFourAndLastFour
    
    
// }
// console.log(returnLastFourItems(numbers))
const numbers = "1,2,3,4";
function RemoveCharacter(arr){
    const array = arr.split("");
      var emptyStr = '';
      for(let i = 0; array.length -1 ; i++){
        emptyStr = emptyStr + " " + array[i]
      
      }
    return emptyStr
    }
    console.log(RemoveCharacter(numbers));