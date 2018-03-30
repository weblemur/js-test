const moveModule = (Base) => class extends Base {
  constructor(settings) {
    super(settings);
    this.hands = settings.hands || 2;
    this.speed = settings.speed || 20;
  }

  emote(action) {
    return '*' + this.name + ' ' + action + '*';
  }

  wave() {
    if (this.hands < 1) {
      return this.emote('wiggles around as a form of greeting');
    } else if (this.hands > 2) {
      return this.emote('waves their many hands*');
    } else {
      return this.emote('waves');
    }
  }

  run() {
    return this.emote('zooms around at ' + this.speed + ' mph');
  }
};

module.exports = moveModule;
