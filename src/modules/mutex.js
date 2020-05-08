module.exports = class Mutex {
  constructor() {
    this.IN_PROGRESS = {};
  }
  aquire(id) {
    return this.available(id) && (this.IN_PROGRESS[id] = true);
  }
  available(id) {
    return !this.IN_PROGRESS.hasOwnProperty(id);
  }
  release(id) {
    delete this.IN_PROGRESS[id];
  }
};
