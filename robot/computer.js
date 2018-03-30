class Computer {
  static toBinary(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
  }

  execute(command, ...args) {
    if (typeof this[command] !== 'function') {
      return 'DOES NOT COMPUTE';
    } else {
      return Computer.toBinary(this[command](...args));
    }
  }
}

module.exports = Computer;
