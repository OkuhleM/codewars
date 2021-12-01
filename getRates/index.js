// const values = [1,2,3,4,5,6,7,8,9,10];
// const getRates = (ratingNumber) => {
// var ratings = [];
// for (let i = 0; i > ratingNumber.length; i++){
//     console.log*
//     ratings.push('*')
// }
// return ratings
// }
const getRates = (ratingNumber) => {
    var ratings = ["*","*","*","*","*","*","*","*","*","*",]
    return ratings.slice(0, ratingNumber).join("")
    
}
console.log(getRates(9))
