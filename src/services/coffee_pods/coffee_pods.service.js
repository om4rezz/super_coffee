// Initializes the `coffee_pods` service on path `/coffee-pods`
const { CoffeePods } = require('./coffee_pods.class');
const createModel = require('../../models/coffee_pods.model');
const hooks = require('./coffee_pods.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/coffee-pods', new CoffeePods(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('coffee-pods');

  service.hooks(hooks);
};
