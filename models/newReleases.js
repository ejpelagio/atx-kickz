// Require mongoose
var mongoose = require("mongoose");
// Create schema 
var Schema = mongoose.Schema;

// Create the user Schema
var newReleasesSchema = new Schema({
  // Mongo id
  _shoeId: {
    type: Schema.Types.ObjectId,
    ref: "shoeId"
  },

  // as is the noteText
  releaseDate: String, 
  
  img: String, 
  
  description: String,


});

// Create the Note model using the noteSchema
var NewReleases = mongoose.model("newReleases", newReleasesSchema);

// Export the Note model
module.exports = NewReleases;