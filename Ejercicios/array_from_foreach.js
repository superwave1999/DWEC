console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);