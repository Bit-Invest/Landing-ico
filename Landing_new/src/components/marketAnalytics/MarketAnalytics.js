import * as React from 'react';
import block_3_img from '../../images/block_3_img_1@2x.png';
import block_3_img2 from '../../images/block_3_img_2@2x.png';
import block_3_img3 from '../../images/block_3_img_3@2x.png';
import block_3_man from '../../images/block_3_man.png';
import {links, ab_val} from '../../links.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showDocPopup } from '../../store/store';
import Slider from "react-slick";
import './MarketAnalytics.css';
import { lng } from '../../links.js'
import indexLngObj from '../../lngs/index'

const MarketAnalytics = props => {
  const openPopup = (e) => {
    if (ab_val === '1') {
      e.preventDefault()
      props.showDocPopup('')
    }
  }

  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    lazyLoad: true,
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
              <a target="_blank" className="reference" href={links.common.marketAnalytics1}>{indexLngObj[lng]['marketAnalytics#21']}</a>
            </div>
            <div className="item">
              <h3>{ indexLngObj[lng]['marketAnalytics#3'] }</h3>
              <img src={block_3_img2} alt={"block_3_img2"}/>
              <a target="_blank" className="reference" href={links.common.marketAnalytics2}>{indexLngObj[lng]['marketAnalytics#22']}</a>
            </div>
            <div className="item">
              <h3>{ indexLngObj[lng]['marketAnalytics#4'] }</h3>
              <img src={block_3_img3} alt={"block_3_img3"}/>
              <a target="_blank" className="reference" href={links.common.marketAnalytics3}>{indexLngObj[lng]['marketAnalytics#23']}</a>
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
            <div>{ indexLngObj[lng]['marketAnalytics#_9'] }</div>
            <br />
            <div>{ indexLngObj[lng]['marketAnalytics#_10'] }</div>
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
                <a target="_blank" className="reference" href={links.common.marketAnalytics1}>{indexLngObj[lng]['marketAnalytics#21']}</a>
              </div>
              <div className="item">
                <h3>{ indexLngObj[lng]['marketAnalytics#3'] }</h3>
                <img src={block_3_img2} alt={"block_3_img2"}/>
                <a target="_blank" className="reference" href={links.common.marketAnalytics2}>{indexLngObj[lng]['marketAnalytics#22']}</a>
              </div>
              <div className="item">
                <h3>{ indexLngObj[lng]['marketAnalytics#4'] }</h3>
                <img src={block_3_img3} alt={"block_3_img3"}/>
                <a target="_blank" className="reference" href={links.common.marketAnalytics3}>{indexLngObj[lng]['marketAnalytics#23']}</a>
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
              <div>{ indexLngObj[lng]['marketAnalytics#_9'] }</div>
              <br />
              <div>{ indexLngObj[lng]['marketAnalytics#_10'] }</div>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({showDocPopup}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(MarketAnalytics);

export {connectedContainer as MarketAnalytics};
