// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {

  runQuery: function(location) {

  getNewReleases: function(){

    return axios.get("/models");
  },


  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function hits our own server to retrieve the record of query results
  getShoes: function() {
    return axios.get("/models");
  },

  // This function posts new searches to our database.
  postShoes: function(shoeData) {
    return axios.post("/models", shoeData);
  }
};

// We export the API helper
module.exports = helper;
