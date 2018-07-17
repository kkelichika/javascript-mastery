// A module that depends on a "sender" (e.g. something that sends emails).
// In tests I do not want to really send anything, so I pass in a fake
// sender - this is dependency injection, which makes mocking easy.

function notifyUser(user, message, sender) {
  if (!user.email) {
    throw new Error("user has no email");
  }
  // call the injected sender instead of a hard-coded real one
  sender(user.email, message);
  return true;
}

module.exports = { notifyUser };
