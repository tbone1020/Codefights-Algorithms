/*
	A recursive Fibonacci algorithm. To reduce the time complexity and overall speed, we use what 
	is called memoization which stores calculated values so we can use them later.
*/

const climbingStairs = (n, memo) => {
    // Determine if the memo object exists
    memo = memo || {}

    // Check if the memo object contains the calculated value
    if (memo[n])
        return memo[n];

    // Don't need to calulate when n == 1
    if (n <= 1)
        return 1;

    // Calculate the next Fibonacci number 
    return memo[n] = climbingStairs(n - 1, memo) + climbingStairs(n - 2, memo);
}

console.log(climbingStairs(28)); // 514229
console.log(climbingStairs(2)); // 2
console.log(climbingStairs(13)); // 377
console.log(climbingStairs(42)); // 433494437
