const tree = {
  value: 10,
  right: {
    value: 5,
    right: { value: 5 },
    left: { value: 15 },
  },
  left: { value: 15 },
};

const tree3 = {
  value: 7,
  left: {
    value: 3,
    left: { value: 1 },
    right: { value: 5 },
  },
  right: {
    value: 9,
    left: { value: 1 },
    right: { value: 5, left: { value: 1 }, right: { value: 5 } },
  },
};

const numberFullNodes = (tree) => {
  let currentTree = tree;
  const queue = [tree];
  let count = 0;
  while (queue.length > 0) {
    currentTree = queue.shift();
    if (currentTree?.left && currentTree?.right) {
      count++;
    }
    if (currentTree?.left) {
      queue.push(currentTree.left);
    }
    if (currentTree?.right) {
      queue.push(currentTree.right);
    }
  }
  return count;
};

console.log(numberFullNodes(tree));
console.log(numberFullNodes(tree3));
