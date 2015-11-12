module.exports = function split(char, str) {
  var idx = str.indexOf(char);
  if (idx === -1) {
    return [str];
  } else {
    var firstPart = str.slice(0, idx);
    var rest = str.slice(idx);
    return [firstPart].concat(rest.length === 0 ? [] : split(char, rest.slice(1)));
  }
};
