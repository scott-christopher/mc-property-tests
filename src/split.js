module.exports = function split(char, str) {
  if (str.length === 0) {
    return [];
  } else {
    var idx = str.indexOf(char);
    if (idx === -1) {
      return [str];
    } else {
      var firstPart = str.slice(0, idx);
      var rest = str.slice(idx + 1);
      return [firstPart].concat(rest.length === 0 ? [] : split(char, rest));
    }
  }
};
