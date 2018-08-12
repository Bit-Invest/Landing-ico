import * as React from 'react';
import { ProgressBar } from '@components/progressBar';
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
      <ProgressBar money="1.053,972" percent="4"/>
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
