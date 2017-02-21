var React = require("react");
var helpers = require("../utils/helpers");
var KicksCard = require("./children/KicksCard");



var NewReleases = React.createClass ({
  getInitialState: function() {
    return { allNewShoes: [] };
  },
// The moment the page renders get the History
 componentDidMount: function() {
    // Get the latest history.
    helpers.getNewReleases().then(function(response) {
      console.log(response);
      if (response !== this.state.allNewShoes) {
        this.setState({ allNewShoes: response.data });
      }
      console.log("Check state", this.state.allNewShoes);
    }.bind(this));
    console.log("After mount: ",this.state);
  },


render: function(){
  return (
        <div>
            
            <h1><b>New Releases</b></h1>
            <div className="container-fluid">
                  <div className="row">
                 
                      {this.state.allNewShoes.map(function(find, i) {
                        return (
                          <div className="col-sm-4 col-md-4 col-lg-3">
                            <KicksCard title={find.title} date={find.releaseDate} img={find.img} price={find.price} color={find.colorway} />
                          </div>
                        );
                      })}
                             
                    </div>
                </div>
          ]
        </div>
        )
}
});


module.exports= NewReleases;