// Include React
var React = require("react");

// Here we include all of the sub-components
//var Form = require("../components/children/Form");
var FormsyTest = require("../components/children/FormsyTestv1.js");
var AllShoes = require("../components/children/AllShoes");
//var Results = require("../components/children/Results");
//var History = require("../components/children/History");
var Navbar = require('../components/Nav');
var helpers = require("../utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { allShoes: [], shoeData: "" };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.

    helpers.getShoes().then(function(response) {
      //console.log(response);
      if (response !== this.state.allShoes) {
        this.setState({ allShoes: response.data });
      }
    }.bind(this));
    console.log("After mount: ",this.state);
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.shoeData!=prevState.shoeData){
      helpers.postShoes(this.state.shoeData).then(function(){
        console.log("posted!");

        helpers.getShoes().then(function(response) {
          console.log("shoelist: ", response.data);
          this.setState({ allShoes: response.data});
        }.bind(this));

      }.bind(this));
    }

  },
  // This function allows childrens to update the parent.

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
