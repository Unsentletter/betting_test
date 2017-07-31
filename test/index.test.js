const expect = require('chai').expect;
const should = require('chai').should;
const index = require('../index');

console.log(index);

describe('testing dividends returned', () => {
  it('should return a winners dividend', () => {
    index.getResults(3).should.be.defined();

  })
});