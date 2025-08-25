const tree = {
  left: {
    right: undefined,
    value: 2,
  },
  right: {
    value: 3,
  },
  value: 1,
};

const preOrder = (tree) => {
  console.log(tree.value);
  tree.left && preOrder(tree.left);
  tree.right && preOrder(tree.right);
};

const inOrder = (tree) => {
   tree.left && inOrder(tree.left)
   console.log(tree.value)
   tree.right && inOrder(tree.right)
};

const posOrder = (tree) => {
    tree.left && posOrder(tree.left)
    tree.right && posOrder(tree.right)
    console.log(tree.value)
}

console.log("------------------------------------------------------");
console.log("preOrder");
preOrder(tree);

console.log("------------------------------------------------------");
console.log("inOrder");
inOrder(tree);

console.log("------------------------------------------------------");
console.log("posOrder");
inOrder(tree);
