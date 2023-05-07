for (let counter = 100; counter <= 200; counter++) {
  if (counter % 4 === 0 && counter % 3 === 0){
    console.log("LoopyLighthouse");
  } else if (counter % 3 === 0) {
    console.log("Loopy");
  } else if (counter % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(counter);
  }
}