import React from 'react';

const ROOT_CLASS = 'screen';

console.log();

export const Screen = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__content`}>{props.children}</div>
  </div>
);
