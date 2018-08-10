import * as React from 'react';
import './timer.css';

const ROOT_CLASS = 'timer';

export const Timer = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__days ${ROOT_CLASS}__point`}>
      <div className={`${ROOT_CLASS}__value`}>
        {props.days}
      </div>
      <div className={`${ROOT_CLASS}__title`}>
        Days
      </div>
    </div>:
    <div className={`${ROOT_CLASS}__hours ${ROOT_CLASS}__point`}>
      <div className={`${ROOT_CLASS}__value`}>
        {props.hours}
      </div>
      <div className={`${ROOT_CLASS}__title`}>
        Hours
      </div>
    </div>:
    <div className={`${ROOT_CLASS}__minutes ${ROOT_CLASS}__point`}>
      <div className={`${ROOT_CLASS}__value`}>
        {props.minutes}
      </div>
      <div className={`${ROOT_CLASS}__title`}>
        Minutes
      </div>
    </div>:
    <div className={`${ROOT_CLASS}__seconds ${ROOT_CLASS}__point`}>
      <div className={`${ROOT_CLASS}__value`}>
        {props.seconds}
      </div>
      <div className={`${ROOT_CLASS}__title`}>
        Seconds
      </div>
    </div>
  </div>
);