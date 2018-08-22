import * as React from 'react';
import './ProgressBarSale.css';

export const ProgressBarSale = () => {
  // const currentDate = new Date(2018, 9, 16)
  // const startDate = new Date(2018, 7, 24)
  // const finishDate = new Date(2018, 11, 19)
  // const currentProgress = ((currentDate - startDate) * 100) / (finishDate - startDate)

  return (
    <div className="progressBarSale">
      <div className="container">
        <div className="left-block-bonuses">
          <div>Bonuses</div>
          <div>in CINX</div>
        </div>
        <div className='saleName'>
          <p className="pre-sale">Pre-Sale</p>
          <p className="sale-bonusses">Sale</p>
          <p className="cinx">1 CINX = $1</p>
        </div>
        <div className="progressBar">{/* <div className="progress" style={{ width: currentProgress > 0 ? (currentProgress - 3) + '%' : '0%' }}></div> */}</div>
        <div className="progress-data">
          <div className="data">
            <p className="amount">1.25</p>
            <p>Aug 26</p>
          </div>
          <div className="data">
            <p className="amount">1.20</p>
            <p>Sep 17</p>
          </div>
          <div className="data">
            <p className="amount">1.17</p>
            <p>Oct 8</p>
          </div>
          <div className="data">
            <p className="amount">1.15</p>
            <p>Oct 22</p>
          </div>
          <div className="data">
            <p className="amount">1.13</p>
            <p>Nov 6</p>
          </div>
          <div className="data">
            <p className="amount">1.10</p>
            <p>Nov 19</p>
          </div>
          <div className="data">
            <p className="amount">1.05</p>
            <p>Dec 3</p>
          </div>
          <div className="data">
            <p className="amount">1.00</p>
            <p>Dec 17</p>
          </div>
        </div>
      </div>
    </div>
  )
}
