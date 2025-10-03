const tree = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 2,
      },
      right: {
        value: 7,
      },
    },
    right: {
      value: 15,
      left: {
        value: 12,
      },
      right: {
        value: 20,
      },
    },
  };
  

const numberLeaves = (tree) => {
  const leaveLeft = (tree.left && numberLeaves(tree.left)) || 0;
  const leaveRight = (tree.right && numberLeaves(tree.right)) || 0;
  if (!tree.right && !tree.left) {
    return 1 + leaveLeft + leaveRight;
  } else {
    return 0 + leaveLeft + leaveRight;
  }
};

console.log(numberLeaves(tree));
