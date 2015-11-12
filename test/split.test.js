var assert = require('assert');
var split = require('../src/split');


describe('split', function() {
  it('breaks a string into substrings delimited by a given character', function() {
    assert.deepEqual(split('@', 'scott@finder.com'), ['scott', 'finder.com']);
    assert.deepEqual(split('/', '/Users/scott'), ['', 'Users', 'scott']);
  });
});
