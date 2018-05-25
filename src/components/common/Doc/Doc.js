import React from 'react';

const ROOT_CLASS = 'doc';

export const Doc = props => (
  <div className={ROOT_CLASS}>
    <div
      className={`${ROOT_CLASS}__icon ${ROOT_CLASS + '__icon_' + props.icon}`}
    />
    <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
  </div>
);
