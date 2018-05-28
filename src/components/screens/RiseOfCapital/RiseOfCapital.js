import React from 'react';
import { Screen } from '@common/Screen';

const ROOT_CLASS = 'rise-of-capital';

export const RiseOfCapital = props => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>{props.title}</div>
      <img src={props.imageSrc} className={`${ROOT_CLASS}__picture`} />
    </div>
  </Screen>
);
