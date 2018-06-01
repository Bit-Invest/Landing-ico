import React from 'react';

const ROOT_CLASS = 'progress-bar';

export const ProgressBar = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__bar`}>
      <div
        className={`${ROOT_CLASS}__fill`}
        style={{ width: `${props.percent}%` }}
      />
    </div>
    <div className={`${ROOT_CLASS}__titles`}>
      <div className={`${ROOT_CLASS}__soft`}>Soft cap $6m</div>
      <div className={`${ROOT_CLASS}__hard`}>Hard cap $30m</div>
    </div>
  </div>
);
