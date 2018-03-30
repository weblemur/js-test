class Computer {
  constructor(name) {
    this.name = name || 'Computer-bot 9000';
  }

  static toBinary(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
  }

  program(...commands) {
    return commands.map(command =>
      Array.isArray(command) ?
        this.execute(...command) :
        this.execute(command)
    ).join('\n');
  }

  execute(command, ...args) {
    if (typeof this[command] !== 'function') {
      return '***DOES NOT COMPUTE***';
    } else {
      return this[command](...args);
    }
  }
}

module.exports = Computer;
