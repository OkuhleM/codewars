const values = [1,9,4,7,-4,-8,'Tessa','A',20,6];
const halfAndReturnTotal = (array) => {
    const arrayWithNoStrings = [];
  const arrayWithOnlyPostiveNumbers = [];
  const dividedList = [];
  var sum = 0;

  for (var i in array) {
    if (array[i] < 0) {
      arrayWithOnlyPostiveNumbers.push(array[i] * -1);
    }
    if (array[i] > 0) {
      arrayWithOnlyPostiveNumbers.push(array[i]);
    }
  }

  for (var i in arrayWithOnlyPostiveNumbers) {
    if (typeof arrayWithOnlyPostiveNumbers[i] !== "string") {
      arrayWithNoStrings.push(arrayWithOnlyPostiveNumbers[i]);
    }
  }

  for (var i in arrayWithNoStrings) {
    dividedList.push(arrayWithNoStrings[i] / 2);
  }

  for (var i in dividedList) {
    sum += dividedList[i];
  }

  return sum;
}

console.log(halfAndReturnTotal(values));
