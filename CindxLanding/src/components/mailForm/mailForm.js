import * as React from 'react';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { lng, links } from '../../links.js';
import indexLngObj from '../../lngs/index';

import first_block_2_row_1 from '@images/first_block_2_row_1.png';
import first_block_2_row_2 from '@images/first_block_2_row_2.png';
import first_block_2_row_3 from '@images/first_block_2_row_3.png';
import play_button_youtube from '../../media/play_button_youtube.png';

import './mailForm.css';

const ROOT_CLASS = 'mail-form';

class MailForm extends React.Component {
  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  render() {
    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__legals`}>
          <a  target="__blank" href="http://static.cindx.io/en/crypto_currency_exchange_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img alt="" src={first_block_2_row_1} className="img_legal" />
              <div className="text_legal">{indexLngObj[lng]['teamLegal#3']}</div>
            </div>
          </a>
          <a  target="__blank" href="http://static.cindx.io/en/financial_institution_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img alt="" src={first_block_2_row_2} className="img_legal" />
              <div className="text_legal">{indexLngObj[lng]['teamLegal#4']}</div>
            </div>
          </a>
          <a  target="__blank" href="http://static.cindx.io/en/crypto_wallet_license.pdf">
            <div className={`${ROOT_CLASS}__item_legals`}>
              <img alt="" src={first_block_2_row_3} className="img_legal" />
              <div className="text_legal">{indexLngObj[lng]['teamLegal#5']}</div>
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
