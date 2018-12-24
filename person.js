const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

module.exports = Person;
