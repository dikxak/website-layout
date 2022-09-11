import React from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const initialListCount = 20;

  return (
    <div className={classes['sidebar-container']}>
      {props.listData.slice(0, initialListCount).map(item => {
        return props.render(item);
      })}
    </div>
  );
};

export default Sidebar;
