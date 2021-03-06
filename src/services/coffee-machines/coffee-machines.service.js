// Initializes the `coffee-machines` service on path `/coffee-machines`
const { CoffeeMachines } = require('./coffee-machines.class');
const createModel = require('../../models/coffee-machines.model');
const hooks = require('./coffee-machines.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/coffee-machines', new CoffeeMachines(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('coffee-machines');

  service.hooks(hooks);
};
