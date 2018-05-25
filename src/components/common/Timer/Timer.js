import React from 'react';
import { TimeCircle } from '@common/TimeCircle';

const ROOT_CLASS = 'timer';

export const Timer = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__circle`}>
        <TimeCircle title="month" count={1} />
      </div>
      <div className={`${ROOT_CLASS}__circle`}>
        <TimeCircle title="days" count={23} />
      </div>
      <div className={`${ROOT_CLASS}__circle`}>
        <TimeCircle title="hours" count={3} />
      </div>
      <div className={`${ROOT_CLASS}__circle`}>
        <TimeCircle title="minutes" count={32} />
      </div>
    </div>
  );
};
