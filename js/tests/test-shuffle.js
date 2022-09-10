// Broken: can't run from Node without converting everthing to CommonJS :(
const {shuffle, cards} = require('../cards');
const testAreEqual = require("./test-runner");

const testFoo = () => {
  testAreEqual(shuffle([]), []);
}
testFoo();