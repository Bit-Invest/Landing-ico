import * as React from 'react';

const ROOT_CLASS = 'input';

export const Input = props => (
  <div className={ROOT_CLASS}>
    <input className={`${ROOT_CLASS}__input`} {...props} />
  </div>
);
