function mincost(arr) {
  let cost = 0;

  // Keep connecting ropes until only one remains
  while (arr.length > 1) {
    // Sort the array to get the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take out the two smallest
    let first = arr.shift();
    let second = arr.shift();

    // Combine them and add the cost
    let newRope = first + second;
    cost += newRope;

    // Add the new rope back to the array
    arr.push(newRope);
  }

  return cost;
}

module.exports = mincost;
