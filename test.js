const { expect } = require('chai');
const { getActionMap } = require('./actions');


describe('App', () => {
  describe('#getActionMap()', () => {
    it('should return a map', () => {
      expect(getActionMap()).to.be.an.instanceOf(Map);
    });
  });
});
