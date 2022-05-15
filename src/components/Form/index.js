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
