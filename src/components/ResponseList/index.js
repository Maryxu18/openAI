import React from 'react';
import Response from '../Response';
import PropTypes from 'prop-types';

function ResponseList({ responseList }) {
  return (
    <div>
      <div className="h3" style={{ textAlign: 'left' }}>
        Responses
      </div>
      {responseList ? (
        responseList.map((response, idx) => {
          return <Response response={response} key={idx} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

ResponseList.propTypes = {
  responseList: PropTypes.arrayOf(
    PropTypes.shape({
      response: PropTypes.object
    })
  )
};

export default ResponseList;
