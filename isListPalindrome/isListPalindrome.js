/*
  Checks whether the linked list is palindrome by looping through each list and comparing the original array to it's self reversed
*/

ListNode = {
    value: 3,
    next: {
        value: 5,
        next: {
            value: 7,
            next: {
                value: 8,
                next: {
                    value: 10,
                    next: null
                }
            },
        },
    },
}

ListNode1 = {
    value: 0,
    next: {
        value: 1,
        next: {
            value: 1,
            next: {
                value: 0,
                next: null
            },
        },
    },
}


const isListPalindrome = (l, k) => {
    let revStr = ""; // For reversed linked list
    let orig = "";  // For the original string
    while (l) {
        revStr = l.value + revStr; // prepend the value
        orig += l.value; // append the value
        l = l.next;
    }
    return orig == revStr; // check if both strings equal each other
}

console.log(isListPalindrome(ListNode)); // false
console.log(isListPalindrome(ListNode1)); // true