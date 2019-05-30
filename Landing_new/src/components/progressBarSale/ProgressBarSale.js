import * as React from 'react';
import './ProgressBarSale.css';
import { lng, links, ab_val } from '../../links'
import indexLngObj from '../../lngs/index'
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showDocPopup } from '../../store/store';

const ProgressBarSale = props => {
  const sendDoc = docValue => {
    props.showDocPopup(docValue)
  }

  return (
    <div className="progressBarSale">
      { ab_val === '1' ?
        <div className="container__dock-block">
          <div className="wrapper__doc">
            <div className="download_public_doc">Download Our Public Documents</div>
            <div className="container__row">
              <div className="row" onClick={() => sendDoc('ONE PAGES')}>
                <div target="_blank" className="row_img_a"><img src={block_3_ico_1} alt={"CINDEX"}/></div>
                <div target="_blank" className="row_span_a"><span>ONE PAGER</span></div>
              </div>
              <div className="row" onClick={() => sendDoc('PRESENTATION')}>
                <div target="_blank" className="row_img_a"><img src={block_3_ico_2} alt={"CINDEX"}/></div>
                <div target="_blank" className="row_span_a"><span>PRESENTATION</span></div>
              </div>
              <div className="row" onClick={() => sendDoc('WHITEPAPER')}>
                <div target="_blank" className="row_img_a"><img src={block_3_ico_1} alt={"CINDEX"}/></div>
                <div target="_blank" className="row_span_a"><span>WHITEPAPER</span></div>
              </div>
              <div className="row" onClick={() => sendDoc('FINANCIAL MODEL')}>
                <div target="_blank" className="row_img_a"><img src={block_3_ico_3} alt={"CINDEX"}/></div>
                <div target="_blank" className="row_span_a"><span>FINANCIAL MODEL</span></div>
              </div>
              <div className="row" onClick={() => sendDoc('LEGAL DOCS')}>
                <div target="_blank" className="row_img_a"><img src={block_3_ico_1} alt={"CINDEX"}/></div>
                <div target="_blank" className="row_span_a"><span>LEGAL DOCS</span></div>
              </div>
            </div>
          </div>
        </div> : 
        null
      }
      {/* <div className="container">
        <div className={`left-block-bonuses ${(lng === 'tr' || lng === 'ja' || lng === 'pt') ? 'tr-left-block-bonuses' : null}`}>
          <div>{ indexLngObj[lng]['progressBarSale#1'] }</div>
          <div>{ indexLngObj[lng]['progressBarSale#2'] }</div>
        </div>
        <div className='saleName'>
          <p className="pe-sale">{ indexLngObj[lng]['progressBarSale#3'] }</p>
          <p className="sale-bonusses">{ indexLngObj[lng]['progressBarSale#4'] }</p>
          <p className="cinx">1 CINX = $1</p>
        </div>
        <div className="progressBar"><div className={`progress progress__${lng}`}></div></div>
        <div className="progress-data">
          <div className="data">
            <p className="amount">1.25</p>
            <p>{ indexLngObj[lng]['progressBarSale#5'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.20</p>
            <p>{ indexLngObj[lng]['progressBarSale#6'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.17</p>
            <p>{ indexLngObj[lng]['progressBarSale#7'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.15</p>
            <p>{ indexLngObj[lng]['progressBarSale#8'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.13</p>
            <p>{ indexLngObj[lng]['progressBarSale#9'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.10</p>
            <p>{ indexLngObj[lng]['progressBarSale#10'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.05</p>
            <p>{ indexLngObj[lng]['progressBarSale#11'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.00</p>
            <p>{ indexLngObj[lng]['progressBarSale#12'] }</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showDocPopup}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(ProgressBarSale);

export {connectedContainer as ProgressBarSale};
