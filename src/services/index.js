const coffeeMachines = require('./coffee-machines/coffee-machines.service.js');
const coffeePods = require('./coffee_pods/coffee_pods.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = async function (app) {
  app.configure(coffeeMachines);
  app.configure(coffeePods);

  if (process.argv[2] === 'seed') {
    setTimeout(() => {
      seed(app);
    }, 5000);
  }
};

async function seed(app){
  const data = require('../../seed.json');
  try {
    const coffeeMachinesService = app.service('coffee-machines');

    const result = await coffeeMachinesService.find({ paginate: false });
    if (result.length) {
      console.log('database already initialized');
      return;
    }
    for (let item of data.machines) {
      await coffeeMachinesService.create(item);
    }
    const coffeePodsService = app.service('coffee-pods');
    for (let item of data.pods) {
      await coffeePodsService.create(item);
    }
    console.log('initializing database for first run');
  } catch (error) {
    console.log(`seeding exception: ${error}`);
  }
}
