import React from 'react';
import { Screen } from '@common/Screen';

const ROOT_CLASS = 'how-does-it-screen';

export const HowDoesItScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>
        How does it work in the nutshell ?
      </div>
      <div className={`${ROOT_CLASS}__people`} />
    </div>
  </Screen>
);
