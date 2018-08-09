import * as React from 'react';
import './button.css';

const ROOT_CLASS = 'button';

export const Button = props => (
  <div
    className={`${ROOT_CLASS} ${props.theme ? ROOT_CLASS + '_' + props.theme : ''}`}
    onClick={() => {props.onClick && props.onClick(props.payload)}}
  >
    {props.title}
  </div>
);
