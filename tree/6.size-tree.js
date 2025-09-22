const tree = {
  left: {
    right: {
      left: {
        value: 2,
      },
      right: {
        value: 1,
      },
    },
    left: {
      value: 1,
    },
  },
  value: 1,
};

const getSize = (tree) => {
  if (!tree) {
    return 0;
  }
  return 1 + getSize(tree.left) + getSize(tree.right);
};

const getSizeLoop = (tree) => {
  let size = 0;
  const listTree = [tree];

  while (listTree.length) {
    const current = listTree.pop();
    size++;

    if (current.left) {
      listTree.push(current.left);
    }
    if (current.right) {
      listTree.push(current.right);
    }
  }

  return size;
};

console.log(getSize(tree));

console.log(getSizeLoop(tree));
