import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import imageCircle from '../../images/block_4_cont_4_img.png'

import { links, Join, lng } from '../../links.js';
import indexLngObj from '../../lngs/index'

import { ProgressBar } from '@components/progressBar';

import './tokenSaleDetails.css';

const TokenAllocation = () => {
  return(
    <div className="cont_3">
      <h2>{ indexLngObj[lng]['tokenSaleDetails#1'] }</h2>
      <hr/>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '14%'}} />
          <div className="num">12%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#2'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '8%'}} />
          <div className="num">6%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#3'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '9%'}} />
          <div className="num">7%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#4'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '14%'}} />
          <div className="num">12%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#5'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '5%'}} />
          <div className="num">3%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#6'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '11%'}} />
          <div className="num">9%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#7'] }</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '53%'}} />
          <div className="num">51%</div>
        </div>
        <p>{ indexLngObj[lng]['tokenSaleDetails#8'] }</p>
      </div>
    </div>
  );
};

class TokenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false
    }
  }

  openPrompt = () => {
    this.setState({ prompt: !this.state.prompt });
  }


  showPrompt = () => {
    const { prompt } = this.state;
    if ( prompt ) {
      return (
        <div onClick={this.openPrompt} className="prompt">
          <p>
            During the token sale, investors purchase utility tokens – options [CINXO], which give them the right to receive security tokens [CINX] in the future.
          </p>
          <p>
            Security tokens [CINX] will be issued and distributed following the prospect of emission published on the website of FSA of Estonia https://www.fi.ee/ and cindx.io after the end of the token sale, but no later than Q1 2019.
          </p>
          <p>
            The holder of [CINXO] tokens has the right but no obligation to exchange options for security tokens with a ratio of 1:1 after completing the KYC procedure with identification signature, address confirmation and supply of other documents (see the KYC diagram).
          </p>
          <p>
            Tokens [CINXO] grant the same rights as security tokens apart from the right to participate in revenue distribution with a lock-up and voting on the platform.
          </p>
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
        <p>Token Name: <span>CINX</span></p>
        <p>Token Pre-Sale start: <span>26.08.2018</span></p>
        <p>Total Emission: <span>51,500,000</span></p>
        <p>Price Per Token: <span>$ 1.00=1.00</span></p>
        <div className="row">
          <p><span>CINXO=1.00 CINX</span></p>
          <div
            onClick={this.openPrompt}
           className="promptCircle"
          >?</div>
        </div>
        <p>Minimal Investment: <span>$ 50 equivalent</span></p>
        {this.showPrompt()}
      </div>
    );
  }
};

const Docs = () => {
  return(
    <div className="cont_5">
      <div className="row">
        <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.wp}><span>{ indexLngObj[lng]['tokenSaleDetails#15'] }</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.pr}><span>{ indexLngObj[lng]['tokenSaleDetails#16'] }</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.op}><span>{ indexLngObj[lng]['tokenSaleDetails#17'] }</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.fm}><span>{ indexLngObj[lng]['tokenSaleDetails#18'] }</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.ld}><span>{ indexLngObj[lng]['tokenSaleDetails#19'] }</span></a>
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

const TokenDeals = () => {
  return(
    <div className="cont_2">
      <h2>{ indexLngObj[lng]['tokenSaleDetails#26'] }</h2>
      <hr />
      <div className="sb_duo_info">
        <div>
          <div className="sb_duo_info_br">
            <p>{ indexLngObj[lng]['tokenSaleDetails#27'] }</p>
            <p className="span">26.08 - 26.12</p>
          </div>
        </div>
        <div>
          <div className="sb_duo_info_br">
            <p>{ indexLngObj[lng]['tokenSaleDetails#28'] }</p>
            <p className="span">{ indexLngObj[lng]['tokenSaleDetails#29'] }</p>
            <p className="span">{ indexLngObj[lng]['tokenSaleDetails#30'] }</p>
          </div>
        </div>
        <div className="sb_duo_info_br">
          <p>{ indexLngObj[lng]['tokenSaleDetails#31'] }</p>
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#32'] }</p>
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#33'] }</p>
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#34'] }</p>
        </div>
        <div className="sb_duo_info_br">
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#35'] }</p>
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#36'] }</p>
          <p className="span">{ indexLngObj[lng]['tokenSaleDetails#37'] }</p>
        </div>
      </div>
    </div>
  );
};

const ButtonBuy = () => {
  return(
    <Join
      text={ indexLngObj[lng]['tokenSaleDetails#38'] }
      className="sb"
    />
  );
};

export const TokenSaleDetails = () => (
  <div className="block_4" id="sale_details">
    <div className="size">
      <h2 className="header_blocks">{ indexLngObj[lng]['tokenSaleDetails#39'] }</h2>
        <div className="container">
          <div className="left_block4">
            <TokenAllocation />
            <TokenInfo />
            <div className="progressBar_block4">
              <ProgressBar money="1,100,000" percent="4"/>
            </div>
            <Docs />
          </div>
          <div className="right_block4">
            <UseProceeds />
            <TokenDeals />
            <ButtonBuy />
          </div>
          <div className="clear" />
        </div>
    </div>
  </div>
)
