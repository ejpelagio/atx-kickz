// require react
var React = require("react");


// creat button
var DropdownButton = React.createClass({
  
  handleClick: function(filter){
    console.log("Works")

  },

  render: function (){

    return(
      <div className="dropdown" style={{"padding-top":"2rem"}}>
        <div className="btn-group" id="Filter">
          <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter By
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" >Nike</li>
            <li className="dropdown-item" >Adidas</li>
            <li className="dropdown-item" >Reebok</li>
            <li className="dropdown-item" >Bata</li>

          </ul>
        </div>
      </div>
    )
  }
});

module.exports = DropdownButton
