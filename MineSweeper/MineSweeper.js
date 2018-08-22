/*
    Will Output 
    [[3,3,3,2], 
     [2,4,5,2], 
     [2,3,2,2]]
*/

const board = [
    [false,true,true,false], 
    [true,true,false,true], 
    [false,false,true,false]
];

const minesweeper = matrix => {
    let arr = [];
    let len = matrix[0].length + 2; // Add two to the length of the array
    matrix.push([]);
    matrix.unshift([]);

    // We can't exceed the length of the array
    // so we have to add "0" to the edges
    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i === matrix.length - 1) {
            // Fill the first and last row of the array with "0"
            for (let x = 0; x < len; x++)
                matrix[i].push(0);
        } else {
            // Add "0" to the beginning and end
            matrix[i].push(0);
            matrix[i].unshift(0);
        }
    }
    // Now that the 2D Array has "0" surrounding it
    // we have to start at matrix[1][1]
    for (let y = 1; y < matrix.length - 1; y++) {
        let innerArr = [];
        for (let x = 1; x < matrix[y].length - 1; x++) {
            let count = 0;
            // While looping through, check the surrounding array indexes for "true",
            // this indicates there is a mine
            for (let inner = -1; inner <= 1; inner++) {
                for (let outer = -1; outer <= 1; outer++) {
                    
                    // Make sure to not count the center
                    if (matrix[y + inner][x + outer] == true && !(y + inner === y && x + outer === x)) {
                        count++;
                    }
                    
                }
            }
            innerArr.push(count); // Push the total amount of mines to the array
        }
        arr.push(innerArr); // Push the array row to the final matrix
    }
    return arr;
}

console.table(minesweeper(board));

