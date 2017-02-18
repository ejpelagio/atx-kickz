// include React
var React = require("react");

// Market place createClass
var MarketplaceCard = React.createClass({
render: function(){
  return(

<div className="card" style={{width: "22rem"}}>
  <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{width:"100%"}}/>
  <div className="card-block">
    <h4 className="card-title">{this.props.title}</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
);
}
});

// exports market place card
module.exports = MarketplaceCard;
