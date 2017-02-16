// Include React
var React = require("react");

// Creating the Results component
var KicksCard = React.createClass({
  // Here we render the function
  render: function() {
    return (
     <div>
     		
     	<div className="card">
			  <img className="card-img-top" src={this.props.img} width="448" height="300" alt="Card image cap" />
			  
				  <div className="card-block">
				    <h4 className="card-title">{this.props.date}</h4>
				    <p className="card-text">{this.props.description}</p>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
			
		</div>
 	

 	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = KicksCard;