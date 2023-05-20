const checkAir = function (samples, threshold) {
  let totalDirty = 0;
  for (let element of samples) {
    if (element == "dirty") {
      totalDirty++;
    }
  }
  if (totalDirty / samples.length >= threshold) {
    return "Polluted";
  } else return "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'clean', 'clean', 'clean', 'clean', 'clean', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))