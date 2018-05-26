import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'video-screen';

export const VideoScreen = () => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__content-wrap`}>
        <div className={`${ROOT_CLASS}__header`}>
          How the technology works for investor
        </div>
        <div className={`${ROOT_CLASS}__video`} />
      </div>
      <div className={`${ROOT_CLASS}__button`}>
        <Button theme="filled" title="WATCH VIDEO" />
      </div>
    </div>
  </Screen>
);
