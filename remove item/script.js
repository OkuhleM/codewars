const list = ['Hope', 'Landon', 'Rafael', 'Josette', 'Milton'];

const removeItem = (list, itemName) => {
//     var removedItems = [];
//     for(var i in list){
//         // console.log(list[i])
//         if(list[i] !== itemName){
//             removedItems.push(list[i])
//             // console.log("I found it" , i)
//         }
//     }
const removedItems = [];

for (var i = 0; i < list.length; i++){
    // removedItems = removedItems - list[i] ;
    if(list[i] !== itemName){
        removedItems.push(list[i]);
   console.log('I\'m working')
  
}
return removedItems
}
}
console.log(removeItem(list, 'Hope'))