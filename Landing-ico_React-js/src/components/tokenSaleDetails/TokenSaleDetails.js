import * as React from 'react';

export const TokenSaleDetails = () => (
  <div className="block_4">
        <div className="size">
          <div className="cont_1">
            <h2>ICO Details</h2>
            <p>Token Name: <span>CINX</span></p>
            <p>Token Pre-Sale start: <span>23.07.2018</span></p>
            <p>Total Emission: <span>58.000.000</span></p>
            <p>Price Per Token: <span>$ 1.00</span></p>
            <p>Minimal Goal: <span>$ 6.000.000</span></p>
          </div>
          <a className="sb duo" href="#">buy tokens</a>
          <div className="cont_2">
            <div className="process_bar">
              <div className="proc" />
              <div style={{fontSize: 13, display: 'block', position: 'absolute', left: 0, bottom: '-60px'}}>
                Private <br />round
                <br />is closed
              </div>
              <div className="left">
                Soft Cap: $6m
              </div>
              <div className="right">
                Hard Cap: $30m
              </div>
            </div>
            <h2>Token Deals</h2>
            <p>Token Pre-Sale:</p>
            <p><span>23.07.2018</span></p>
            <p>Join the Token Pre-Sale to </p>
            <p>receive a limited time 25% bonus</p>
            <p><span>Token Sale Bonuses</span></p>
            <p>Week One: 15% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Four: 5% Bonus</p>
            <p>Week Two: 10% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Five: 3% Bonus</p>
            <p>Week Three: 7% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Six: No Bonus</p>
            {/*
				<p>Token Sale starts:</p>
				<p><span>6 June 2018</span></p>
				<p>Token Sale bonuses will depend on</p>
				<p>number of tokens for sale.</p>
*/}
          </div>
          <div className="cont_3">
            <h2>Token Allocation</h2>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '14%'}} />
              </div>
              <div className="num">12%</div>
              <p>Team</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '8%'}} />
              </div>
              <div className="num">6%</div>
              <p>Bounty</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '8%'}} />
              </div>
              <div className="num">6%</div>
              <p>Advisers</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '9%'}} />
              </div>
              <div className="num">7%</div>
              <p>Reserve</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '5%'}} />
              </div>
              <div className="num">3%</div>
              <p>Traders Recruitment Program</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '7%'}} />
              </div>
              <div className="num">5%</div>
              <p>Token Liquidity Support</p>
            </div>
            <div className="row">
              <div className="process_bar">
                <div className="proc" style={{width: '63%'}} />
              </div>
              <div className="num">61%</div>
              <p>Available for Sale</p>
            </div>
          </div>
          <div className="clear" />
          <div className="cont_4">
            <h2>Use of Proceeds</h2>
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
          <div className="cont_5">
            <div className="row">
              <img src="files/images/block_3_ico_1.png" />
              <span>WHITEPAPER</span>
            </div>
            <div className="row">
              <img src="files/images/block_3_ico_2.png" />
              <span>PRESENTATION</span>
            </div>
            <div className="row">
              <img src="files/images/block_3_ico_1.png" />
              <span>ONE PAGER</span>
            </div>
            <div className="row">
              <img src="files/images/block_3_ico_3.png" />
              <span>FINANCIAL  MODEL</span>
            </div>
            <div className="row">
              <img src="files/images/block_3_ico_1.png" />
              <span>LEGAL DOCS</span>
            </div>
          </div>
          <div className="clear" />
          <a className="sb" href="#">BUY TOKENS</a>
          <div className="clear" />
        </div>
      </div>
)
