// coffee_pods-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'coffeePods';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    sku: {type: String,required: true},
    product_type: { type: String, required: true, enum: ['COFFEE_POD_LARGE','COFFEE_POD_SMALL','ESPRESSO_POD'] },
    coffee_flavor: {type: String, required: true, enum: ['COFFEE_FLAVOR_VANILLA','COFFEE_FLAVOR_CARAMEL','COFFEE_FLAVOR_PSL','COFFEE_FLAVOR_MOCHA','COFFEE_FLAVOR_HAZELNUT']},
    pack_size: {type: Number, enum: [1,3,5,7]}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
