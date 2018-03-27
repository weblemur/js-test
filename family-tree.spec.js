/* global describe it */
const { expect } = require('chai');

const { familyTree, people } = require('./family-tree');

describe('familyTree', () => {
  it('handles empty inputs', () => {
    expect(familyTree([])).to.deep.equal([]);
  });

  xit('fully maps the given list of people', () => {
    const result = [
      { name: 'Sue', children: [
        { name: 'John', children: [] },
        { name: 'Garth', children: []}
      ]},
      { name: 'Sally', children: [
        { name: 'Jill', children: [] }
      ]},
      { name: 'Alejandro', children: [
        { name: 'Steve', children: [
          { name: 'Jack', children: [
            { name: 'Wayne', children: [] },
            { name: 'Twinkle', children: [] }
          ]}
        ]},
        { name: 'Peter', children: [] }
      ]}
    ];
    expect(familyTree(people)).to.deep.equal(result);
  });
});
