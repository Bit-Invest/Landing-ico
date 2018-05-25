import React from 'react';

const ROOT_CLASS = 'button';

export const Button = props => {
  const rootClass = `${ROOT_CLASS} ${
    props.theme ? ROOT_CLASS + '_' + props.theme : ''
  }`;

  return (
    <div className={rootClass} onClick={props.onClick}>
      <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
    </div>
  );
};
