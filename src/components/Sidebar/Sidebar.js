import React from 'react';
import Card from '../Card/Card';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const initialListCount = 20;

  return (
    <div className={classes['sidebar-container']}>
      {props.listData.slice(0, initialListCount).map(item => {
        return (
          <Card>
            <p className={classes['sidebar-para']}>{item}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Sidebar;
