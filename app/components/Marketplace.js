var React = require("react");
var helpers = require("../utils/helpers");
var MarketplaceCard = require("./children/MarketplaceCard");
var AllShoes = require("./children/AllShoes");
var Gallery = require("./children/Masonry");
var DropdownButton = require("./children/DropdownFilter");
var Select = require('react-select');


var options = [
    { value: '', label: 'All' },
    { value: 'Nike', label: 'Nike' },
    { value: 'Adidas', label: 'Adidas' },
    { value: 'Bata', label: 'Bata' },
    { value: 'Puma', label: 'Puma' },
    { value: 'Converse', label: 'Converse' }
];

//function logChange(val) {
//    this.setState({filter: val});/
//    console.log("Selected: " + this.state.filter);
//}

var Marketplace = React.createClass ({
  getInitialState: function() {
    return { allShoes: [], shoeData: "", filter: "" };
  },

  logChange: function(val){
    this.setState({filter: val.value});
    //console.log("Selected: " + this.state.filter);

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

    if(this.state.filter!=prevState.filter){
       helpers.getShoesV2(this.state.filter).then(function(response) {
         console.log("shoelist: ", response.data);
         this.setState({ allShoes: response.data});
       }.bind(this));

       console.log("Selected: " + this.state.filter);
    }
  },


    render: function(){
        return (
        <div>

          <div className="row bodyContainer" style={{"padding-left":"1rem"}}>
          <div className="col-lg-3 col-md-3 col-sm-6" >
          <h5>Select Brand</h5>
          <Select
              name="form-field-name"
              value="All"
              options={options}
              onChange={this.logChange}
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
