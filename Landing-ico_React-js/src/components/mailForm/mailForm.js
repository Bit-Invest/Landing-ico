import * as React from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';

const ROOT_CLASS = 'mail-form';

export const MailForm = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__title`}>
      Pre-Token Sale Live
    </div>
    <div className={`${ROOT_CLASS}__bonus`}>
      25% BONUS
    </div>
    <div className={`${ROOT_CLASS}__description`}>
    Get it before everyone else does Offer expires within
    </div>
    <div className={`${ROOT_CLASS}__timer`}></div>
    <div className={`${ROOT_CLASS}__cost`}></div>
    <div className={`${ROOT_CLASS}__input`}>
      <Input placeholder="Your Email" />
    </div>
    <div className={`${ROOT_CLASS}__button`}>
      <Button title="SUBSCRIBE" theme="gradient" />
    </div>
  </div>
);
