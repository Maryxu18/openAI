import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Pagination from '../Pagination';
import Response from '../Response';
import { enginesData } from '../../constants/AIEngine';

function ResponseList({ responseList }) {
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResponses, setCurrentReponses] = useState(responseList.slice(0, pageSize));

  const [engine, setEngine] = useState('All');

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    // Filter by Engine Name
    let filter = [];
    if (engine === 'All') {
      filter = responseList;
    } else {
      filter = responseList.filter((response) => response.engineName === engine);
    }

    setCurrentReponses(filter.slice(start, end));
  }, [responseList, currentPage, engine]);

  const changePage = (page) => {
    setCurrentPage(page);
    setCurrentReponses(responseList.slice(page - 1, page + pageSize - 1));
  };

  return (
    <div>
      <div className="h3" style={{ textAlign: 'left' }}>
        Responses
      </div>
      <div className="tool-bar">
        <div className="form-text"> Filter By Engine </div>
        <button
          type="button"
          className={classNames('btn', {
            'btn-outline-primary': engine !== 'All',
            'btn-primary': engine === 'All'
          })}
          onClick={() => setEngine('All')}>
          All
        </button>
        {enginesData &&
          enginesData.map((e, idx) => {
            return (
              <button
                key={idx}
                type="button"
                className={classNames('btn', {
                  'btn-outline-primary': engine !== e.name,
                  'btn-primary': engine === e.name
                })}
                onClick={() => setEngine(e.name)}>
                {e.name}
              </button>
            );
          })}
      </div>
      {currentResponses &&
        currentResponses.map((response, idx) => {
          return <Response response={response} key={idx} />;
        })}
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
