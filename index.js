// create a function that recieves a set of numbers
// should multiply each number in set recieved by 3
//  the function should return a new set of odd numbers from the list of multiplied numbers


function multiplyAndReturnOddNumbers(numberSet) {
 
  const newArr = [];
  for (let i = 0; i < numberSet.length; i++) {
    const num = numberSet[i] * 3;
    newArr.push(num)
    console.log(newArr)
  } 
  return newArr
}




multiplyAndReturnOddNumbers([1, 2, 3, 4, 5]);