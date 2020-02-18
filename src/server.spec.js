const request = require('supertest');
const fs = require('fs');

describe('basic-server', () => {
  let server;

  beforeEach(() => {
    server = require('./server').makeServer();
  });

  afterEach(() => {
    if (server && server.close) {
      server.close();
    }
  });

  it('responds to /', (done) => {
    request('http://localhost:9000').get('/').expect(200, done);
  });

  it('response contains testText.txt contents', (done) => {
    request('http://localhost:9000').get('/')
      .expect(200, fs.readFileSync(__dirname + '/testText.txt', 'utf8'), done);
  });
});
