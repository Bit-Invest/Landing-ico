import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';

import { links } from '../../links.js';
import { Join } from '../../links.js';

import { ProgressBar } from '@components/progressBar';

import './tokenSaleDetails.css';

const TokenAllocation = () => {
  return(
    <div className="cont_3">
      <h2>Token Allocation</h2>
      <hr/>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '14%'}} />
          <div className="num">12%</div>
        </div>
        <p>Team</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '8%'}} />
          <div className="num">6%</div>
        </div>
        <p>Bounty</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '8%'}} />
          <div className="num">6%</div>
        </div>
        <p>Advisers</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '9%'}} />
          <div className="num">7%</div>
        </div>
        <p>Reserve</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '5%'}} />
          <div className="num">3%</div>
        </div>
        <p>Traders Recruitment Program</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '7%'}} />
          <div className="num">5%</div>
        </div>
        <p>Token Liquidity Support</p>
      </div>
      <div className="row">
        <div className="process_bar">
          <div className="proc" style={{width: '63%'}} />
          <div className="num">61%</div>
        </div>
        <p>Available for Sale</p>
      </div>
    </div>
  );
};

const TokenInfo = () => {
  return(
    <div className="cont_1">
      <p>Token Name: <span>CINX</span></p>
      <p>Token Pre-Sale start: <span>26.08.2018</span></p>
      <p>Total Emission: <span>51.500.000</span></p>
      <p>Price Per Token: <span>$ 1.00=1.00</span></p>
      <p><span>CINXO=1.00 CINX</span></p>
      <p>Minimal Investment: <span>$ 50 equivalent</span></p>
    </div>
  );
};

const Docs = () => {
  return(
    <div className="cont_5">
      <div className="row">
        <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.wp}><span>WHITEPAPER</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.pr}><span>PRESENTATION</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.op}><span>ONE PAGER</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.fm}><span>FINANCIAL  MODEL</span></a>
      </div>
      <div className="row">
        <a target="_blank" href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
        <a target="_blank" href={links.ld}><span>LEGAL DOCS</span></a>
      </div>
    </div>
  );
};

const UseProceeds = () => {
  return(
    <div className="cont_4">
      <h2>Use of Proceeds</h2>
      <hr/>
      <div className="graph">
        <ul>
          <li><span /> Marketing and PR 18%</li>
          <li><span /> Research and Development 44%</li>
          <li><span /> Legal expenses 9%</li>
          <li><span /> Operations 26%</li>
          <li><span /> Bonus for traders 3%</li>
        </ul>
      </div>
    </div>
  );
};

const TokenDeals = () => {
  return(
    <div className="cont_2">
      <h2>Token Deals</h2>
      <hr />
      <div className="sb_duo_info">
        <div>
          <div className="sb_duo_info_br">
            <p>Token Sale:</p>
            <p className="span">26.08 - 26.12</p>
          </div>
        </div>
        <div>
          <div className="sb_duo_info_br">
            <p>Token Pre-Sale Bonuses:</p>
            <p className="span">Aug 26 - Sep 16 - 25% Bonus</p>
            <p className="span">Sep 17 - Oct 7 - 20% Bonus</p>
          </div>
        </div>
        <div className="sb_duo_info_br">
          <p>Token Main Sale Bonuses:</p>
          <p className="span">Oct 8 - Oct 21 - 17% Bonus</p>
          <p className="span">Oct 22 - Nov 4 - 15% Bonus</p>
          <p className="span">Nov 6 - Nov 18 - 13% Bonus</p>
        </div>
        <div className="sb_duo_info_br">
          <p className="span">Nov 19 - Dec 2 - 10% Bonus</p>
          <p className="span">Dec 3 - Dec 16 - 5% Bonus</p>
          <p className="span">Dec 17 - Dec 26 - 0% Bonus</p>
        </div>
      </div>
      <Join 
        text="BUY TOKENS"
        className="sb"
      />
    </div>
  );
};

const ButtonBuy = () => {
  return(
    <Join 
      text="buy tokens"
      className="sb"
    />
  );
};

export const TokenSaleDetails = () => (
  <div className="block_4" id="sale_details">
    <div className="size">
      <h2 className="header_blocks">Token Sale Details</h2>
        <div className="container">
          <div className="left_block4">
            <TokenAllocation />
            <TokenInfo />
            <div className="progressBar_block4">
              <ProgressBar money="1.053,972" percent="4"/>
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
