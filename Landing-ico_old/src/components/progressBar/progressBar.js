import * as React from 'react';
import './progressBar.css';

const ROOT_CLASS = 'progress-bar';

export const ProgressBar = props => (
  <div className={`${ROOT_CLASS} ${props.theme ? ROOT_CLASS + '_' + props.theme : ''}`}>
    <div className={`${ROOT_CLASS}__1st-line`}>
      <div className={`${ROOT_CLASS}__soft-cap`}>
        <div className={`${ROOT_CLASS}__title`}>Soft Cap:</div>
        <div className={`${ROOT_CLASS}__value`}>{`$${props.money} / $3.8m`}</div>
      </div>
      <div className={`${ROOT_CLASS}__hard-cap`}>
        <div className={`${ROOT_CLASS}__title`}>Hard Cap:</div>
        <div className={`${ROOT_CLASS}__value`}>$21 m</div>
      </div>
    </div>
    <div className={`${ROOT_CLASS}__bar`}>
      <div className={`${ROOT_CLASS}__fill`} style={{width: `${props.percent}%`}} />
    </div>
  </div>
);
