// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var shoesSchema = new Schema({
  // The headline is the article associate with the note
  _shoeId: {
    type: Schema.Types.ObjectId,
    ref: "shoes"
  },
  // date is just a string
  brand: String,
  // as is the noteText
  year: Number,

  model: String,

  color: String,

  size: Number,

  condition: String,

  imageURL: String

});

// Create the Note model using the noteSchema
var Shoes = mongoose.model("Shoes", shoesSchema);

// Export the Note model
module.exports = Shoes;
