const myArray = [1,2,3,4,5,6,7,8,9];

function multiplyAndGetOddNumbers(myArray){
const list = [];

for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 3
    if(myArray[i] % 2 !== 0){
       list.push(myArray[i])
    }
}
return list 

}
    console.log(multiplyAndGetOddNumbers(myArray))

