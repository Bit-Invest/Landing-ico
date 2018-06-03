import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'laptop-screen';

export const LaptopScreen = props => (
  <Screen currentItem={0}>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header`}>{props.header}</div>
      <div className={`${ROOT_CLASS}__content-wrap`}>
        <div className={`${ROOT_CLASS}__laptop`} />
        <div className={`${ROOT_CLASS}__content`}>
          <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
          <div className={`${ROOT_CLASS}__description`}>
            {props.description}
          </div>
        </div>
      </div>
      <div className={`${ROOT_CLASS}__button-wrap`}>
        <Button title="ZOOM IN" />
      </div>
    </div>
  </Screen>
);
