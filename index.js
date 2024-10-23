function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (let num of array) {
    // Calculate the complement needed to reach the target
    const complement = target - num;

    // Check if the complement is in the set
    if (seenNumbers.has(complement)) {
      return true;
    }
    // Add the current number to the set
    seenNumbers.add(num);
  }
  // If no pairs sum up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the number of elements in the array.
  Space complexity: O(n), due to the storage of seen numbers in the set.
*/

/* 
  Add your pseudocode here
  - Create an empty set to store numbers we've seen so far.
  - Iterate through the array.
  - For each number, calculate the difference between the target and the number (complement).
  - Check if the complement exists in the set:
    - If yes, return true.
    - If no, add the current number to the set.
  - If we complete the loop without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The function uses a set to keep track of numbers we have already seen.
  As we iterate through the array, we calculate the complement needed to reach the target.
  If the complement is in the set, it means we have already seen a number that can be paired with the current number to reach the target, so we return true.
  If we reach the end of the array without finding such a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 7));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10));
}

module.exports = hasTargetSum;
