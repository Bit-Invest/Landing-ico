import React from 'react';
import { Screen } from '@common/Screen';

const ROOT_CLASS = 'head-screen';

export const HeadScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>CONTENT</div>
  </Screen>
);
