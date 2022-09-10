export const testAreEqual = (actual, expected) => {
  
  if (actual != expected) {
    throw `Test failed! ${actual} is not ${expected}.`;
  }

}