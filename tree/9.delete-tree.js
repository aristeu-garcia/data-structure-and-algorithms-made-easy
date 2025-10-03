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


const deleteTree = (tree) =>{
    if(!tree){
        throw new error('tree is empty')
    }
    console.log("value", tree.value)
    tree.left && deleteTree(tree.left);
    tree.right && deleteTree(tree.right);
    tree.left = undefined
    tree.right = undefined
    tree.value = undefined
   
}
deleteTree(tree);

console.log(tree)