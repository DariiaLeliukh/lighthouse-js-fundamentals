function range(start, end, step) {
  let outputArray = [];
  
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return outputArray;
  } else {
    let iterations = Math.round((end - start) / step + 1);
    let value = start; //first value
    for (let i = 0; i < iterations; i++) {
      outputArray.push(value);
      value += step;
    }
    return outputArray;
  }
}

console.log(range(0, 0, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));