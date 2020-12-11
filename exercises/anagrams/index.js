// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function convertMap(str) {
  const map = {};
  const convertedStr = str.replace(/[w]/g, "").toLowerCase().split("");

  for (let key of convertedStr) {
    map[key] = (map[key] || 0) + 1;
  }

  return map;
}

function anagrams(stringA, stringB) {
  const strAMap = convertMap(stringA);
  const strBMap = convertMap(stringB);
  const strAMapKeys = Object.keys(strAMap);
  const strBMapKeys = Object.keys(strBMap);

  if (strAMapKeys.length !== strBMapKeys.length) {
    return false;
  }

  return strAMapKeys.every((key) => {
    return strAMap[key] === strBMap[key];
  });
}

module.exports = anagrams;
