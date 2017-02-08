// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var Navbar = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
    	<div className="page-header">
      <ul className="nav nav-tabs">
  	<li role="presentation" className="active"><a href="#">My Kicks</a></li>
  	<li role="presentation"><a href="#">Browse</a></li>
  	<li role="presentation"><a href="#">Marketplace</a></li>
  	<li role="presentation"><a href="#">New Releases</a></li>
	</ul>

          </div>
            
    );
  }
});


// Export the component back for use in other files
module.exports = Navbar;
