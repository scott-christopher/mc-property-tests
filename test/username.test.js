var jsv = require('jsverify');
var validate = require('../src/validate');


describe('validate', function() {

  var lower = jsv.elements('abcdefghijklmnopqrstuvwxyz'.split(''));
  var upper = jsv.elements('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  var digits = jsv.elements('0123456789'.split(''));

  var proper = jsv.tuple(
    [lower, upper, digits, lower, upper, digits, lower, upper]
  ).smap(function(charsArray) {
    return charsArray.join('');
  }, function(str) {
    return str.split('');
  });

  var tooShort = proper.smap(function(username) {
    return username.slice(-5);
  }, function(username) {
    return username;
  });

  it('ensures a username contains at least 8 characters', function() {
    jsv.assert(jsv.forall(tooShort, function(username) {
      return !validate(username);
    }));
  });

  it('ensures a username contains at least one lowercase, one uppercase and one numeric character', function() {
    jsv.assert(jsv.forall(proper, function(username) {
      return validate(username);
    }));
  });
});
