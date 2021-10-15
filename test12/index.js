const names = ["Jake", "Jesse","Martin","Trey","Chris"];

const replaceWord = (array,position,name) => {

   array[position -1] = name
   return array

 
}
console.log(replaceWord(names,2,"Rob"));

// const names = ['thato' , 'sbu' , 'mark']
// const replaceWord = (list , position , name) => {
//   list[position - 1] = name
//   return list 
// }