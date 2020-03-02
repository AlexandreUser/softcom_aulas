import React from 'react';
import styles from './styles.css';
export default props => {
  return (
    <div className="card">
      <div className="cardInside">
        <p className="title">
          {props.title}, {props.hooks}
        </p>
        <div className="details">
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
