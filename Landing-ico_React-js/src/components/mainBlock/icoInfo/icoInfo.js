import * as React from 'react';
import { ProgressBar } from '@components/progressBar';
import currency_icons from '../../../images/currency_icons.png'
import BancorLogo from '@images/bancor_logo.svg';
import HBLogo from '@images/hb_logo.svg';
import Hotbit from '@images/hotbit_logo.svg';
import Localcoin from '@images/localcoin_logo.svg';
import Stable from '@images/rating-stable.svg';
import Hot from '@images/rating-hot.svg';
import './icoInfo.css';

const ROOT_CLASS = 'ico-info';

export const IcoInfo = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__progress-bar`}>
      <div className={`${ROOT_CLASS}__accept`}>We accept:</div>
      <img className={`${ROOT_CLASS}__currency_icons`} src={currency_icons} alt={"CINDEX"}/>
      <div className={`${ROOT_CLASS}__amount`}>Hard Cap: <span>$21,000,000</span></div>
      <div className={`${ROOT_CLASS}__amount`}>Soft Cap Milestone: <span>$1,100,000 / $3,800,000</span></div>
      <div className={`${ROOT_CLASS}__progressBar`}>
        <div className={`${ROOT_CLASS}__progress`}></div>
      </div>
    </div>
    <div className={`${ROOT_CLASS}__signed-partners`}>
      <div className={`${ROOT_CLASS}__title`}>
        Listing Agreements are Signed With:
      </div>
      <div className={`${ROOT_CLASS}__partners`}>
        <img
          src={BancorLogo}
          className={`${ROOT_CLASS}__partner ${ROOT_CLASS}__partner_bancor`}
        />
        <img
          src={Hotbit}
          className={`${ROOT_CLASS}__partner ${ROOT_CLASS}__partner_hotbit`}
        />
        <img
          src={Localcoin}
          className={`${ROOT_CLASS}__partner ${ROOT_CLASS}__partner_local-coin`}
        />
        <img
          src={HBLogo}
          className={`${ROOT_CLASS}__partner ${ROOT_CLASS}__partner_hbtop`}
        />
      </div>
      <div className={`${ROOT_CLASS}__ratings`}>
        <img
          src={Stable}
          className={`${ROOT_CLASS}__rating ${ROOT_CLASS}__rating_stable`}
        />
        <img
          src={Hot}
          className={`${ROOT_CLASS}__rating ${ROOT_CLASS}__rating_hot`}
        />
      </div>
    </div>
  </div>
);
