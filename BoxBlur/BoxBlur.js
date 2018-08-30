/*
    The Box blur algorithm takes a 2D matrix and returns another 2D array containing the average of each
    3x3 block.

    E.g [[36,0,18,9], 
         [27,54,9,0], 
         [81,63,72,45]]
    
    will become [[40,30]]

*/

const matrix = [
  [36, 0, 18, 9, 9, 45, 27],
  [27, 0, 54, 9, 0, 63, 90],
  [81, 63, 72, 45, 18, 27, 0],
  [0, 0, 9, 81, 27, 18, 45],
  [45, 45, 27, 27, 90, 81, 72],
  [45, 18, 9, 0, 9, 18, 45],
  [27, 81, 36, 63, 63, 72, 81]
];

const boxBlur = image => {
    let newArr = [[]];
    let y = 1;
    let x = 1;
    let arrCount = 0;

    while (true) {
        // Grab all surrounding array values including the current x & y value.
        let total = image[y - 1][x - 1] + image[y - 1][x] + image[y - 1][x + 1] + image[y][x - 1] + image[y][x] + image[y][x + 1] + image[y + 1][x - 1] + image[y + 1][x] + image[y + 1][x + 1];

        // Divide the total by 9 to get the average
        newArr[arrCount].push(Math.floor(total / 9));

        // Break the loop when the value of x and y arrive 
        // at the last 3x3 array block
        if (x === image[y].length - 2 && y === image.length - 2)
            break;

        /* 
          When the last 3x3 block in the current row is reached, 
          break to the next line and create a new array inside newArr. 
        */
        if (x === image[y].length - 2) {
            y++;
            x = 1;
            newArr[++arrCount] = new Array();
        } else {
            x++;
        }
    }
    return newArr;
}

console.table(boxBlur(matrix));