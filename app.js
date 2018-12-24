// Working With Modules //
console.log('--- // Working With Modules // ---');
const tutorial = require('./tutorial');
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());


// The Events Module and EventEmitter Class //
console.log('--- // The Events Module and EventEmitter Class // ---');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log('tutorial event emitted');
  console.log(tutorial.sum(num1, num2));
});
eventEmitter.emit('tutorial', 1, 2);

const Person = require('./person');
const clara = new Person('Clara');
const pedro = new Person('Pedro');

const sayHi = (person) => {
  console.log('Hi, my name is ' + person.name);
};

[clara, pedro].forEach(person => person.on('name', sayHi));
clara.emit('name', clara);
pedro.emit('name', pedro);
