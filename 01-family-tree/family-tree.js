// Given the following flat list of people, write code that will generate an
// array of people with their children as properties of themselves.
// Example output format:
// [
//  { name: ‘Sue’, children: [
//    { name: 'John', children:[] },
//    { name: 'Garth', children: [] }
//  ]},
//  {<another person>},
//  ...etc
// ]

const people = [
  { name: 'John', parent: 'Sue' },
  { name: 'Jack', parent: 'Steve' },
  { name: 'Jill', parent: 'Sally' },
  { name: 'Wayne', parent: 'Jack' },
  { name: 'Twinkle', parent: 'Jack' },
  { name: 'Garth', parent: 'Sue' },
  { name: 'Steve', parent: 'Alejandro' },
  { name: 'Peter', parent: 'Alejandro' },
];


const findPerson = (tree, name) => {
  for (let i=0; i<tree.length; i++) {
    let person = tree[i];
    if (person.name === name) return person;
    const child = findPerson(person.children, name);
    if (child) return child;
  }
  return null;
};

const familyTree = list => {
  const tree = [];
  list.forEach(person => {
    const currentIdx = tree.findIndex(p => p.name === person.name);
    const [ newPerson ] = currentIdx !== -1 ?
      tree.splice(currentIdx, 1) :
      [{ name: person.name, children: [] }];
    const parent = findPerson(tree, person.parent);
    if (parent) parent.children.push(newPerson);
    else tree.push({ name: person.parent, children: [newPerson] });
  });
  return tree;
};


module.exports = {
  familyTree,
  people,
};
