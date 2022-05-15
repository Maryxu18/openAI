import React, { useState } from 'react';
import Response from '../Response';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from '../Pagination';

function ResponseList({ responseList }) {
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResponses, setCurrentReponses] = useState(responseList.slice(0, pageSize));

  const changePage = (page) => {
    setCurrentPage(page);
    setCurrentReponses(responseList.slice(page - 1, page + pageSize - 1));
  };

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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={responseList.length}
        pageSize={pageSize}
        onPageChange={(page) => changePage(page)}></Pagination>
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

const mapStateToProps = (state) => ({
  responseList: state.responseList
});

export default connect(mapStateToProps, null)(ResponseList);
