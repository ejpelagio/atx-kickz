var React = require("react");
var helpers = require("../utils/helpers");
var MarketplaceCard = require("./children/MarketplaceCard");
var AllShoes = require("./children/AllShoes");
// var Gallary = require("./children/Gallary")

var Marketplace = React.createClass ({
  getInitialState: function() {
    return { allShoes: [], shoeData: "" };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.

    helpers.getShoes().then(function(response) {
      console.log(response);
      if (response !== this.state.allShoes) {
        this.setState({ allShoes: response.data });
      }
      console.log("Check state", this.state.allShoes);
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


    render: function(){
        return (
        <div>
          <h1><b>Market Place</b></h1>
          <MarketplaceCard />;
          <div className="row">
            {this.state.allShoes.map(function(search, i) {
              return (
                <div className="col-md-3">
                  <MarketplaceCard title={search.brand} image={search.cardImageURL} />
                </div>
              );
            })}
          </div>


        </div>

      )


}
});

module.exports=Marketplace;
