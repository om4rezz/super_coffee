// coffee-machines-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'coffeeMachines';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    sku: {type: String,required: true},
    model: {type: String,required: true, enum: ['base','premium','deluxe']},
    product_type: { type: String, required: true, enum: ['COFFEE_MACHINE_LARGE','COFFEE_MACHINE_SMALL','ESPRESSO_MACHINE'] },
    water_line_compatible: {type: Boolean, required: true}
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
