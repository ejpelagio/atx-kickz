// Include React
var React = require("react");
var ReactRouter = require('react-router');
//Link is a REACT component so we can tell any jsx to go to a selected route
var Link = ReactRouter.Link



// This is the History component. It will be used to show a log of  recent searches.
var Nav = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
    
    <div className="container">
      
      <div className="page-header">
         
         <ul className="nav nav-tabs">
        	
              <Link to="/MyKicks">
                  <li role="presentation"><a href="#">My Kicks</a></li>
              </Link>  

              <Link to="/Browse">
                  <li role="presentation"><a href="#">Browse</a></li>
              </Link>
                  
              <Link to="/Marketplace">
                  <li role="presentation"><a href="#">Marketplace</a></li>
              </Link>

              <Link to="/NewReleases"> 
                  <li role="presentation"><a href="#">New Releases</a></li>
          	  </Link>
          
          </ul>
      
      </div>
          

        {this.props.children}
      
      
    </div>      
    );
  }
});


// Export the component back for use in other files
module.exports = Nav;