import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import imageCircle from '../../images/block_4_cont_4_img.png';
import imageCircle_1 from '../../images/block_4_cont_3_img.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showDocPopup } from '../../store/store';
import { MailForm } from '../mailForm'

import { links, Join, lng, ab_val } from '../../links.js';
import indexLngObj from '../../lngs/index'

// import { ProgressBar } from '@components/progressBar';

import './tokenSaleDetails.css';

const TokenAllocation = () => {
  return (
    <div className="cont_4_1">
      <h2>{ indexLngObj[lng]['tokenSaleDetails#1'] }</h2>
      <hr/>
      <div className="graph">
        <img src={imageCircle_1} className="graph-image" />
        <ul>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#2'] } 12%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#3'] } 6%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#4'] } 7%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#5'] } 12%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#6'] } 3%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#7'] } 9%</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#8'] } 51%</li>
        </ul>
      </div>
    </div>
  );
};

const ProgressBar = (props) => {
  const ROOT_CLASS = 'progress-bar'

  const startSum = props.props ? props.props.money : 0
  const outputValue = props.props ? String(props.props.money).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,') : 0
    
  const finishSum = 3800000

  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__amount`}>{ indexLngObj[lng]['icoInfo#3'] } <span>${outputValue} / $3,800,000</span></div>
      <div className={`${ROOT_CLASS}__progressBar`}>
        <div className={`${ROOT_CLASS}__progress`} style={{ width: ((startSum / finishSum) * 100) + '%' }}></div>
      </div>
    </div>
  )
}

const TokenProgressBarSale = () => {
  return (
    <div className="progress-container">
      {/* <div className={`left-block-bonuses ${(lng === 'tr' || lng === 'ja' || lng === 'pt') ? 'tr-left-block-bonuses' : null}`}>
        <div>{ indexLngObj[lng]['progressBarSale#1'] }</div>
        <div>{ indexLngObj[lng]['progressBarSale#2'] }</div>
      </div> */}
      <div className='saleName'>
        <p className="pe-sale">{ indexLngObj[lng]['progressBarSale#3'] }</p>
        <p className="sale-bonusses">{ indexLngObj[lng]['progressBarSale#4'] }</p>
        <p className="cinx">Bonuses in CINX</p>
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
    </div>
  )
}

class TokenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false
    }
  }

  openPrompt = () => {
    this.setState({ prompt: true });
  }

  closePrompt = () => {
    this.setState({ prompt: false });
  }

  showPrompt = () => {
    const { prompt } = this.state;
    if ( prompt ) {
      return (
        <div className="pop-up">
          <div className='bg'>
            <div onMouseLeave={this.closePrompt} className="mobile-pop-up-block">
              <div onClick={this.closePrompt} className="close-pop-up">x</div>
              <div className="prompt">
                <p>
                  { indexLngObj[lng]['tokenSaleDetails#40'] }
                </p>
                <p>
                  { indexLngObj[lng]['tokenSaleDetails#41'] }
                </p>
                <p>
                  { indexLngObj[lng]['tokenSaleDetails#42'] }
                </p>
                <p>
                  { indexLngObj[lng]['tokenSaleDetails#43'] }
                </p>
              </div>
            </div>
          </div>
          <div onMouseLeave={this.closePrompt} className="prompt desktop-prompt">
            <p>
              { indexLngObj[lng]['tokenSaleDetails#40'] }
            </p>
            <p>
              { indexLngObj[lng]['tokenSaleDetails#41'] }
            </p>
            <p>
              { indexLngObj[lng]['tokenSaleDetails#42'] }
            </p>
            <p>
              { indexLngObj[lng]['tokenSaleDetails#43'] }
            </p>
          </div>
        </div>
      )
    }
    else {
      return ( <div className="closePrompt"></div> )
    }
  }
  render () {
    return(
      <div className="cont_1">
        <h2>{ indexLngObj[lng]['tokenSaleDetails#39'] }</h2>
        <hr/>
        <div className="token-info">
          <div className="token-info__left-block">
            <p>Hard Cap:</p>
            <p>Token Sale:</p>
            <p>Total Emission:</p>
            <p>Price Per Token:</p>
            {/* <p>{ indexLngObj[lng]['tokenSaleDetails#9'] } <span>CINX</span></p>
            <p>{ indexLngObj[lng]['tokenSaleDetails#10'] } <span>26.08.2018</span></p>
            <p>{ indexLngObj[lng]['tokenSaleDetails#11'] } <span>51,500,000</span></p>
            <p>{ indexLngObj[lng]['tokenSaleDetails#12'] } </p> */}
          </div>
          <div className="token-info__right-block">
            <p><span>$21,000,000</span></p>
            <p><span>26.08.2018 - 26.12.2018</span></p>
            <p><span>51.500.000 CINX</span></p>
            <div className="row">
              <p><span>$1.00 = 1.00 CINXO = 1.00 CINX</span></p>
              <div className="promptCircle">
                <span>?</span>
                <div className="pop-up">
                  <div className="bg">
                    <div className="mobile-pop-up-block">
                      <div className="close-pop-up"></div>
                      <div className="prompt">
                        <p>
                          { indexLngObj[lng]['tokenSaleDetails#40'] }
                        </p>
                        <p>
                          { indexLngObj[lng]['tokenSaleDetails#41'] }
                        </p>
                        <p>
                          { indexLngObj[lng]['tokenSaleDetails#42'] }
                        </p>
                        <p>
                          { indexLngObj[lng]['tokenSaleDetails#43'] }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prompt desktop-prompt">
                    <p>
                      { indexLngObj[lng]['tokenSaleDetails#40'] }
                    </p>
                    <p>
                      { indexLngObj[lng]['tokenSaleDetails#41'] }
                    </p>
                    <p>
                      { indexLngObj[lng]['tokenSaleDetails#42'] }
                    </p>
                    <p>
                      { indexLngObj[lng]['tokenSaleDetails#43'] }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="block_4-cinxo-info">{ indexLngObj[lng]['tokenSaleDetails#13'] } <span>{ indexLngObj[lng]['tokenSaleDetails#14'] }</span></p> */}
      </div>
    );
  }
};

const Docs = props => {
  const openPopup = (e) => {
    if (ab_val === '1') {
      e.preventDefault()
      props.showDocPopup('')
    }
  }
  
  return(
    <div className="cont_5">
      <div className="cont_5_docs__left-side">
        <div className="row">
          <a target="_blank" onClick={openPopup} href={links.wp}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
          <a target="_blank" onClick={openPopup} href={links.wp}><span>{ indexLngObj[lng]['tokenSaleDetails#15'] }</span></a>
        </div>
        <div className="row">
          <a target="_blank" onClick={openPopup} href={links.pr}><img src={block_3_ico_2} alt={"CINDEX"}/></a>
          <a target="_blank" onClick={openPopup} href={links.pr}><span>{ indexLngObj[lng]['tokenSaleDetails#16'] }</span></a>
        </div>
        <div className="row">
          <a target="_blank" onClick={openPopup} href={links.op}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
          <a target="_blank" onClick={openPopup} href={links.op}><span>{ indexLngObj[lng]['tokenSaleDetails#17'] }</span></a>
        </div>
      </div>
      <div className="cont_5_docs__right-side">
        <div className="row">
          <a target="_blank" onClick={openPopup} href={links.fm}><img src={block_3_ico_3} alt={"CINDEX"}/></a>
          <a target="_blank" onClick={openPopup} href={links.fm}><span>{ indexLngObj[lng]['tokenSaleDetails#18'] }</span></a>
        </div>
        <div className="row">
          <a target="_blank" onClick={openPopup} href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
          <a target="_blank" onClick={openPopup} href={links.ld}><span>{ indexLngObj[lng]['tokenSaleDetails#19'] }</span></a>
        </div>
      </div>
    </div>
  );
};

const UseProceeds = () => {
  return(
    <div className="cont_4">
      <h2>{ indexLngObj[lng]['tokenSaleDetails#20'] }</h2>
      <hr/>
      <div className="graph">
        <img src={imageCircle} className="graph-image" />
        <ul>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#21'] }</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#22'] }</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#23'] }</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#24'] }</li>
          <li><span /> { indexLngObj[lng]['tokenSaleDetails#25'] }</li>
        </ul>
      </div>
    </div>
  );
};

// const TokenDeals = () => {
//   return(
//     <div className="cont_2">
//       <h2>{ indexLngObj[lng]['tokenSaleDetails#26'] }</h2>
//       <hr />
//       <div className="sb_duo_info">
//         <div>
//           <div className="sb_duo_info_br">
//             <p>{ indexLngObj[lng]['tokenSaleDetails#27'] }</p>
//             <p className="span">26.08 - 26.12</p>
//           </div>
//         </div>
//         <div>
//           <div className="sb_duo_info_br">
//             <p>{ indexLngObj[lng]['tokenSaleDetails#28'] }</p>
//             <p className="span">{ indexLngObj[lng]['tokenSaleDetails#29'] }</p>
//             <p className="span">{ indexLngObj[lng]['tokenSaleDetails#30'] }</p>
//           </div>
//         </div>
//         <div className="sb_duo_info_br">
//           <p>{ indexLngObj[lng]['tokenSaleDetails#31'] }</p>
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#32'] }</p>
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#33'] }</p>
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#34'] }</p>
//         </div>
//         <div className="sb_duo_info_br">
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#35'] }</p>
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#36'] }</p>
//           <p className="span">{ indexLngObj[lng]['tokenSaleDetails#37'] }</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const ButtonBuy = () => {
  return(
    <Join
      text={ indexLngObj[lng]['tokenSaleDetails#38'] }
      className="sb"
    />
  );
};

const TokenSaleDetails = props => {
  // const outputValue = props.state ? String(props.state.money).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,') : 0
  return (
    <div className="block_4" id="sale_details">
      <div className="size">
        {/* <h2 className="header_blocks">{ indexLngObj[lng]['tokenSaleDetails#39'] }</h2> */}
          <div className="container">
            <div className="left_block4">
              <TokenInfo />
              <Docs {...props} />
              <ProgressBar props={props.state} />
              <TokenProgressBarSale />
              {/* <div className="progressBar_block4">
                <ProgressBar money={outputValue} percent={5.6}/>
              </div> */}
            </div>
            <div className="right_block4 right_block4_mail-form">
              <MailForm isTokenDetails={true} />
              {/* <TokenDeals />
              <ButtonBuy /> */}
            </div>
            <div className="clear" />
          </div>
          <div className="container">
            <div className="left_block4">
              {/* <div className="progressBar_block4">
                <ProgressBar money={outputValue} percent={5.6}/>
              </div>
              <Docs {...props} /> */}

              <TokenAllocation />
            </div>
            <div className="right_block4">
              {/* <TokenDeals />
              <ButtonBuy /> */}

              <UseProceeds />
            </div>
            <div className="clear" />
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({showDocPopup}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(TokenSaleDetails);

export {connectedContainer as TokenSaleDetails}


