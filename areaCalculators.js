function checkNegativeNumbers(...names) {
  let hasNegativeNumber = false;
  for (let i = 0; i < names.length; i++) {
    if(names[i] < 0 ) {
      hasNegativeNumber = true;
    }
  }
  if(hasNegativeNumber){
    return undefined;
  } else return 1;
}

function calculateRectangleArea(length, width){
  if (checkNegativeNumbers(length, width) !== undefined){
    return length * width;
  } else return undefined;
}

function calculateTriangleArea(base, height){
  if (checkNegativeNumbers(base, height) !== undefined){
    return base * height / 2;
  } else return undefined;
}

function calculateCircleArea(radius){
  if (checkNegativeNumbers(radius) !== undefined){
    return Math.PI * Math.pow(radius, 2);
  } else return undefined;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
