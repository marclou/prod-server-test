const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
     it('Should return my name and a status that is 200', (done) => {
          request(app)
               .get('/users')
               .expect(200)
               .expect((res) => {
                    expect(res.body).toInclude({
                         name: 'Marc',
                         age: 24
                    });
               })
               .end(done);
     });

});
