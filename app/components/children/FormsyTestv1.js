// Include React
import React, { Component } from 'react';
import FRC from 'formsy-react-components';
const { Form, Input, File, RadioGroup, Checkbox, CheckboxGroup, Select } = FRC;

var FormsyTest = React.createClass({
  // Here we describe this component's render method
  render: function() {
        
        const multiOptions = [
            {label: '10', value: '10'},
            {label: 'Option 2', value: 'two'},
            {label: 'Option 3', value: 'three'}
        ];

        const submitForm = (data) => {
        console.log(data); // eslint-disable-line no-console
        }

        return (
            <div>
                <h1>Example</h1>
                <Form onSubmit={submitForm}>
                    <Input
                        label="Brand"
                        name="brand"
                        componentRef={(component) => { this.inputRef = component; } }
                    />

                    <Input
                        label="Year"
                        name="year"
                        componentRef={(component) => { this.inputRef = component; } }
                    />
                    <Input
                        label="Model"
                        name="model"
                        componentRef={(component) => { this.inputRef = component; } }
                    />
                    <Input
                        label="Color"
                        name="color"
                        componentRef={(component) => { this.inputRef = component; } }
                    />

                    <Select
                        label="Shoe Size"
                        name="ShoeSize"
                        options={multiOptions}
                        componentRef={(component) => { this.selectRef = component; } }
                    />
                    
                    <File
                        label="Image URL"
                        name="file"
                        componentRef={(component) => { this.fileRef = component; } }
                    />
                    
                    <Checkbox
                        label="Single checkbox"
                        valueLabel="One option"
                        name="checkbox"
                        componentRef={(component) => { this.checkboxRef = component; } }
                    />
                    <Select
                        label="Select"
                        name="select"
                        options={multiOptions}
                        componentRef={(component) => { this.selectRef = component; } }
                    />
                    <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
                </Form>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = FormsyTest;
