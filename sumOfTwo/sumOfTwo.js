const sumOfTwo = (a, b, v) => {
    // Declare an object for storing elements from 
    // array "b" for quick retrieval
    const obj = {};
    
    for (let x = 0; x < b.length; x++)
        obj[b[x]] = true;

    // Check if (v - a[i]) exists in the obj
    for (let i = 0; i < a.length; i++)
        if (obj[v - a[i]]) return true;

    return false; // Return false if no number exists
}
let numExists = sumOfTwo([1, 4, 3, 6, 10, 1, 0, 1, 6, 5], [9, 5, 6, 9, 0, 1, 2, 1, 6, 10], 8);

console.log(`The number exists: ${numExists}`);