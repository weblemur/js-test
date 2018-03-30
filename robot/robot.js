const Computer = require('./computer');
const langModule = require('./language');
const moveModule = require('./movement');

class Robot extends moveModule(langModule(Computer)) {
  fullGreeting(name) {
    return this.greet(name) + '\n' + this.wave();
  }
}


module.exports = Robot;
