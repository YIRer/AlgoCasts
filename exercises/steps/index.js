// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, idx = 0, step = "") {
//   if (n === idx) {
//     return;
//   }

//   if (step.length === n) {
//     console.log(step);
//     return steps(n, idx + 1, "");
//   }

//   if (step.length <= idx) {
//     step += "#";
//   } else {
//     step += " ";
//   }

//   if (step.length <= n) {
//     steps(n, idx, step);
//   }
// }

function steps(n) {
  const arr = new Array(n);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = " ";
  }
  for (let step = 0; step < arr.length; step++) {
    arr[step] = "#";

    console.log(arr.join(""));
  }
}

module.exports = steps;
