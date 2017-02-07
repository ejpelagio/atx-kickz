// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {


  // This function hits our own server to retrieve the record of query results
  getShoes: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postShoes: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
