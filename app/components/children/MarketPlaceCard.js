// include React
var React = require("react");

// Market place createClass
var MarketplaceCard = React.createClass({
render: function(){
  var price = null;
  if(this.props.price){

  	price = <span style={{"position":"absolute", top:"1rem", right:"1rem", color:"white", background: "rgba(0,0,0,0.8)", padding: ".25rem"}}><h5>${this.props.price}</h5></span>;
  }

  return(

<div className="card" style={{width: "20rem"}}>
  <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{width:"100%"}}/>
  {price}
  <div className="card-block">
    <h4 className="card-title">{this.props.title}</h4>

    <p className="card-text">{this.props.comments} Example text goes here</p>
    

  </div>
</div>

);
}
});

// exports market place card
module.exports = MarketplaceCard;
