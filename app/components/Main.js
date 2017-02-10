// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var FormsyTest = require("./children/FormsyTestv1.js");
var Results = require("./children/Results");
var History = require("./children/History");
var AllShoes = require("./children/AllShoes");
var Navbar = require('./children/header');
// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "",  history: [], allShoes: [], shoeData: "" };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getShoes().then(function(response) {
      console.log(response);
      if (response !== this.state.allShoes) {
        console.log("All Shoes", response.data);
        this.setState({ allShoes: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
    
    helpers.postShoes(this.state.shoeData).then(function(){
      console.log("posted!");
    });
    helpers.getShoes().then(function(response) {
      console.log("got all the shoes!");
    });

    //}.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  setShoeData: function(data) {
    this.setState({shoeData: data});
    console.log(data);
    //helpers.postShoes(this.state.shoeData).then(function(){
    //  console.log("posted test!")});
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          

          <div className="col-md-6">
            <FormsyTest setShoeData={this.setShoeData}/>
          </div>

          <div className="col-md-6">
            <AllShoes allShoes={this.state.allShoes} />
          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
