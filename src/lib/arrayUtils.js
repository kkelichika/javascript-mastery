// Small array helpers to practice more Jest matchers.

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function unique(arr) {
  return [...new Set(arr)];
}

function sum(arr) {
  return arr.reduce((total, n) => total + n, 0);
}

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

module.exports = { chunk, unique, sum, range };
