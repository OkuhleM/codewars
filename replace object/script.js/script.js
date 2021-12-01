var students = [{id: 1, name: "Cesar"},
             {id: 2, name: "Monse"},
             {id: 3, name: "Jamal"},
             {id: 4, name: "Ruben"},
             {id: 5, name: "Latrelle"},

]

const replaceObj = (array, obj, id) => {
    const emptyArrayForPushingItems = [];
    
  for(var i in array){

    if (array[i].id = obj){
emptyArrayForPushingItems.push(array.id = obj)
    }
  }
  return emptyArrayForPushingItems 

}
console.log(replaceObj(students, {id:6, name: "Olivia"}, 4))