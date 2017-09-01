import React, { Component } from 'react';
import axios from 'axios';
// import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
// import SingleInput from '../components/SingleInput';
// import TextArea from '../components/TextArea';
// import Select from '../components/Select';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  componentDidMount() {
    axios('./fake_db.json').then((data) => {
      this.setState({
        ownerName: data.ownerName,
        petSelections: data.petSelections,
        selectedPets: data.selectedPets,
        ageOptions: data.ageOptions,
        ownerAgeRangeSelection: data.ownerAgeRangeSelection,
        siblingOptions: data.siblingOptions,
        siblingSelection: data.siblingSelection,
        currentPetCount: data.currentPetCount,
        description: data.description,
      });
    });
  }
  handleFormSubmit() {
    // submit logic goes here
  }
  handleClearForm() {
    // clear form logic goes here
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Pet Adoption Form</h5>

        <input type="submit" className="btn btn-primary float-right" value="Submit" />
        <button className="btn btn-link float-left" onClick={this.handleClearForm}>
          Clear form
        </button>
      </form>
    );
  }
}

export default FormContainer;
