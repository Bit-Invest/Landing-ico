import * as React from 'react';
import { ProgressBar } from '@components/progressBar';
import currency_icons from '../../../images/currency_icons.png'
import BancorLogo from '../../../media/bancor_logo.png';
import HBLogo from '../../../media/hb_logo.png';
import Hotbit from '../../../media/hotbit_logo.757f4b29.png';
import Localcoin from '../../../media/localcoin_logo.png';
import Stable from '@images/rating-stable.svg';
import Hot from '@images/rating-hot.svg';
import rating_topicolist from '../../../media/rating_topicolist.png';
import rating_trackico from '../../../media/rating_trackico.png';
import rating_topicolist2 from '../../../media/rating_topicolist2.png';
import rating_icomarks from '../../../media/rating-icomarks.svg';
import rating_icobench from '../../../media/rating-icobench.png';
import rating_topicolisth from '../../../media/rating-topicolist.svg';
import './icoInfo.css';
import { lng } from '../../../links'
import indexLngObj from '../../../lngs/index'

const ROOT_CLASS = 'ico-info';

export const IcoInfo = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__progress-bar`}>
      <div className={`${ROOT_CLASS}__accept`}>{ indexLngObj[lng]['icoInfo#1'] }</div>
      <img className={`${ROOT_CLASS}__currency_icons`} src={currency_icons} alt={"CINDEX"}/>
      <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#2'] } <span>$21,000,000</span></div>
      <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#3'] } <span>$1,100,000 / $3,800,000</span></div>
      <div className={`${ROOT_CLASS}__progressBar`}>
        <div className={`${ROOT_CLASS}__progress`}></div>
      </div>
    </div>
    <div className={`${ROOT_CLASS}__signed-partners`}>
      <div className={`${ROOT_CLASS}__title`}>
        { indexLngObj[lng]['icoInfo#4'] }
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
        <a target="_blank" href='https://topicolist.com/' className={`${ROOT_CLASS}__href-rating-icon`}>
          <img src={rating_topicolist} className={`${ROOT_CLASS}__rating-icon`} />
        </a>
        <a target="_blank" href='https://www.trackico.io/ico/cindx/#statistics' className={`${ROOT_CLASS}__href-rating-icon`}>
          <img src={rating_trackico} className={`${ROOT_CLASS}__rating-icon`} />
        </a>
        <img src={rating_topicolist2} className={`${ROOT_CLASS}__rating-icon ico_rating`} />
        <br/>
        <a target="_blank" href='https://icomarks.com/ico/cindx' className={`${ROOT_CLASS}__href-rating-icon`}>
          <img src={rating_icomarks} className={`${ROOT_CLASS}__rating-icon`} />
        </a>
        <a target="_blank" href='https://icobench.com/ico/cindx' className={`${ROOT_CLASS}__href-rating-icon`}>
          <img src={rating_icobench} className={`${ROOT_CLASS}__rating-icon`} />
        </a>
        <a target="_blank" href='https://icoholder.com/en/cindx-22233' className={`${ROOT_CLASS}__href-rating-icon`}>
          <img src={rating_topicolisth} className={`${ROOT_CLASS}__rating-icon`} />
        </a>
      </div>
    </div>
  </div>
);
