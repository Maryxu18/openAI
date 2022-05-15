import React from 'react';
import './index.style.css';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
Moment.globalFormat = 'D MMM YYYY';

const Response = ({ response }) => {
  return (
    <div className="response_flex">
      <div className="form-text response_container">
        <div>{response.engineName} Engine</div>
        <Moment unix className="response_date-label">
          {response.date}
        </Moment>
      </div>
      <div className="response_container">
        <div className="response_header"> Prompt:</div>
        <div className="p text-break"> {response.prompt} </div>
      </div>
      <div className="response_container">
        <div className="response_header">Response:</div>
        <div className="p text-break"> {response.response} </div>
      </div>
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.shape({
    prompt: PropTypes.string,
    response: PropTypes.string,
    date: PropTypes.number,
    engineName: PropTypes.string
  })
};

export default Response;
