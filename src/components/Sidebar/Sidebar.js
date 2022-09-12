import React, { useState, useEffect } from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const [indexRanges, setIndexRanges] = useState([]);

  const totalItems = props.listData.length;
  const itemPerPage = 20;
  const totalPageCount = totalItems / itemPerPage;

  const loadMoreBtnHandler = () => {
    if (currentPage === totalPageCount) return;

    setCurrentPage(prevPage => ++prevPage);
  };

  useEffect(() => {
    const indexStart = (currentPage - 1) * itemPerPage; // For page 1: (1-1) * 20
    const indexEnd = currentPage * itemPerPage; // For page 1: 1 * 20, range = (0-20)

    setIndexRanges([indexStart, indexEnd]);
  }, [currentPage]);

  return (
    <div className={classes['sidebar-container']}>
      {props.listData.slice(indexRanges[0], indexRanges[1]).map(item => {
        return props.render(item);
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
