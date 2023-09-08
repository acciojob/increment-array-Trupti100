function incrementArray(arr) {
  // Create a new array to store the incremented values
  const result = [];

  // Loop through the input array and increment each element by 1
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }

  return result;
}

// Test cases
console.log(incrementArray([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 6]
console.log(incrementArray([0, 0, 0])); // Output: [1, 1, 1]
console.log(incrementArray([-2, -1, 0])); // Output: [-1, 0, 1]

