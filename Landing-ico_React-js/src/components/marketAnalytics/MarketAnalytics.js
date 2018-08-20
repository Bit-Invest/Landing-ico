import * as React from 'react';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import block_3_img from '../../images/block_3_img_1@2x.png';
import block_3_img2 from '../../images/block_3_img_2@2x.png';
import block_3_img3 from '../../images/block_3_img_3@2x.png';
import block_3_man from '../../images/block_3_man.png';
import {links} from '../../links.js';
import Slider from "react-slick";
import './MarketAnalytics.css';

export const MarketAnalytics = () => {
  const settings = {
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  };
  return (
    <div className="block_3">
      <div className="size">
        <h2 className="header_blocks">
          Market Analytics
        </h2>
        <div className="statick">
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
            Since 2000, the global trust management market has grown by more than 250%. <br /><br />This is the result of constant improvements in market tools and the general development of market structuring.
          </div>
          <div className="cont_2">
            Despite the explosive growth <br />of the cryptocurrency market in 2017, <br />the industry is still in its infancy. <br /><br />The total market capitalization was $600 billion at the end of 2017 — just 1% of the trust management industry total market capitalization.
          </div>
          <div className="cont_3">
            <div className="row">
              <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
              <a target="_blank" href={links.wp}><span>WHITEPAPER</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"block_3_ico_2"}/></a>
              <a target="_blank" href={links.pr}><span>PRESENTATIOM</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
              <a target="_blank" href={links.op}><span>ONE PAGER</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"block_3_ico_3"}/></a>
              <a target="_blank" href={links.fm}><span>FINANCIAL MODEL</span></a>
            </div>
          </div>
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
                More than 225 potential partners, each with $3-5 billion
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="carusel">
          <div className="owl_1 owl-carousel owl-theme">
            <Slider {...settings}>
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
            </Slider>
          </div>
          <div className="clear" />
          <div className="carusel_txt">
            <div className="cont_1">
              Since 2000, the global trust management market has grown <br />by more than 250%. <br /><br />This is the result of constant improvements in market tools <br />and the general development <br />of market structuring.
            </div>
            <br/>
            <div className="cont_2">
              Despite the explosive growth <br />of the cryptocurrency market in 2017, <br />the industry is still in its infancy. <br /><br />The total market capitalization was $600 billion at the end of 2017 — just 1% of the trust management industry total market capitalization.
            </div>
            <div className="cont_3">
              <div className="row">
                <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
                <a target="_blank" href={links.wp}><span>WHITEPAPER</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"block_3_ico_2"}/></a>
                <a target="_blank" href={links.pr}><span>PRESENTATIOM</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
                <a target="_blank" href={links.op}><span>ONE PAGER</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"block_3_ico_3"}/></a>
                <a target="_blank" href={links.fm}><span>FINANCIAL MODEL</span></a>
              </div>
            </div>
            <div className="clear" />
          <div className="other_geo">
            <h2>Geographic Scope</h2>
            <div className="text">
              <div className="row">
                25 million potential<br/> blockchain wallets
              </div>
              <div className="row">
                200,000 potential<br/> transactions every day
              </div>
              <div className="row">
                More than 225
                potential<br/> partners,
                each with $3-5 billion
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
