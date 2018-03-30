const Computer = require('./computer');
const langModule = require('./language');

class Robot extends langModule(Computer) {
}


module.exports = Robot;
