// require react
var React = require("react");


// creat button
var DropdownButton = React.createClass({
  render: function (){

    return(
<div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    )
  }
});

module.exports = DropdownButton
