// Require mongoose
var mongoose = require("mongoose");
// Create schema 
var Schema = mongoose.Schema;

// Create the user Schema
var userSchema = new Schema({
  // Mongo id
  _nameId: {
    type: Schema.Types.ObjectId,
    ref: "name"
  },
  // date is just a string
  email: String,
  // as is the noteText
  password: String,
  // phone #
  phoneNumber: Number,
  // user id
  userId: String
});

// Create the Note model using the noteSchema
var Users = mongoose.model("users", userSchema);

// Export the Note model
module.exports = Users;