import React, { useState } from 'react';
import Response from '../Response';

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

export default ResponseList;
