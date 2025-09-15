const tree = {
  left: {
    right: null,
    left: null,
  },
  value: 0,
};

const insert = (element, tree) => {
  const newNode = { value: element, left: null, right: null };

  if (!tree) {
    return newNode;
  }

  const queue = [tree];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current.left) {
      current.left = newNode;
      return tree;
    } else {
      queue.push(current.left);
    }

    if (!current.right) {
      current.right = newNode;
      return tree;
    } else {
      queue.push(current.right);
    }
  }
};
insert(10, tree);
console.log(tree);
