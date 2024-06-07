const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });
});
