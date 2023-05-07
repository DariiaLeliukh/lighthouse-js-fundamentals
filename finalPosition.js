const finalPosition = function (moves) {
  let x = 0; let y = 0;
  for (let move of moves) {
    switch (move) {
    case "north":
      y++;
      break;
    case "west" :
      x--;
      break;
    case "east" :
      x++;
      break;
    case "south" :
      y--;
      break;
    }
  }
  let finalPositionArray = [];
  finalPositionArray.push(x, y);
  return finalPositionArray;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));