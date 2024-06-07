const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return sum of rounded numbers', function() {
    expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
  });
  it('should return difference of rounded numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-1);
  });
  it('should return division of rounded numbers', function() {
    expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
  });
  it('should return error when dividing by zero', function() {
    expect(calculateNumber('DIVIDE', 4.4, 0)).to.equal('Error');
  });
});
