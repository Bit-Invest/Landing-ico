import * as React from 'react';
import { connect } from 'react-redux';
import currency_icons from '../../../images/currency_icons.png'
import btcbit_logo_head from '../../../images/btcbit_logo_head.png'
import block_3_ico_1 from '../../../images/block_3_ico_1.png';
import BancorLogo from '../../../media/bancor_logo.png';
import HBLogo from '../../../media/hb_logo.png';
import Hotbit from '../../../media/hotbit_logo.757f4b29.png';
import Localcoin from '../../../media/localcoin_logo.png';
import './icoInfo.css';
import { bindActionCreators } from 'redux';
import { showDocPopup } from '../../../store/store';
import { lng, links, ab_val } from '../../../links'
import indexLngObj from '../../../lngs/index'

const ROOT_CLASS = 'ico-info';

const IcoInfo = props => {
  const startSum = props.state ? props.state.money : 0
  const outputValue = props.state ? String(props.state.money).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,') : 0
    
  const finishSum = 21000000

  const openPopup = (e) => {
    e.preventDefault()
    props.showDocPopup('')
  }

  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__progress-bar`}>
        <div className={`${ROOT_CLASS}__row`}>
          <div className={`${ROOT_CLASS}__accept`}>{ indexLngObj[lng]['icoInfo#1'] }</div>
          {/* <a className={`${ROOT_CLASS}__href_btcbit`} target="_blank" href="https://btcbit.net"> */}
            <img className={`${ROOT_CLASS}__btcbit_logg`} src={btcbit_logo_head} alt="CINDX" />
          {/* </a> */}
        </div>
        <img className={`${ROOT_CLASS}__currency_icons`} src={currency_icons} alt={"CINDX"}/>
        <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#2'] }</div>
        <div className={`${ROOT_CLASS}__desktop-amount-progressBar`}>
          <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#3'] } <span>${outputValue} / $21,000,000</span></div>
          <div className={`${ROOT_CLASS}__progressBar`}>
            <div className={`${ROOT_CLASS}__progress`} style={{ width: ((startSum / finishSum) * 100) + '%' }}></div>
          </div>
        </div>
        <div className={`${ROOT_CLASS}__mobile-amount-progressBar`}>
          <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#3'] } <span>$21,000,000</span></div>
          <div className={`${ROOT_CLASS}__progressBar`}>
            <div className={`${ROOT_CLASS}__progress`} style={{ width: ((startSum / finishSum) * 100) + '%' }}><span>${outputValue}</span></div>
          </div>
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
        <div className={`${ROOT_CLASS}__docs`}>
          <div className={`${ROOT_CLASS}__doc`}>
            <a target="_blank" onClick={openPopup} href={links.wp}>
              <div className={`${ROOT_CLASS}__docs-icon`}><i style={{ backgroundImage: `url(${block_3_ico_1})` }} /></div>
              <span className={`${ROOT_CLASS}__docs-name`}>{ indexLngObj[lng]['tokenSaleDetails#15'] }</span>
            </a>
          </div>
          <div className={`${ROOT_CLASS}__doc`}>
            <a target="_blank" onClick={openPopup} href={links.op}>
              <div className={`${ROOT_CLASS}__docs-icon`}><i style={{ backgroundImage: `url(${block_3_ico_1})` }} /></div>
              <span className={`${ROOT_CLASS}__docs-name`}>{ indexLngObj[lng]['tokenSaleDetails#17'] }</span>
            </a>
          </div>
        </div>
        {/* <div className={`${ROOT_CLASS}__ratings`}>
          <a target="_blank" href='https://topicolist.com/cindx/' className={`${ROOT_CLASS}__href-rating-icon`}>
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
        </div> */}
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({showDocPopup}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(IcoInfo);

export {connectedContainer as IcoInfo}
