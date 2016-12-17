const assert = require('assert');
const { getActionMap } = require('./actions');


describe('App', () => {
  describe('#getActionMap()', () => {
    it('should return a map', () => {
      assert.equal(typeof getActionMap(), 'object');
    });
  });
});