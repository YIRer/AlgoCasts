// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const lowerCase = str.toLowerCase();
  let result = 0;
  for (let idx = 0; idx < lowerCase.length; idx++) {
    switch (lowerCase[idx]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        result++;
      default:
        break;
    }
  }

  return result;
}

// function vowels(str) {
//   const lowerCase = str.toLowerCase();
//   const checker = ["a", "e", "i", "o", "u"];
//   let result = 0;

//   for (let character of lowerCase) {
//     if (checker.includes(character)) {
//       result += 1;
//     }
//   }

//   return result;
// }

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
