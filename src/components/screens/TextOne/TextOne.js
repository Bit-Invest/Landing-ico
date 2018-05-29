import React from 'react';
import { Screen } from '@common/Screen';

const ROOT_CLASS = 'textOne-analytics';

export const TextOne = props => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>{props.text1}</div>
      <div className={`${ROOT_CLASS}__text1`}>{props.text2}</div>
    </div>
  </Screen>
);
