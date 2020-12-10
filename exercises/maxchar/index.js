// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = "";

  str.split("").forEach((charactor) => {
    obj[charactor] = (obj[charactor] || 0) + 1;
  });

  const keys = Object.keys(obj);

  return keys.reduce((acc, cur) => {
    if (obj[acc] >= obj[cur]) {
      return (max = acc);
    } else if (obj[acc] < obj[cur]) {
      return (max = cur);
    }
  }, keys[0]);
}

module.exports = maxChar;
