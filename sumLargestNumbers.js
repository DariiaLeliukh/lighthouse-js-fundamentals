const sumLargestNumbers = function (data) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondLargestNumber) {
      if (data[i] > largestNumber) {
        if (largestNumber > secondLargestNumber) {
          secondLargestNumber = largestNumber;
        }
        largestNumber = data[i];
      } else {
        secondLargestNumber = data[i];
      }
    }
  }
  return largestNumber + secondLargestNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([]));
console.log(sumLargestNumbers([1]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
