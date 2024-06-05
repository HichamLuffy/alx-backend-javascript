const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly round and sum numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });
});
