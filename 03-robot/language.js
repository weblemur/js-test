const langModule = (Base) => class extends Base {
  constructor(settings) {
    super(settings);
    this.name = settings.name;
  }

  greet(name) {
    if (name) {
      return 'Greetings, ' + name + ' my name is ' + this.name;
    } else {
      return 'Greetings, my name is ' + this.name;
    }
  }
};

module.exports = langModule;
