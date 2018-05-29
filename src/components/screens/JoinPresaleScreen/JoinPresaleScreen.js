import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'join-presale-screen';

export const JoinPresaleScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__title`}>Join Token Pre-Sale now!</div>
      <div className={`${ROOT_CLASS}__buttons-wrap`}>
        <Button theme="filled" title="JOIN PRE-SALE" />
        <Button title="TEST MVP" />
      </div>
    </div>
  </Screen>
);
