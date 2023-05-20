for (let counter = 100; counter <= 200; counter++) {
  let output = "";
  if (counter % 3 === 0) {
    output += "Loopy";
  } 
  if (counter % 4 === 0){
    output += "Lighthouse";
  } 
  console.log(output === "" ? counter : output);
}