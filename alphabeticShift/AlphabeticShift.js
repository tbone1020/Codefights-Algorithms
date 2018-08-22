/*
	This algorithm replaces each letter in the string with the next charater in the alphabet
*/

const alphabeticShift = inputString => {
	// Declare a const that contains the alphabet
	// Add "a" at the end for instances of "z"
	const alphabet = [..."abcdefghijklmnopqrstuvwxyza"];

	// Convert inputString into an array
	let spStr = [...inputString];
	
	// Loop through each index
	for(let i = 0; i < spStr.length;i++){
		// Grab the next letter in the alphabet array 
		let index = alphabet.indexOf(spStr[i]) + 1; 

		// Assign the current array index the new letter
		spStr[i] = alphabet[index];
	}

	return spStr.join('');
}

console.log(alphabeticShift("aaaabbbccd")); // bbbbcccdde
console.log(alphabeticShift("codesignal")); // dpeftjhobm