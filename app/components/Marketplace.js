var React = require("react");
var helpers = require("../utils/helpers");
var MarketplaceCard = require("./children/MarketplaceCard");
var AllShoes = require("./children/AllShoes");
var Gallery = require("./children/Masonry");
var DropdownButton = require("./children/DropdownFilter");
var Select = require('react-select');


var options = [
    { value: 'All', label: 'All' },
    { value: 'Nike', label: 'Nike' },
    { value: 'Adidas', label: 'Adidas' },
    { value: 'Bata', label: 'Bata' }
];

function logChange(val) {
    console.log("Selected: " + val.label);
}

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
                   
          <div className="row bodyContainer">
          <div className="col-lg-3 col-md-3 col-sm-6">
          <h5>Select Brand</h5>
          <Select
              name="form-field-name"
              value="All"
              options={options}
              onChange={logChange}
          /></div></div>
          <div className="container-fluid">
            <div className="row">
              <div className="card-deck" id="cards">
                {this.state.allShoes.map(function(search, i) {
                  return (
                    <div className="col-3">
                      {/*<MarketplaceCard title={search.brand} image={search.cardImageURL} />*/}
                    </div>
                  );
                })}
              </div>


            </div>
          </div>
          <Gallery elements={this.state.allShoes}/>
        </div>



      )
    }
});

module.exports=Marketplace;
