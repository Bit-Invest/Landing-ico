import * as React from 'react';
import './input.css';

const ROOT_CLASS = 'input';

export const Input = props => (
  <div className={ROOT_CLASS}>
    <input className={`${ROOT_CLASS}__input`} {...props} />
  </div>
);
