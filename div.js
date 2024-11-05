// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

function concat(...args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        result = result.concat(args[i]);
    }
    return result;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1], [2], [3], [4], [5], [6], [7])); // [1, 2, 3, 4, 5, 6, 7]


// Andy was here

// Andy was here again!