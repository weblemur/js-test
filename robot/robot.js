const Computer = require('./computer');
const langModule = require('./language');
const moveModule = require('./movement');

class Robot extends moveModule(langModule(Computer)) {
  fullGreeting(name) {
    return this.program(['greet', name], 'wave');
  }
}


module.exports = Robot;
