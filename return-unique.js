function returnUnique(arr) {
  // we create two new arrays - one will be empty, so we can store unique numbers in it in their original order, second one will contain our input arguments as array of sub-arrays
  let newArr = [];
  let inputArr = Array.prototype.slice.call(arguments);
 
 // we iterate with for loop, going through every element of the input arrays, checking if an element with same value is already in the unique numbers array. If it is there - we jump to the next element. If it is not - we push it there and continue to the next one.
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (newArr.includes(inputArr[i][j])) {
        j++;
      } else {
        newArr.push(inputArr[i][j]);
      }
    }
  }
// we return the unique numbers array, with elements in their original order    
  return newArr;
}
