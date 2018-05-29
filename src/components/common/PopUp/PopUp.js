import React from 'react';
import { Button } from '@common/Button';
import { Checkbox } from '@common/Checkbox';

const ROOT_CLASS = 'pop-up';

export const PopUp = () => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__content-wrap`}>
      <div className={`${ROOT_CLASS}__header`}>
        <div className={`${ROOT_CLASS}__logo`} />
        <div className={`${ROOT_CLASS}__check`} />
      </div>
      <div className={`${ROOT_CLASS}__title`}>SUBSCRIBE</div>
      <input
        className={`${ROOT_CLASS}__input`}
        placeholder="Enter your e-mail"
      />
      <div className={`${ROOT_CLASS}__checkbox-wrap`}>
        <Checkbox title="I agree with the processing of my personal data" />
      </div>
      <div className={`${ROOT_CLASS}__button-wrap`}>
        <Button title="SUBSCRIBE" />
      </div>
    </div>
  </div>
);
