const Robot = require('./robot');

const danny = new Robot({ name: 'Danny', hands: 5 });

console.log(danny.fullGreeting('Roger'));
console.log(danny.program('run', 'jump'));
console.log(Robot.toBinary(danny.greet()));
