const tree = {
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
  value: 1,
};
const treeEqualOne = {
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
  value: 1,
};

const diffTree = {
  left: {
    right: undefined,
    value: 2,
  },
  right: {
    value: 3,
    left: {
      right: undefined,
      value: 2,
    },
  },
  value: 1,
};

const isEqual = (firstTree, secondTree) => {
  if (!firstTree && !secondTree) return true;

  if (!firstTree || !secondTree) return false;

  if (firstTree.value !== secondTree.value) return false;

  const left = isEqual(firstTree?.left, secondTree?.left);

  const right = isEqual(firstTree?.right, secondTree?.right);
  return left && right;
};

console.log(isEqual(tree, treeEqualOne));
