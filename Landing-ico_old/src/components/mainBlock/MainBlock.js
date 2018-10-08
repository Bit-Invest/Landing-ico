import * as React from 'react';
import { MailForm } from '@components/mailForm';
import { IcoInfo } from './icoInfo';
import './MainBlock.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

const ROOT_CLASS = 'main-block';

export const MainBlock = props => (
  <div className={ROOT_CLASS} id="top">
    <div className={`${ROOT_CLASS}__content`}>
      <div className={`${ROOT_CLASS}__container-1`}>
        <div className={`${ROOT_CLASS}__header`}>
          { indexLngObj[lng]['mainBlock#1'] } <br/> { indexLngObj[lng]['mainBlock#2'] }
          <div className={`${ROOT_CLASS}__header2`}>
            { indexLngObj[lng]['mainBlock#3'] }
          </div>
        </div>
        <div className={`${ROOT_CLASS}__ico-info-l`}>
          <IcoInfo />
        </div>
      </div>
      <div className={`${ROOT_CLASS}__container-2`}>
        <div className={`${ROOT_CLASS}__form`}>
          <MailForm />
        </div>
        <div className={`${ROOT_CLASS}__ico-info-m`}>
          <IcoInfo />
        </div>
      </div>
    </div>
    <div className={`${ROOT_CLASS}__socials`}></div>
  </div>
);
