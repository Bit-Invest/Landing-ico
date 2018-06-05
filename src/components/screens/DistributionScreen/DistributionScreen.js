import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

import Distribution_graph from '@assets/export_mountain_v2/distribution_tokens.svg';

const ROOT_CLASS = 'distribution-screen';

export const DistributionScreen = () => (
  <Screen>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>
        Distribution<br />of tokens
      </div>
      <img className={`${ROOT_CLASS}__graphImg`} src={Distribution_graph} />
      <div className={`${ROOT_CLASS}__graph`} />
      <a
        href="https://my.cindx.io"
        target="__blank"
        className="href_noUnder"
        target="__blank">
        <Button title="BUY TOKENS" theme="filled" />
      </a>
    </div>
  </Screen>
);
