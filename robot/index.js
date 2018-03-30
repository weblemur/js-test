const Robot = require('./robot');

const danny = new Robot({ name: 'Danny'});

console.log(danny.greet('Roger'));
console.log(danny.execute('greet', 'Roger'));
