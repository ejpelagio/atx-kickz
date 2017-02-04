// Require mongoose
var mongoose = require("mongoose");
// Create schema 
var Schema = mongoose.Schema;

// Create the user Schema
var marketPlaceSchema = new Schema({
  // Mongo id
  _shoeId: {
    type: Schema.Types.ObjectId,
    ref: "name"
  },
  // user data
  user: String,
  //sale data
  salePrice: Number,

});

// Create the Note model using the noteSchema
var MarketPlace = mongoose.model("marketPlace", marketPlaceSchema);

// Export the Note model
module.exports = MarketPlace;