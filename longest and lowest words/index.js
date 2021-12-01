const string = ["The stars in the sky never shone this bright"];

const longestAndLowestWords = (string) => {
    const splittedString = string[0].split(" ")
    // console.log(splittedString) 

    const sortedString = splittedString.sort((a,b)=> a.length - b.length);
  
    return sortedString[sortedString.length-1] + " " + sortedString[0]

}

console.log(longestAndLowestWords(string));