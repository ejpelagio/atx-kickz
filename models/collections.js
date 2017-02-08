// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var collectionsSchema = new Schema({
  // The headline is the article associate with the note
  _collectionsId: {
    type: Schema.Types.ObjectId,
    ref: "shoeId"
  },
  // date is just a string
  userId: String,

});

// Create the Note model using the noteSchema
var collections = mongoose.model("collections", collectionsSchema);

// Export the Note model
module.exports = collections;
