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
    
    <div className="container-fluid">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
           
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
              <Link to="/Home">
                <a className="navbar-brand" href="/Home">Atx Kickz</a>
              </Link>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/MyKicks">
                    <a className="nav-link" href="/MyKicks">My Kicks <span className="sr-only">(current)</span></a>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link to="/Browse">
                    <a className="nav-link">Browse</a>
                  </Link>
                </li>
                
                <li className="nav-item">
                   <Link to="/Marketplace">
                      <a className="nav-link" href="/">Marketplace</a>
                   </Link>
                </li>

                <li className="nav-item">
                  <Link to="/NewReleases">
                    <a className="nav-link" href="/NewReleases">New Releases</a>
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>

      
        	

          {/*
              <Link to="/MyKicks">
                  <li role="presentation"><a href="#"> My Kicks</a></li>
              </Link>  

              <Link to="/Browse">
                  <li role="presentation"><a href="#"> Browse</a></li>
              </Link>
                  
              <Link to="/Marketplace">
                  <li role="presentation"><a href="#"> Marketplace</a></li>
              </Link>

              <Link to="/NewReleases"> 
                  <li role="presentation"><a href="#"> New Releases</a></li>
          	  </Link>

            */}
          
          
      

          

        {this.props.children}
      
      
    </div>      
    );
  }
});


// Export the component back for use in other files
module.exports = Nav;