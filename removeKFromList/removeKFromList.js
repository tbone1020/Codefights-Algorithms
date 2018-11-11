/*
  Removes the number in the variable k from the linked list.
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

const removeKFromList = (l, k) => {
    let removedK = [];
    // Loop through the linked list
    while (l !== null) {
        // if the current value doesn't equal k, push it to the array
        if (l.value != k) {
            removedK.push(l.value);
        }
        // go to next list
        l = l.next;
    }
    return removedK;
}

console.log(removeKFromList(ListNode, 5)); // [3,7,8,10]
console.log(removeKFromList(ListNode, 8)); // [3,5,7,10]
console.log(removeKFromList(ListNode, 3)); // [5,7,8,10]
console.log(removeKFromList(ListNode, 11)); // [3,5,7,8,10]
