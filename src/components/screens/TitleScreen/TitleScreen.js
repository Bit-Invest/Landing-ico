import React from 'react';
import { Screen } from '@common/Screen';

const ROOT_CLASS = 'title-screen';

export const TitleScreen = props => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>{props.header}</div>

      <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
    </div>
  </Screen>
);
