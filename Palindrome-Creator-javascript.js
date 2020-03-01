const NOT_POSSIBLE = "Not possible";

function palindromeCreator(str) {
  let removedChar = "";

  // Check for 1 character removal
  for (i = 0; i < str.length; i++) {
    let testArr = str.split("");
    testArr.splice(i, 1);

    if (isPalindrome(testArr)) removedChar += str[i];
  }

  // If 1 character not found then look for 2 characters
  if (removedChar.length === 0) {

    // Check for 2 characters removal
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length; j++) {
        var test1 = str.split("");
        test1.splice(i, 1);
        test1.splice(j, 1);

        if (isPalindrome(test1)) {
          removedChar += str[i];
          removedChar += str[j];
        }
      }
    }
  }

  let result = removedChar.length > 0 ? removedChar : NOT_POSSIBLE;
  return result;
}

// Palindrome check function
function isPalindrome(arr) {
  return arr.join("") === arr.reverse().join("");
}

module.exports = palindromeCreator;
