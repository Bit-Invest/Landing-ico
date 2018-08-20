import * as React from 'react';
import './ProgressBarSale.css';

export const ProgressBarSale = () => (
  <div className="progressBarSale">
    <div className="container">
      <div className='saleName'>
        <p className="pre-sale">Pre-Sale</p>
        <p className="sale-bonusses">Sale Bonuses</p>
        <p className="cinx">CINX</p>
      </div>
      <div className="progressBar">{/*<div className="progress"></div>*/}</div>
      <div className="progress-data">
        <div className="data">
          <p className="amount">1.25</p>
          <p>Sep 16</p>
        </div>
        <div className="data">
          <p className="amount">1.20</p>
          <p>Oct 7</p>
        </div>
        <div className="data">
          <p className="amount">1.17</p>
          <p>Oct 21</p>
        </div>
        <div className="data">
          <p className="amount">1.15</p>
          <p>Nov 4</p>
        </div>
        <div className="data">
          <p className="amount">1.12</p>
          <p>Nov 18</p>
        </div>
        <div className="data">
          <p className="amount">1.10</p>
          <p>Dec 2</p>
        </div>
        <div className="data">
          <p className="amount">1.07</p>
          <p>Dec 16</p>
        </div>
        <div className="data">
          <p className="amount">1.05</p>
          <p>Dec 26</p>
        </div>
      </div>
    </div>
  </div>
)
