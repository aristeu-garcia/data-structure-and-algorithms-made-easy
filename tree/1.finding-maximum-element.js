const tree = {
  left: {
    right: undefined,
    value: 40,
  },
  right: {
    value: 300,
  },
  value: 100,
};

const preOrderMaximumElement = (tree) => {
  if(!tree){
    throw new Error('Tree is empty')
  }
  let maxLeft = -Infinity;
  let maxRight = -Infinity;
  if (tree.left) {
    const element = preOrderMaximumElement(tree.left);
    if (element > maxLeft) {
      maxLeft = element;
    }
  }
  if (tree.right) {
    const element = preOrderMaximumElement(tree.right);
    if (element > maxRight) {
      maxRight = element;
    }
  }
  return Math.max(maxLeft, maxRight, tree.value);
};

console.log("posOrderMaximumElement");
const max = preOrderMaximumElement(tree);

console.log(max);
