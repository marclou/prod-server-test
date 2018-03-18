const expect = require('expect');

const utils = require('./utils.js');

it('Should add two numbers', () =>  {
     const test = utils.add(3, 112);

     expect(test).toBe(115).toBeA('number');
});
