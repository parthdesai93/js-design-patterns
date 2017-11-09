//a basic module patter

let testModule = ( () => {
  let counter = 0;
  let incrementCounter = () => counter++;
  let decrementCounter = () => counter--;
  let resetCounter = () => counter = 0;
  let count = () => counter;
  
  return {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
    resetCounter: resetCounter,
    count: count
  }
})();


testModule.incrementCounter();
testModule.incrementCounter();
testModule.decrementCounter();
testModule.resetCounter();

