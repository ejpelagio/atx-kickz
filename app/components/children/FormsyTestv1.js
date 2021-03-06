// Include React
import React, { Component } from 'react';
import FRC from 'formsy-react-components';
const { Form, Input, File, RadioGroup, Checkbox, CheckboxGroup, Select, Textarea } = FRC;

var FormsyTest = React.createClass({
  // Here we describe this component's render method
  getInitialState: function() {
    return {
      imageURL: "",
      imagePath: "",
      transformURL: "http://res.cloudinary.com/dawscxdsi/image/upload/c_limit,w_400/"
    };
  },

  componentWillMount: function() {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/global/all.js";
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);



    },

  handleUpload: function() {
    cloudinary.openUploadWidget({ cloud_name: 'dawscxdsi', upload_preset: 'pjmooj37'}, 
      function(error, result) { 
        console.log(this.state.transformURL+result[0].path);
        console.log(result[0].secure_url);
        this.setState({imageURL: result[0].secure_url, pathName: result[0].path, transformURL: this.state.transformURL+result[0].path});
       }.bind(this));
  }, 

  render: function() {
        
        const multiOptions = [
            {label: '8', value: '8'},
            {label: '9', value: '9'},
            {label: '10', value: '10'},
            {label: '11', value: '11'},
            {label: '12', value: '12'}
        ];

        const submitForm = (data) => {
        console.log(this.state.imageURL);
        data.imageURL=this.state.imageURL;
        data.transformURL=this.state.transformURL;
        this.props.setShoeData(data);
        console.log(data); 
        }

        return (
            <div>
                <h2>Upload your kicks</h2>
                <Form onSubmit={submitForm}>
                    <Input
                        label="Brand"
                        name="brand"
                        
                    />

                    <Input
                        label="Year"
                        name="year"
                        
                    />
                    <Input
                        label="Model"
                        name="model"
                        
                    />
                    <Input
                        label="Color"
                        name="color"
                        
                    />

                    <Select
                        label="Shoe Size"
                        name="size"
                        options={multiOptions}
                     />

                     <Input
                        label="Selling Price ($)"
                        name="sellingPrice"
                     
                    />

                    <Input
                        label="Zip Code"
                        name="zipCode"
                     
                    />
                    <fieldset>
                        <legend>Description/Comments</legend>
                        <Textarea
                            rows={3}
                            cols={20}
                            name="comments"
                            label="Comments"
                            
                        />
                    </fieldset>



                    
                    <div className="container">
                    <button type="button" className="btn btn-default" onClick={this.handleUpload} style={{marginRight:"1em"}}>Upload</button> 
                    <span>  </span>
                                        
                    <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
                    </div>
                </Form>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = FormsyTest;
