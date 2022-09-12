import React from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const { listData, render } = props;

  return (
    <div className={classes['sidebar-container']}>
      {listData.map(item => {
        return render(item);
      })}
      <button
        onClick={props.onPageChange}
        className={`btn ${classes['btn--load']}`}
      >
        Load More
      </button>
    </div>
  );
};

export default Sidebar;
