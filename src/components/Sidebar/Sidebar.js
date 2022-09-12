import React, { useState, useEffect } from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const { getIndexRanges } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = props.listData.length;
  const itemPerPage = 20;
  const totalPageCount = totalItems / itemPerPage;

  const indexStart = (currentPage - 1) * itemPerPage;
  const indexEnd = currentPage * itemPerPage;

  const loadMoreBtnHandler = () => {
    if (currentPage === totalPageCount) return;

    setCurrentPage(prevPage => ++prevPage);
  };

  useEffect(() => {
    getIndexRanges(indexStart, indexEnd);
  }, [getIndexRanges, indexStart, indexEnd]);

  const { listData, render } = props;

  return (
    <div className={classes['sidebar-container']}>
      {listData.slice(indexStart, indexEnd).map(item => {
        return render(item);
      })}
      <button
        onClick={loadMoreBtnHandler}
        className={`btn ${classes['btn--load']}`}
      >
        Load More
      </button>
    </div>
  );
};

export default Sidebar;
