const firstDuplicate = a => {
     // Create an object to store 
     // all array elements
     const obj = {};
     // Loop through each of the array indexes
     // and check if it exists in the object
     for (let i = 0; i < a.length; i++) {

        // if the array index exists
        // then we found the first duplicate
        if (obj[a[i]]) {
          return a[i];
        } else {
           obj[a[i]] = 1;
     	}
     }
     return -1; // If no duplicate was found return -1
}

let firstDup = firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]);
console.log((firstDup != -1) ? `The first duplicate is ${firstDup}` : `There was no duplicates found`);
