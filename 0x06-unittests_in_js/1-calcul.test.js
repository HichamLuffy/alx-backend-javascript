const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
  });
  it('should return difference of rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -1);
  });
  it('should return division of rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.2), 2);
  });
  it('should return error when dividing by zero', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0), 'Error');
  });
});
