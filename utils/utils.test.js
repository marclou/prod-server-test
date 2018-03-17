const utils = require('./utils.js');

it('Should add two numbers', () =>  {
     const test = utils.add(3, 112);

     if (test !== 115) {
          throw new Error(`Should be 115, but got ${test} instead..`);
     }
});
