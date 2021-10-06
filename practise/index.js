const items = ['java','c++', 'javaScript','c++','html','c++','css','c++','c++']
const getTotal = (array, items) => {

    var filteredArray = array.filter(elements => elements == items)
    return filteredArray.length
}
console.log(getTotal(items, 'c++'))