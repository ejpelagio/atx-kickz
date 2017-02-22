import React from 'react';
import FormsyTest from './children/FormsyTestv1'
import helpers from '../utils/helpers'


var MyKicks = React.createClass ({
	getInitialState: function() {
    return { shoeData: "" };
  },

  setShoeData: function(data) {
    this.setState({shoeData: data});
    console.log(data);
    //helpers.postShoes(this.state.shoeData).then(function(){
    //  console.log("posted test!")});
  },

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


	render(){
	    return (

	    	<div className="container bodyContainer">
	    		<div className = "row">
	        		<div className = "col-lg-6 col-md-6 col-sm-9">
		        		<FormsyTest setShoeData={this.setShoeData}/>
		        	</div>
		        </div>
	        </div>


	    	);
	}
});
module.exports = MyKicks;