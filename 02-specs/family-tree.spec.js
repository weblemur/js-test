/* global describe it */
const { expect } = require('chai');

const { familyTree, people } = require('../01-family-tree/family-tree');

describe('familyTree', () => {
  it('handles empty inputs', () => {
    expect(familyTree([])).to.deep.equal([]);
  });

  it('creates entries for parents', () => {
    const single = [{ name: 'John', parent: 'Sue' }];
    const result = [{ name: 'Sue', children:
      [{ name: 'John', children: [] }]
    }];
    expect(familyTree(single)).to.deep.equal(result);
  });

  it('collects children for each parent', () => {
    const siblings = [
      { name: 'John', parent: 'Sue' },
      { name: 'Jack', parent: 'Sue' }
    ];
    const result = [{ name: 'Sue', children: [
      { name: 'John', children: [] },
      { name: 'Jack', children: [] }
    ] }];
    expect(familyTree(siblings)).to.deep.equal(result);
  });

  it('nests children within children', () => {
    const descendants = [
      { name: 'John', parent: 'Sue' },
      { name: 'Jack', parent: 'John' }
    ];
    const result = [{ name: 'Sue', children: [
      { name: 'John', children: [
        { name: 'Jack', children: [] }
      ] },
    ] }];
    expect(familyTree(descendants)).to.deep.equal(result);
  });

  it('properly re-orders descendants', () => {
    const unordered = [
      { name: 'Jack', parent: 'John' },
      { name: 'John', parent: 'Sue' }
    ];
    const result = [{ name: 'Sue', children: [
      { name: 'John', children: [
        { name: 'Jack', children: [] }
      ] },
    ] }];
    expect(familyTree(unordered)).to.deep.equal(result);
  });

  it('stiches chains of descendants together', () => {
    const broken = [
      { name: 'Jack', parent: 'John' },
      { name: 'Sue', parent: 'Garth' },
      { name: 'John', parent: 'Sue' }
    ];
    const result = [{ name: 'Garth', children: [
      { name: 'Sue', children: [
        { name: 'John', children: [
          { name: 'Jack', children: [] }
        ] }
      ] }
    ] }];
    expect(familyTree(broken)).to.deep.equal(result);
  });

  it('fully maps the given list of people', () => {
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
