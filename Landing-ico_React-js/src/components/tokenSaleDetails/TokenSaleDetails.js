import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import './tokenSaleDetails.css';

export const TokenSaleDetails = () => (
  <div className="block_4">
    <div className="size">
      <h2 className="header">Token Sale Details</h2>
        <div className="container">
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
          <div className="clear" />
          <div className="cont_1">
            <p>Token Name: <span>CINX</span></p>
            <p>Token Pre-Sale start: <span>23.07.2018</span></p>
            <p>Total Emission: <span>58.000.000</span></p>
            <p>Price Per Token: <span>$ 1.00</span></p>
            <p>Minimal Goal: <span>$ 6.000.000</span></p>
            <div className="process_bar">
              <div className="proc" />
              <div style={{fontSize: 13, display: 'block', position: 'absolute', left: 0, bottom: '-60px'}}>
                Private <br />round
                <br/>is closed
              </div>
              <div className="left">
                Soft Cap: $6m
              </div>
              <div className="right">
                Hard Cap: $30m
              </div>
            </div>
          </div>
          <a className="sb duo" href="#">buy tokens</a>
          <div className="cont_2">
            <h2>Token Deals</h2>
            <p>Token Pre-Sale:</p>
            <span>23.07.2018</span>
            <p>Join the Token Pre-Sale to </p>
            <p>receive a limited time 25% bonus</p>
            <span>Token Sale Bonuses</span>
            <p>Week One: 15% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Four: 5% Bonus</p>
            <p>Week Two: 10% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Five: 3% Bonus</p>
            <p>Week Three: 7% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Six: No Bonus</p>
            <a className="sb" href="#">BUY TOKENS</a>
          </div>
          <div className="clear" />
          <div className="cont_5">
            <div className="row">
              <img src={block_3_ico_1} alt={"CINDEX"}/>
              <span>WHITEPAPER</span>
            </div>
            <div className="row">
              <img src={block_3_ico_2} alt={"CINDEX"}/>
              <span>PRESENTATION</span>
            </div>
            <div className="row">
              <img src={block_3_ico_1} alt={"CINDEX"}/>
              <span>ONE PAGER</span>
            </div>
          </div>
          <div className="cont_5">
            <div className="row">
              <img src={block_3_ico_3} alt={"CINDEX"}/>
              <span>FINANCIAL  MODEL</span>
            </div>
            <div className="row">
              <img src={block_3_ico_1} alt={"CINDEX"}/>
              <span>LEGAL DOCS</span>
            </div>
          </div>
          <div className="clear" />
        </div>
    </div>
  </div>
)
