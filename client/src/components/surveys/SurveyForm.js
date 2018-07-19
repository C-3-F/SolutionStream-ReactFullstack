import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(field => {
      return (
        <Field
          key={field.name}
          label={field.label}
          component={SurveyField}
          type="text"
          name={field.name}
        />
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="btn-flat white-text red">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            next<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({ form: 'surveyForm', validate: validate, destroyOnUnmount: false })(
  SurveyForm
);
