var assert = require('assert');
var split = require('../src/split');
var jsv = require('jsverify');


describe('split', function() {
  function unsplit(char, parts) {
    return parts.join(char);
  }

  it('breaks a string into substrings delimited by a given character', function() {
    assert.deepEqual(split('@', 'scott@finder.com'), ['scott', 'finder.com']);
    assert.deepEqual(split('/', '/Users/scott'), ['', 'Users', 'scott']);

    jsv.assert(jsv.forall(jsv.nestring, function(str) {
      return jsv.forall(jsv.elements(str.split('')), function(char) {
        return unsplit(char, split(char, str)) === str;
      });
    }));
  });
});
