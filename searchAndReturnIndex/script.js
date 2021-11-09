// create a function that searches and returns an index

const list = ['Rafael', 'Hope', 'Milton', 'Josette', 'Landon', 'Caleb', 'Lizzie']
const searchAndReturnIndex = (list, searchText) => {
    
for (let i in list){
   
    if (list[i] == searchText){
        return i
    } 
    
}

}

console.log(searchAndReturnIndex(list, 'Josette'))