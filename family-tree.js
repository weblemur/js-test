// Given the following flat list of people, write code that will generate an
// array of people with their children as properties of themselves.
// Example output format:
// [
//  { name: ‘Sue’, children: [
//    { name: 'John', children:[] },
//    { name: 'Garth', children: [] }
//  ]}, {<another person>}
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


const familyTree = list => {
  const tree = [];
  list.forEach(person => {
    tree.push({ name: person.parent, children: [{ name: person.name, children: [] }] });
  });
  return tree;
};

// const findPerson = (tree, name) =>
//   tree.any(person =>
//     person.name === name || findPerson(person.children, name)
//   );


module.exports = {
  familyTree,
  people,
};
