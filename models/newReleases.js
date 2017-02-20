// Require mongoose
var mongoose = require("mongoose");
// Create schema 
var Schema = mongoose.Schema;

// Create the user Schema
var newReleasesSchema = new Schema({
  // Mongo id
    _shoeId: {
    type: Schema.Types.ObjectId,
    ref: "newReleases"
  },
  title: String,
  // as is the noteText
  price: Number,

  releaseDate: String, 
  
  colorway: String,
  
  img: String, 

});

// Create the Note model using the noteSchema
var NewReleases = mongoose.model("newReleases", newReleasesSchema);

// Export the Note model
module.exports = NewReleases;