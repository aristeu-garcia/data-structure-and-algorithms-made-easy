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

  // começar a percorrer os paths
  //{'key': [0,1,2]}
  const neighbors = {};
  for (let i = 0; i < edges.length; i = i + 1) {
    // lista de caminhos
    for (let j = 0; j < edges[i].length; j = j + 1) {
      // lista do primeiro caminho
      const current = edges[i][j];
      console.log(current)
    }
  }
//   console.log(neighbors);
};

validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  2,
);
