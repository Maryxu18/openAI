import React from 'react';
// import './index.style.scss';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
Moment.globalFormat = 'D MMM YYYY';

const Response = ({ response }) => {
  return (
    <div className="flex">
      <div className="date_header form-text">
        <div>{response.engineName} Engine</div>
        <Moment unix>{response.date}</Moment>
      </div>
      <div className="container">
        <div className="header"> Prompt:</div>
        <div className="info p"> {response.prompt} </div>
      </div>
      <div className="container">
        <div className="header">Response:</div>
        <div className="info p"> {response.response} </div>
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
