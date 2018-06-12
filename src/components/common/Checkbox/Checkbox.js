import React from 'react';

const ROOT_CLASS = 'checkbox';

export const Checkbox = props => {
  const rootClass = ROOT_CLASS + ` ${ROOT_CLASS}_active`;
  return (
    <div className={rootClass} onClick={props.onClickRoot}>
      <div className={`${ROOT_CLASS}__circle`}>
        <div className={`${ROOT_CLASS}__circle-fill`} />
      </div>
      <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
    </div>
  );
};
