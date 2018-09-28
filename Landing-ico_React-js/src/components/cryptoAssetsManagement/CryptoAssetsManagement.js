import * as React from 'react';
import Slider from 'react-slick'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import crypto0 from '../../images/crypto/crypto1.png'
import crypto1 from '../../images/crypto/crypto2.png'
import crypto2 from '../../images/crypto/crypto3.png'
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
    text3: indexLngObj[lng]['cryptoAssetsManagement#5'],
    mobileSrc: crypto0
  },
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#7'],
    text1: indexLngObj[lng]['cryptoAssetsManagement#8'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#9'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#10'],
    mobileSrc: crypto1
  },
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#11'],
    text1: indexLngObj[lng]['cryptoAssetsManagement#12'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#13'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#14'],
    isMockup: true,
    mobileSrc: crypto2
  }
]

const cryptoArr = [
  crypto0,
  crypto1,
  crypto2
]

class CryptoAssetsManagement extends React.Component {
  state = {
    isOpenDisc: true,
    currentCrypto: 0,
    isChange: false,
    isDefault: true,
    autoPlayInterval: null,
    widthScreen: null
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._handlerResize)
    this._handlerResize()
  //   const autoPlayInterval = setInterval(() => {
  //     this.nextSlide()
  //   }, 2500)

  //   this.setState({ autoPlayInterval: autoPlayInterval })
  }

  // componentWillUnmount = () => {
  //   clearInterval(this.state.autoPlayInterval)
  // }

  _handlerResize = () => {
    this.setState({
      widthScreen: window.innerWidth
    })
  }

  renderImgSlides = () => {
    let currentCryptoArr = []
    let svgBg = null

    if (!this.state.isDefault) {
      switch(this.state.currentCrypto) {
        case 0:
          currentCryptoArr = [ crypto2, crypto0, crypto1]
          break;
        case 1:
          currentCryptoArr = [ crypto0, crypto1, crypto2]
          break;
        case 2:
          currentCryptoArr = [ crypto1, crypto2, crypto0]
          break;
        default:
          currentCryptoArr = cryptoArr
          break;
      }
    } else {
      currentCryptoArr = cryptoArr
    }
    
    if (this.state.widthScreen > 1439) {
      svgBg = (
        <div className="problemBlock__more-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 573 435" preserveAspectRatio="none">
            <polygon fill="rgba(255,255,255,0.5)" points="0,437 85,52 573,0 500,430"/>
          </svg>
          <div className="more-block__search-icon"></div>
        </div>
      )
    } else if (this.state.widthScreen > 1023) {
      svgBg = (
        <div className="problemBlock__more-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391 298" preserveAspectRatio="none">
            <polygon fill="rgba(255,255,255,0.5)" points="0,298 85,52 391,0 391,298"/>
          </svg>
          <div className="more-block__search-icon"></div>
        </div>
      )
    }
    
    return currentCryptoArr.map((el, i) => {
      const animation0 = this.state.isChange && i === 0 ? 'problemBlock__slide-animation-0' : ''
      const animation1 = this.state.isChange && i === 1 ? 'problemBlock__slide-animation-1' : ''
      const animation2 = this.state.isChange && i === 2 ? 'problemBlock__slide-animation-2' : ''

      return (
        <div className={`problemBlock__slide problemBlock__slide-${i} ${animation0} ${animation1} ${animation2}`} key={i}>
          { i === 0 ? svgBg : null }
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
              <div className="problemBlock__wrapper-mockup">
                { el.isMockup ?
                  <div className='video-block'>
                    <div className='mockup3'></div>
                  </div> :
                  null
                }
                <div className="problemBlock__content-p">
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
          </div>
        </div>
      )
    })
  }

  renderMobileProblemBlock = () => {
    return problemData.map((el, i) => {
      return (
        <div className="problemBlock__wrapper-problem" key={i}>
          <div className="problemBlock__wrapper-img">
            <img src={el.mobileSrc} />
          </div>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">{ el.header }</p>
              <hr/>
              { el.isMockup ?
                <div className='video-block'>
                  <div className='mockup3'></div>
                </div> :
                null
              }
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

  nextSlide = () => {
    this.slider.slickNext()
    if (this.slider.innerSlider.state.currentSlide === cryptoArr.length - 1)
      this.slider.props.afterChange(0)
    else
      this.slider.props.afterChange(this.slider.innerSlider.state.currentSlide + 1)
  }

  prevSlide = () => {
    this.slider.slickPrev()
    if (this.slider.innerSlider.state.currentSlide === 0)
      this.slider.props.afterChange(cryptoArr.length - 1)
    else
      this.slider.props.afterChange(this.slider.innerSlider.state.currentSlide - 1)
  }

  dotsSlide = (i) => {
    this.slider.slickGoTo(i)
    this.slider.props.afterChange(i)
  }

  render() {
    const { props } = this;

    const settings = {
      arrows: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      fade: true,
      adaptiveHeight: true,
      beforeChange: () => {
        this.setState({
          isChange: true
        })
      },
      afterChange: (i) => {
        this.setState({
          currentCrypto: i,
          isChange: false,
          isDefault: false
        })
      }
    }

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
              <div className="problemBlock__desktop">
                <Slider ref={slider => this.slider = slider} { ...settings }>
                  { this.renderProblemBlock() }
                </Slider>
              </div>
              <div className="problemBlock__mobile">
                <Slider { ...settings }>
                  { this.renderMobileProblemBlock() }
                </Slider>
              </div>
              <div className={`video_block ${this.state.currentCrypto === 2 ? 'video_block_last' : ''}`}>
                <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
              </div>
              <div className="video_block problemBlock__switch-slide">
                <div className="problemBlock__arrow problemBlock__left-arrow" onClick={this.prevSlide}></div>
                <div className="problemBlock__dots">
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 0 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(0)}></span>
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 1 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(1)}></span>
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 2 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(2)}></span>
                </div>
                <div className="problemBlock__arrow problemBlock__right-arrow" onClick={this.nextSlide}></div>
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
