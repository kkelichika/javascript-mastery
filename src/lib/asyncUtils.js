// Small async helpers to test with Jest.

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// resolves with a doubled number, or rejects for negatives
function fetchDouble(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) reject(new Error("negative not allowed"));
      else resolve(n * 2);
    }, 20);
  });
}

async function getUser(id) {
  await delay(10);
  if (id === 1) return { id: 1, name: "Ada" };
  throw new Error("user not found");
}

module.exports = { delay, fetchDouble, getUser };
