/*
	A valid variable name contains only letters, underscores, and numbers, no numbers at the beginning or special charaters.
	This algorithm checks a string to determine if the variable name is valid.
*/

const variableName = name => {

	// Check if the first charater is a number or if the string 
	// contains any special charaters or spaces
	if(parseInt(name[0]) == name[0] || name.match(/[\s\W]/)){
		return false;
	} else {
		return true;
	}   
}

console.log(variableName("va[riable0")); // false
console.log(variableName("variable0")); // true
console.log(variableName("2w2")); // false
console.log(variableName("var_1__Int")); // true
