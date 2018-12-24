const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject {
  constructor() {
    console.log('I am some math object');
  }
}

/* module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject; */
module.exports = {
  sum: sum,
  PI: PI,
  SomeMathObject: SomeMathObject
};
