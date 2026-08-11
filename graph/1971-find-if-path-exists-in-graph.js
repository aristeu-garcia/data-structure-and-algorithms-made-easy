/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // n is size
  // edges are paths
  // source is the step 0
  // destination is the goal

  const neighbors = {};

  for (let i = 0; i < edges.length; i = i + 1) {
    // lista de caminhos
    const [x, v] = edges[i];

    if (!neighbors[x]) neighbors[x] = [];
    if (!neighbors[v]) neighbors[v] = [];

    neighbors[x].push(v);
    neighbors[v].push(x);
  }

  console.log(neighbors);
};

validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  2
);
