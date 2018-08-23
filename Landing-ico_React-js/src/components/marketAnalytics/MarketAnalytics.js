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
import { lng } from '../../links.js'
import indexLngObj from '../../lngs/index'

export const MarketAnalytics = () => {
  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  };
  return (
    <div className="block_3">
      <div className="size">
        <h2 className="header_blocks">
          { indexLngObj[lng]['marketAnalytics#1'] }
        </h2>
        <div className="statick">
          <div className="clear" />
          <div className="owl_1 owl-carousel owl-theme">
            <div className="item">
              <h3>{ indexLngObj[lng]['marketAnalytics#2'] }</h3>
              <img src={block_3_img} alt={"block_3_img"}/>
            </div>
            <div className="item">
              <h3>{ indexLngObj[lng]['marketAnalytics#3'] }</h3>
              <img src={block_3_img2} alt={"block_3_img2"}/>
            </div>
            <div className="item">
              <h3>{ indexLngObj[lng]['marketAnalytics#4'] }</h3>
              <img src={block_3_img3} alt={"block_3_img3"}/>
            </div>
          </div>
          <div className="clear" />
          <div className="other_text">
          <div className="cont_1">
            <div>{ indexLngObj[lng]['marketAnalytics#5'] }</div>
            <br />
            <div>{ indexLngObj[lng]['marketAnalytics#6'] }</div>
          </div>
          <div className="cont_2">
            <div>{ indexLngObj[lng]['marketAnalytics#7'] }</div>
            <br />
            <div>{ indexLngObj[lng]['marketAnalytics#8'] }</div>
          </div>
          <div className="cont_3">
            <div className="row">
              <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
              <a target="_blank" href={links.wp}><span>{ indexLngObj[lng]['marketAnalytics#9'] }</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"block_3_ico_2"}/></a>
              <a target="_blank" href={links.pr}><span>{ indexLngObj[lng]['marketAnalytics#10'] }</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
              <a target="_blank" href={links.op}><span>{ indexLngObj[lng]['marketAnalytics#11'] }</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"block_3_ico_3"}/></a>
              <a target="_blank" href={links.fm}><span>{ indexLngObj[lng]['marketAnalytics#12'] }</span></a>
            </div>
            <div className="row">
              <a target="_blank" href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
              <a target="_blank" href={links.ld}><span>{ indexLngObj[lng]['marketAnalytics#13'] }</span></a>
            </div>
          </div>
          </div>
          <div className="other_geo">
            <h2>{ indexLngObj[lng]['marketAnalytics#14'] }</h2>
            <div className="cont_row">
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#15'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#16'] }</span>
              </div>
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#17'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#18'] }</span>
              </div>
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#19'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#20'] }</span>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="carusel">
          <div className="owl_1 owl-carousel owl-theme">
            <Slider {...settings}>
              <div className="item">
                <h3>{ indexLngObj[lng]['marketAnalytics#2'] }</h3>
                <img src={block_3_img} alt={"block_3_img"}/>
              </div>
              <div className="item">
                <h3>{ indexLngObj[lng]['marketAnalytics#3'] }</h3>
                <img src={block_3_img2} alt={"block_3_img2"}/>
              </div>
              <div className="item">
                <h3>{ indexLngObj[lng]['marketAnalytics#4'] }</h3>
                <img src={block_3_img3} alt={"block_3_img3"}/>
              </div>
            </Slider>
          </div>
          <div className="clear" />
          <div className="carusel_txt">
            <div className="cont_1">
              <div>{ indexLngObj[lng]['marketAnalytics#5'] }</div>
              <br />
              <div>{ indexLngObj[lng]['marketAnalytics#6'] }</div>
            </div>
            <div className="cont_2">
              <div>{ indexLngObj[lng]['marketAnalytics#7'] }</div>
              <br />
              <div>{ indexLngObj[lng]['marketAnalytics#8'] }</div>
            </div>
            <div className="cont_3">
              <div className="row">
                <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
                <a target="_blank" href={links.wp}><span>{ indexLngObj[lng]['marketAnalytics#9'] }</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"block_3_ico_2"}/></a>
                <a target="_blank" href={links.pr}><span>{ indexLngObj[lng]['marketAnalytics#10'] }</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"block_3_ico_1"}/></a>
                <a target="_blank" href={links.op}><span>{ indexLngObj[lng]['marketAnalytics#11'] }</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"block_3_ico_3"}/></a>
                <a target="_blank" href={links.fm}><span>{ indexLngObj[lng]['marketAnalytics#12'] }</span></a>
              </div>
              <div className="row">
                <a target="_blank" href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                <a target="_blank" href={links.ld}><span>{ indexLngObj[lng]['marketAnalytics#13'] }</span></a>
              </div>
            </div>
            <div className="clear" />
          <div className="other_geo">
            <h2>{ indexLngObj[lng]['marketAnalytics#14'] }</h2>
            <div className="text">
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#15'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#16'] }</span>
              </div>
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#17'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#18'] }</span>
              </div>
              <div className="row geo-row">
                <span>{ indexLngObj[lng]['marketAnalytics#19'] }</span>
                <span>{ indexLngObj[lng]['marketAnalytics#20'] }</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
