import * as React from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { Timer } from '@components/timer';
import './mailForm.css';

const ROOT_CLASS = 'mail-form';

export const MailForm = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__video`}>
      <div className={`${ROOT_CLASS}__play`}></div>
    </div>
    <div className={`${ROOT_CLASS}__content`}>
      <div className={`${ROOT_CLASS}__title`}>
        Pre-Token Sale Live
      </div>
      <div className={`${ROOT_CLASS}__bonus`}>
        25% BONUS
      </div>
      <div className={`${ROOT_CLASS}__description`}>
      Get it before everyone else does<br/>Offer expires within
      </div>
      <div className={`${ROOT_CLASS}__timer`}>
        <Timer days={10} hours={6} minutes={20} seconds={14}/>
      </div>
      <div className={`${ROOT_CLASS}__cost`}>
        <div className={`${ROOT_CLASS}__now`}>
          <div className={`${ROOT_CLASS}__cost-title`}>
            1$ now
          </div>
          <div className={`${ROOT_CLASS}__cost-value`}>
            {props.now} CINX
          </div>
        </div>
        <div className={`${ROOT_CLASS}__arrows`}></div>
        <div className={`${ROOT_CLASS}__later`}>
          <div className={`${ROOT_CLASS}__cost-title`}>
            1$ later
          </div>
          <div className={`${ROOT_CLASS}__cost-value`}>
            {props.later} CINX
          </div>
        </div>
      </div>
      <div className={`${ROOT_CLASS}__input`}>
        <Input placeholder="Your Email" />
      </div>
      <div className={`${ROOT_CLASS}__button`}>
        <Button title="SUBSCRIBE" theme="gradient" />
      </div>
    </div>
  </div>
);
