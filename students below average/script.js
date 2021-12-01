const students = [{name: "Ashley", mark: 50}, 
{name: "Lindo", mark: 10}, 
{name: "Nteboheng", mark: 30}, 
{name: "Kabo", mark: 48}, 
{name: "Melita", mark: 15}, 
{name: "Sbongile", mark: 38} ];

const studentsBelowAverage = (array) => {
    var results = [];
    for(var i in array){
        array[i].mark = array[i].mark * 2;
        // console.log(array[i]);
        if(array[i].mark < 50)
        // console.log(array[i]);
        results.push(array[i])

    }
    return results
}

console.log(studentsBelowAverage(students))