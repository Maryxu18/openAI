import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../redux/actions';
import classNames from 'classnames';
import { enginesData } from '../constants/AIEngine';

function Form({ error, actions }) {
  const [prompt, setPrompt] = useState('');
  const [engine, setEngine] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(enginesData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (prompt === '' || engine === '') {
      return;
    }
    resetForm();
    actions.getResponse(prompt, engine);
    if (error) {
      //TODO: error handling
      setErrorMessage(error);
    }
  };

  const resetForm = () => {
    setPrompt('');
    setEngine('');
    setErrorMessage('');
    setIsSubmit(false);
  };

  return (
    <div className="mb-3">
      <form name="responseForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"> Enter a Prompt</label>{' '}
          <textarea
            value={prompt}
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
            rows={3}
            cols={30}
            form="responseForm"
            className={classNames('form-control', {
              'is-invalid': prompt === '' && isSubmit
            })}
            required></textarea>
          <div className="invalid-feedback">Please enter a prompt in the textarea</div>
        </div>
        <div className="mb-3">
          <label className="form-label"> Select an AI Engine</label>{' '}
          <select
            value={engine}
            onChange={(event) => {
              setEngine(event.target.value);
            }}
            className={classNames('form-select', {
              'is-invalid': engine === '' && isSubmit
            })}
            aria-label="Default select example">
            <option value="" selected disabled hidden>
              Select an Option
            </option>
            <option value="text-ada-001">Ada (Fastest)</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-curie-001">Curie</option>
            <option value="text-davinci-002">Davinci (Most Powerful)</option>
          </select>
          <div className="invalid-feedback">Please select an AI engine</div>
        </div>
        <div className="alert alert-danger" role="alert" hidden={errorMessage === ''}>
          {errorMessage}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
