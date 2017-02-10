//app.js
// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Main = require("./containers/Main");
var routes = require('./config/routes')

//Include the React Router component

// This code here allows us to render our main component (in this case Main)
//ReactDOM.render(<Main />, document.getElementById("app"));

ReactDOM.render(routes, document.getElementById('app'))






//Above is a place to consider for activating the REACt router


//Adding requires and initializing passport configuration
/*
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

//Configure Passport to use the Auth0 strategy
var strategy = new Auth0Strategy({
    domain:       process.env.atxkickz.auth0.com,
    clientID:     process.env.9LrT0OakVgTedhnC3dErYJporNcmkFRc,
    clientSecret: process.env.****************************************************************,
    callbackURL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });
*/


