
/*
    Converts a single string into a sentence 
    by spliting the words at the capital letters
*/

const amendTheSentence = s => {
    // Split the string at each capital letter
    let spStr = s.split(/(?:([A-Z]{1}[a-z]*))/g);
    let final = '';

    // Loop through the spStr array and if the array 
    // index is not an empty string append it to the final string 
    for (let i = 0; i < spStr.length; i++) {
        if (spStr[i] !== '') {
            // Only set the beginning word to capitalize using a ternary operator
            final += (i == 1) ? spStr[i] + " " : spStr[i].toLowerCase() + " ";
        }
    }

    // Remove any spaces from the edges
    // and convert the string to lowercase
    return final.trim();
}

let sentence = amendTheSentence("TrentIsAFrontEndEngineer");
console.log(`${sentence}`); // Outputs trent teebken is a front end engineer
