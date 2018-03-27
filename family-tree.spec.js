/* global describe it */
const { expect } = require('chai');

const { familyTree } = require('./family-tree');

describe('familyTree', () => {
  it('handles empty inputs', () => {
    expect(familyTree([])).to.deep.equal([]);
  });
});
