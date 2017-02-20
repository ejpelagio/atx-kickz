import React from 'react';
import helpers from '../utils/helpers'
import KicksCard from './children/KicksCard'


var newReleases = React.createClass ({
  getInitialState: function() {
    return { allShoes: [], shoeData: "" };
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















export default class NewReleases extends React.Component{
    render(){
    
	
	   
	return (
        	
               

        );
    }
}




