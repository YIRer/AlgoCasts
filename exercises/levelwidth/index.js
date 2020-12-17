// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "s"];
  const levelWidth = [0];
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      levelWidth.push(0);
      arr.push("s");
    } else {
      levelWidth[levelWidth.length - 1]++;
      arr.push(...node.children);
    }
  }

  return levelWidth;
}

module.exports = levelWidth;
