const assert = require('assert');
const app = require('../../src/app');

describe('\'coffee_pods\' service', () => {
  it('registered the service', () => {
    const service = app.service('coffee-pods');

    assert.ok(service, 'Registered the service');
  });
});
