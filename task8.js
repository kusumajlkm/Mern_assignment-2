function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters
    let charArray = inputString.split('');
  
    // Sort the array of characters alphabetically
    let sortedArray = charArray.sort();
  
    // Join the sorted characters back into a string
    let sortedString = sortedArray.join('');
  
    return sortedString;
  }
  
  // Example usage:
  let inputString = 'webmaster';
  let sortedResult = sortStringAlphabetically(inputString);
  console.log(sortedResult); // Output: 'abeemrstw'
  