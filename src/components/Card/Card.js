import React from 'react';

import classes from './Card.module.css';

const Card = props => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes['card']} ${props.className ? props.className : ''}`}
    >
      {props.render(classes['card-para'])}
    </div>
  );
};

export default Card;
