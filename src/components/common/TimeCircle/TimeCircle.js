import React from 'react';

const ROOT_CLASS = 'time-circle';

export const TimeCircle = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__circle`}>
      <div className={`${ROOT_CLASS}__count`}>{props.count}</div>
    </div>
    <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
  </div>
);
