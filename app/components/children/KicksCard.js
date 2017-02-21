// Include React
var React = require("react");

// Creating the Results component
var KicksCard = React.createClass({
  // Here we render the function
  render: function() {
    return (
     <div>
     		
     	<div className="card">
			  <img className="card-img-top" src={this.props.img} width="100%"  alt="Card image cap" />
			  
				  <div className="card-block">
				    <h5 className="card-title">{this.props.date}</h5>
				    <p className="card-text">{this.props.title}</p>
				    <p className="card-text">{this.props.price}</p>
				    <p className="card-text">{this.props.colorway}</p>
				  </div>
			
		</div>
 	

 	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = KicksCard;