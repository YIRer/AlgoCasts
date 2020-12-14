// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let result = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         result += "#";
//       } else {
//         result += " ";
//       }
//     }
//     console.log(result);
//   }
// }

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1, "");
  }
  const mid = Math.floor((2 * n - 1) / 2);
  if (mid - row <= level.length && mid + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }
  return pyramid(n, row, level);
}

module.exports = pyramid;
