import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'distribution-screen';

export const DistributionScreen = () => (
  <Screen>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>
        Distribution<br />of tokens
      </div>
      <div className={`${ROOT_CLASS}__graph`} />
      <Button title="BUY TOKENS" theme="filled" />
    </div>
  </Screen>
);
