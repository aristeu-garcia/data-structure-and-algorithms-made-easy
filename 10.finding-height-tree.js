const tree = {
  value: 1,
  right: {
    value: 3,
  },
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
};

const height = (tree) => {
  if (!tree) {
    return 0
  }
  const heightLeft = tree.left && height(tree.left) || 0;
  const heightRight = tree.right && height(tree.right) || 0;

  if (heightLeft > (heightRight)) {
    return heightLeft + 1;
  }
  return heightRight + 1;
};

console.log(height(tree));
