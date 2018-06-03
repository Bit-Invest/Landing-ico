import React from 'react';
import { Screen } from '@common/Screen';
import img__people from '@assets/export_mountain_v2/three_men_titles.svg';

const ROOT_CLASS = 'how-does-it-screen';

export const HowDoesItScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>
        How does it work in a nutshell ?
      </div>
      <img src={img__people} className={`${ROOT_CLASS}__people`} />
    </div>
  </Screen>
);
