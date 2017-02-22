// require react
var React = require("react");


// creat button
var DropdownButton = React.createClass({
  render: function (){

    return(
<div className="dropdown">
<div className="btn-group" id="Filter">
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter By
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Nike</a>
    <a className="dropdown-item" href="#">Adidas</a>
    <a className="dropdown-item" href="#">Reebok</a>
    <a className="dropdown-item" href="#">Bata</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Separated link</a>
  </div>
</div>
</div>
    )
  }
});

module.exports = DropdownButton
