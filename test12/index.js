const names = ["Jake", "Jesse","Martin","Trey","Chris"];

const replaceWord = (array,position,names) => {

    const sortedArray = array.sort((a,b)=> a - b)
    const splicedArray = sortedArray.splice(1,5,names,"jena")
   
   

    return splicedArray[0];
}
console.log(replaceWord(names,4,"Rob"));