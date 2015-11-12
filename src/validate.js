module.exports = function validate(username) {
  return username.length >= 8 &&
      /[a-z]/.test(username) &&
      /[A-Z]/.test(username) &&
      /[0-9]/.test(username);
};
