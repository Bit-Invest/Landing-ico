import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'join-presale-screen';

export const JoinPresaleScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__title`}>Join Token Pre-Sale now!</div>
      <div className={`${ROOT_CLASS}__buttons-wrap`}>
        <a href="https://my.cindx.io" target="__blank" className="href_noUnder">
          <Button theme="filled" title="JOIN PRE-SALE" />
        </a>
        <a href="http://192.81.220.26" target="__blank">
          <Button title="TEST MVP" />
        </a>
      </div>
    </div>
  </Screen>
);
