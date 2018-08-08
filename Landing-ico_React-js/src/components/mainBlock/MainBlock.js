import * as React from 'react';
import { MailForm } from '@components/mailForm';
import { IcoInfo } from './icoInfo';
import './MainBlock.css';

const ROOT_CLASS = 'main-block';

export const MainBlock = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__content`}>
      <div className={`${ROOT_CLASS}__container-1`}>
        <div className={`${ROOT_CLASS}__header`}>
          We Revolutionize Crypto Assets Management. And Launch Our Security Token Sale
        </div>
        <div className={`${ROOT_CLASS}__ico-info-l`}>
          <IcoInfo />
        </div>
      </div>
      <div className={`${ROOT_CLASS}__container-2`}>
        <div className={`${ROOT_CLASS}__form`}>
          <MailForm now={1.25} later={1.20} />
        </div>
        <div className={`${ROOT_CLASS}__ico-info-m`}>
          <IcoInfo />
        </div>
      </div>
    </div>
    <div className={`${ROOT_CLASS}__socials`}></div>
  </div>
);
