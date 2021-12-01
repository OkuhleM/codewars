const value = '2d4k59fl3a';

const seperateNumberAndLetter = string => {
  
const seperatedString = string.split("");
var results = [];
var letterResults = [];



for(var i in seperatedString){
    if(seperatedString[i] >= 0){
        results.push(seperatedString[i])
    }else{
        letterResults.push(seperatedString[i])
    }
    // letterResults.push(seperatedString[i] !== 0)
}

return [results, letterResults ]
}
console.log(seperateNumberAndLetter(value))