const tree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 2,
      left: { value: 1 },
      right: { value: 3 },
    },
    right: {
      value: 7,
      right: { value: 8 },
    },
  },
  right: {
    value: 15,
    left: { value: 12 },
    right: {
      value: 20,
      left: { value: 18 },
      right: { value: 25 },
    },
  },
};

const tree2 = {
  value: 50,
  left: {
    value: 30,
    left: {
      value: 20,
      left: { value: 10 },
      right: {
        value: 25,
        left: { value: 22 },
      },
    },
    right: {
      value: 40,
      right: { value: 45 },
    },
  },
  right: {
    value: 70,
    left: {
      value: 60,
      right: { value: 65 },
    },
    right: {
      value: 80,
      right: {
        value: 90,
        left: { value: 85 },
      },
    },
  },
};

const tree3 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
  },
};
let diameter = 0;
const findDiameter = (tree) => {
  let currentTree = tree;

  const result = calculateHeight(currentTree)
  // const resultRight = currentTree?.right && calculateHeight(currentTree.right)
  // diameter = Math.max(diameter, resultLeft + resultRight);

  console.log("aaaaaa", diameter);
};

const calculateHeight = (tree) => {
  console.log(tree.value);
  const result = (tree?.left && calculateHeight(tree?.left)) || 0;
  const resultRight = (tree?.right && calculateHeight(tree?.right)) || 0;
  diameter = Math.max(diameter, result + resultRight)
  return Math.max(result, resultRight) + 1;
};

findDiameter(tree3);
