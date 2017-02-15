// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var AllShoes = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Shoe Submissions</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.allShoes.map(function(search, i) {
            return (
              <div><p key={i}>{search.year} {search.brand} - {search.model}</p><a href={search.imageURL}>Link</a></div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AllShoes;
