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

const printTree = (node, prefix = '', isLeft = true) => {
  if (!node) return;

  const connector = prefix ? (isLeft ? '├─ ' : '└─ ') : '';
  console.log(prefix + connector + node.value);

  const hasLeft = node.left !== undefined && node.left !== null;
  const hasRight = node.right !== undefined && node.right !== null;

  const newPrefix = prefix + (isLeft ? '│  ' : '   ');

  if (hasLeft) printTree(node.left, newPrefix, true);
  if (hasRight) printTree(node.right, newPrefix, false);
}


const find = (element, tree) => {
  if(!tree){
    throw new Error('Tree is empty')
  }
  printTree(tree)
  if(element === tree.value){
    console.log('O elemento foi encontrado: ', tree.value)
    return tree.value
  }
  tree.left && find(element, tree.left)
  tree.right && find(element, tree.right)
};

find(2, tree)