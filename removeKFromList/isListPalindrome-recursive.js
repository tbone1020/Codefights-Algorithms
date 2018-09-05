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


const isListPalindrome = (l, revStr = "", orig = "") => {
    if (l == null) return orig == revStr

    revStr = l.value + revStr;
    orig += l.value;

    return isListPalindrome(l = l.next, revStr, orig);
}

console.log(isListPalindrome(ListNode)); // false
console.log(isListPalindrome(ListNode1)); // true