// Small string helpers, written so they are easy to test with Jest.
// (Using CommonJS module.exports so Node/Jest can run them without extra
//  Babel config.)

function capitalize(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverse(cleaned);
}

function truncate(str, max) {
  if (str.length <= max) return str;
  return str.slice(0, max) + "...";
}

module.exports = { capitalize, reverse, isPalindrome, truncate };
