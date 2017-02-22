import React from 'react';
var helpers = require("../utils/helpers");
var FormsyTest = require("./children/FormsyTestv1.js");

export default class MyKicks extends React.Component {
    render(){
		return (
		      <div className="container bodyContainer">

		        <div className="row">


		          <div className="col-md-6">
		            <FormsyTest setShoeData={this.setShoeData}/>
		          </div>

		          <div className="col-md-6">
		            
		          </div>

		        </div>

		      </div>
		    );
   }
}