import * as React from 'react';
import { Timer } from '@components/timer';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { lng } from '../../links.js';
import indexLngObj from '../../lngs/index';

import first_block_2_row_1 from '@images/first_block_2_row_1.png';
import first_block_2_row_2 from '@images/first_block_2_row_2.png';
import first_block_2_row_3 from '@images/first_block_2_row_3.png';
import play_button_youtube from '../../media/play_button_youtube.png';

import './mailForm.css';

const ROOT_CLASS = 'mail-form';

class MailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      submitStatus: 4, // 0 - пусто; 1 - не подходит почта; 2 - всё ок отправлено; 3 - отправляется
      submitStatusText: null
    };
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  render() {
    const { props } = this;
    const { email, submitStatus, submitStatusText } = this.state;
    const end = new Date("2018/09/16 12:00:00 GMT-0000");
    const now = new Date();
    const distance = end - now;
    const sale_step = 2;

    const step_content = {
      title1: [
        'Security Token Sale Starts with',
        'Security Token Sale Is Live',
        indexLngObj[lng]['mailForm#19']
      ],
      bonus: [
        '40% BONUS',
        '40% BONUS',
        indexLngObj[lng]['mailForm#20']
      ],
      desc1: [
        <div>for the first 100 buyers <br /> Token sale starts in</div>
      ],
      timer: [
        <Timer />,
        <div className="timerRepText">BE THE EARLY BIRD</div>,
        <Timer />,
      ],
      textDescFromPrice: [
        'Starts from $1',
        '$1 now',
        indexLngObj[lng]['mailForm#23'],
      ],
      fromPrice: [
        '1.40',
        '1.40',
        '1.20',
      ],
      toPrice: [
        '1.25',
        '1.25',
        '1.17',
      ]
    };

    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__legals`}>
          <a  target="__blank" href="http://static.cindx.io/en/crypto_currency_exchange_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_1} className="img_legal" />
              <div className="text_legal">CRYPTOCURRENCY EXCHANGE LICENSE</div>
            </div>
          </a>
          <a  target="__blank" href="http://static.cindx.io/en/financial_institution_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_2} className="img_legal" />
              <div className="text_legal">FINANCIAL INSTITUTION LICENSE</div>
            </div>
          </a>
          <a  target="__blank" href="http://static.cindx.io/en/crypto_wallet_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_3} className="img_legal" />
              <div className="text_legal">CRYPTO WALLET LICENSE</div>
            </div>
          </a>
        </div>
        <div className={`${ROOT_CLASS}__video`} onClick={() => this.showVideoInPopUp('https://player.vimeo.com/video/286746544')}>
          <img
            src={play_button_youtube}
            alt="CINDEX"
            className={`${ROOT_CLASS}__play`}
          />
        </div> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(MailForm);

export {connectedContainer as MailForm};
