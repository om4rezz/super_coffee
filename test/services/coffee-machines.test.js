const assert = require('assert');
const app = require('../../src/app');

describe('\'coffee-machines\' service', () => {
  it('registered the service', () => {
    const service = app.service('coffee-machines');

    assert.ok(service, 'Registered the service');
  });
});
