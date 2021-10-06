
// const getHighestAndLowest = (array) => {

    // const arrayThatWillContainHighestAndLowestNumbers = [];
    // for(var i in numbers){
        
        //     arrayThatWillContainHighestAndLowestNumbers.push(numbers)
        //     if(i > numbers){
            //         return 2
            //     }
            //     else if(numbers < 2){
                //         return 78
                //     }
                
                // }
                // console.log('I\'m working')
                // return arrayThatWillContainHighestAndLowestNumbers
                // }
                // console.log(getHighestAndLowest(7))
                
                
                
const numbers = [2, 5, 9, 10, 39, 67, 45, 37, 39, 78];

const getHighestAndLowest = (array) => {
    const highestAndLowest = [];
    const sortedLIst = array.sort((a , b) =>  b + a)

    highestAndLowest.push(sortedLIst[0])
    highestAndLowest.push(sortedLIst[sortedLIst.length -1 ])

    return highestAndLowest
} 
console.log(getHighestAndLowest(numbers))


// const getHighestAndLowest=(array) => {

