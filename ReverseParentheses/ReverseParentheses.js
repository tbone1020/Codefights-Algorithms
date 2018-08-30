// A recursive function that removes all "(" and ")" then reverses the characters inbetween them

const reverseParentheses = s => {
	// Determine if the string contains any "(" or ")"
	if(s.indexOf('(') == -1) return s; 

	// We start from the middle of the string and move outward
	// Assign the position of the last "("
	let open = s.substring(s.lastIndexOf('(') + 1);

	// Starting from the position of the last "(", find the next closing parentheses
	let close = open.substring(0,open.indexOf(')'));

	// Store the string with the parentheses to use for replacing
	let org = `(${close})`;

	// Convert the extracted string into an array, Reverse the array, and then convert it back into a string
	let revStr = close
		.split('')
		.reverse()
		.join('');

	// Replace the extracted string with the reversed string.
	// Call the function again with the updated string
	return reverseParentheses(s.replace(org,revStr));
}

console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)")); // The god quick nworb xof jumps over the lazy
console.log(reverseParentheses("abc(cba)ab(bac)c")); // abcabcabcabc
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")); // apmnolkjihgfedcbq
console.log(reverseParentheses("co(de(fight)s)")); // cosfighted