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

const findDiameter = (tree) => {
  let currentTree = tree;

  const result1 = (currentTree?.left && calculateHeight(currentTree.left)) || 0;
  const result2 =
    (currentTree?.right && calculateHeight(currentTree.right)) || 0;

  console.log("aaaaaa", result1 + result2);
};

//TODO : Aplicar a soma em todos os nós	⚠️ Falta percorrer
// todo: Manter o maior valor global (diâmetro real)	⚠️ Falta implementar

const calculateHeight = (tree) => {
  console.log(tree.value);
  const result = tree?.left && calculateHeight(tree?.left) + 1;
  const resultRight = tree?.right && calculateHeight(tree?.right) + 1;

  return Math.max(result, resultRight) || 0;
};

findDiameter(tree2);
