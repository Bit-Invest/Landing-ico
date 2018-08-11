import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import './TeamLegal.css';

export const TeamLegal = () => (
  <div className="teamLegal">
    <h2>And We Have A Great Team and Legal</h2>
    <div className="container">
      <div className="left">
        <div className='row'>
          <div className="LC">
            <div className="img"></div>
            <p>Лицензия 1</p>
          </div>
          <div className="LC">
            <div className="img"></div>
            <div>Лицензия 2</div>
          </div>
        </div>
        <div className='row'>
          <div className="LC">
            <div className="img"></div>
            <div>Лицензия 3</div>
          </div>
          <div className="LC">
            <div className="img"></div>
            <div>Лицензия 4</div>
          </div>
        </div>
        <div className="dock_block">
          <div className="dock">
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
          <div className="dock">
            <div className="row">
              <img src={block_3_ico_3} alt={"CINDEX"}/>
              <span>FINANCIAL  MODEL</span>
            </div>
            <div className="row">
              <img src={block_3_ico_1} alt={"CINDEX"}/>
              <span>LEGAL DOCS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  </div>
)
