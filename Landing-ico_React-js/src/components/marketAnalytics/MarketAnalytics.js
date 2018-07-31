import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import block_3_img from '../../images/block_3_img_1@2x.png';
import block_3_img2 from '../../images/block_3_img_2@2x.png';
import block_3_img3 from '../../images/block_3_img_3@2x.png';
import block_3_man from '../../images/block_3_man.png';

export const MarketAnalytics = () => (
  <div className="block_3">
    <div className="size">
      <h2>
        Market Analytics
      </h2>
      <div className="clear" />
      <div className="owl_1 owl-carousel owl-theme">
        <div className="item">
          <h3>Global Aum</h3>
          <img src={block_3_img} alt={"block_3_img"}/>
        </div>
        <div className="item">
          <h3>Investment</h3>
          <img src={block_3_img2} alt={"block_3_img2"}/>
        </div>
        <div className="item">
          <h3>Rise of capital</h3>
          <img src={block_3_img3} alt={"block_3_img3"}/>
        </div>
      </div>
      <div className="clear" />
      <div className="other_text">
        <div className="cont_1">
          Since 2000, the global trust management market has grown <br />by more than 250%. <br /><br />This is the result of constant improvements in market tools <br />and the general development <br />of market structuring.
        </div>
        <div className="cont_2">
          Despite the explosive growth <br />of the cryptocurrency market in 2017, <br />the industry is still in its infancy. <br /><br />The total market capitalization was $600 billion at the end of 2017 — just 1% of the trust management industry total market capitalization.
        </div>
        <div className="cont_3">
          <div className="row">
            <img src={block_3_ico_1} alt={"block_3_ico_1"}/>
            <span>WHITEPAPER</span>
          </div>
          <div className="row">
            <img src={block_3_ico_2} alt={"block_3_ico_2"}/>
            <span>PRESENTATIOM</span>
          </div>
          <div className="row">
            <img src={block_3_ico_1} alt={"block_3_ico_1"}/>
            <span>ONE PAGER</span>
          </div>
          <div className="row">
            <img src={block_3_ico_3} alt={"block_3_ico_3"}/>
            <span>FINANCIAL MODEL</span>
          </div>
        </div>
        <div className="clear" />
      </div>
      <div className="other_geo">
        <h2>Geographic Scope</h2>
        <div className="cont_row">
          <div className="row">
            25 million potential blockchain wallets
          </div>
          <div className="row">
            200,000 potential transactions every day
          </div>
          <div className="row">
            More than 225 <br />
            potential partners,<br />
            each with $3-5 billion
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  </div>
)
