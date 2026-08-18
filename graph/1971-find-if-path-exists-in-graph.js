/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const neighbors = {};

  for (let i = 0; i < edges.length; i = i + 1) {
    // lista de caminhosd
    const [x, v] = edges[i];

    if (!neighbors[x]) neighbors[x] = [];
    if (!neighbors[v]) neighbors[v] = [];

    neighbors[x].push(v);
    neighbors[v].push(x);
  }

  // da origem, eu consigo ir pra onde?
  let nextNeighbornKey = source;
  return findPaths(neighbors[nextNeighbornKey], destination);
};

const findPaths = (nextNeighbors, destination) => {
  const [path1, path2] = nextNeighbors;
  if (path1 === destination || path2 === destination) return true;
  findPaths(neighbors[path1], destination);
  findPaths(neighbors[path2], destination);
};

const result = validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],

  0,
  2,
);

console.log(result);
