// Include React
var React = require("react");
var ReactRouter = require('react-router');
//Link is a REACT component so we can tell any jsx to go to a selected route
var Link = ReactRouter.Link;



// This is the History component. It will be used to show a log of  recent searches.
var Nav = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
    <div>  
    <section id="menu-0">
          <nav className="navbar navbar-dropdown bg-color navbar-fixed-top">
            <div className="container">
              <div className="mbr-table">
                <div className="mbr-table-cell">
                  <div className="navbar-brand">
                    <a href="https://atxkicks.heroku.com" className="navbar-logo"><img src="assets/images/shoe-iconv4-162x128.png" alt="Mobirise" /></a>
                     <Link to="/Home">
                    <a className="navbar-caption" href="/Home">ATX-KICKS</a>
                    </Link>
                  </div>
                </div>
                <div className="mbr-table-cell">
                  <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                    <div className="hamburger-icon" />
                  </button>
                  <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                    <li className="nav-item">
                      <Link to="/MyKicks">
                        <a className="nav-link link" href="/MyKicks">MY KICKS</a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown open">
                      <Link to="/Marketplace">
                        <a className="nav-link link" href="/Marketplace" aria-expanded="true">BROWSE</a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown open">
                      <Link to="/NewReleases">
                        <a className="nav-link link" href="/NewReleases" aria-expanded="true">NEW RELEASES</a>
                      </Link>
                    </li>
                  </ul>
                  <button hidden className="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                    <div className="close-icon" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </section>
        
        {this.props.children}
</div>
       
    );
  }
});


// Export the component back for use in other files
module.exports = Nav;