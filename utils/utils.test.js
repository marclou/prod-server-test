const expect = require('expect');

const utils = require('./utils.js');

it('Should add two numbers', () =>  {
     const test = utils.add(3, 112);

     expect(test).toBe(115).toBeA('number');
});

it('Should contains string lastname and first name', () => {
     const user = utils.setName({}, 'Marc Louvion');

     expect(user.firstName).toExist().toBeA('string');
     expect(user.lastName).toExist().toBeA('string');
});

it('it should asyn add 2 numbers', () => {
     
});
