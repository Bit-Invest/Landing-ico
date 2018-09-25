import * as React from 'react';
import Slider from 'react-slick'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import crypto1 from '../../images/crypto/crypto1.png'
import crypto2 from '../../images/crypto/crypto2.png'
import crypto3 from '../../images/crypto/crypto3.png'
import {links} from '../../links.js';
// import play_button_youtube from '../../media/play_button_youtube.png';
import './cryptoAssetsManagement.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'
import PopUpDisc from '../popUpDisc/PopUpDisc'

const problemData = [
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#2'],
    text1: indexLngObj[lng]['cryptoAssetsManagement#3'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#4'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#5']
  },
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#7'],
    text1: indexLngObj[lng]['cryptoAssetsManagement#8'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#9'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#10']
  },
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#11'],
    text1: indexLngObj[lng]['cryptoAssetsManagement#12'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#13'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#14']
  }
]

const cryptoArr = [
  crypto1,
  crypto2,
  crypto3,
]

class CryptoAssetsManagement extends React.Component {
  state = {
    isOpenDisc: true,
    currentCrypto: 0
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }
  
  renderImgSlides = () => {
    return cryptoArr.map((el, i) => {
      return (
        <div className={`problemBlock__slide problemBlock__slide-${i}`} key={i}>
          <div style={{ backgroundImage: `url(${el})` }} className='problemBlock__slide-img'></div>
        </div>
      )
    })
  }

  renderProblemBlock = () => {
    return problemData.map((el, i) => {
      return (
        <div className="problemBlock__wrapper-problem" key={i}>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">{ el.header }</p>
              <hr/>
              <p>
                • { el.text1 }
              </p>
              <p>
                • { el.text2 }
              </p>
              <p>
                • { el.text3 }
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { props } = this;

    const settings = {
      arrows: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
    };

    return (
      <div name="product" id="product" className="cryptoAssetsManagement">
        <div className="size">
          <div className="row">
            <h2 className="header_blocks">
              <span>{ indexLngObj[lng]['cryptoAssetsManagement#1.1'] } </span>
              <span>{ indexLngObj[lng]['cryptoAssetsManagement#1.2'] }</span>
            </h2>
            {/* <div className="video" onClick={() => this.showVideoInPopUp('https://www.youtube.com/embed/nmh_BfGHORE')}>
              <img
                src={play_button_youtube}
                alt="CINDEX"
                className="play"

              />
            </div> */}
          </div>
          <div className="problemBlock__wrapper">
            <div className="problemBlock__slider">
              <Slider { ...settings }>
                { this.renderProblemBlock() }
              </Slider>
              <div className='video_block'>
                <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
              </div>
            </div>
            <div className="problemBlock__img-slides">
              { this.renderImgSlides() }
            </div>
          </div>
        </div>
        {/* <PopUpDisc /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(CryptoAssetsManagement);

export {connectedContainer as CryptoAssetsManagement};
