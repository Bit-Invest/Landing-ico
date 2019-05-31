import * as React from 'react';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import crypto0 from '../../images/crypto/crypto1.png';
import crypto1 from '../../images/crypto/crypto2.png';
import crypto2 from '../../images/crypto/crypto3.png';
import cryptoMore0 from '../../images/crypto/DASHBOARD1111.png';
import cryptoMore1 from '../../images/crypto/DASHBOARD2222.png';
import cryptoMore2 from '../../images/crypto/DASHBOARD3333.png';
import {links} from '../../links.js';
import Rectangle_White_opacity from '../../images/Rectangle_White_opacity.png';
// import play_button_youtube from '../../media/play_button_youtube.png';
import './cryptoAssetsManagement.css';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';

const Popup = (props) => {
  return (
    <div className="popup-for-img" onClick={props.onClick}>
      <div className="popup-for-img__close-bg" ></div>
      <div className="popup-for-img__content">
        <div className="popup-for-img__close"></div>
        <img className="popup-for-img__img" src={props.src} alt="INVISIBLE_IMAGE" />
      </div>
    </div>
  )
}

const problemData = [
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#2'],
    header2: [
      `CINDX.market is a marketplace for investors where they can evaluate and select strategies to follow or index to invest.`,
    ],
    text1: indexLngObj[lng]['cryptoAssetsManagement#3'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#4'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#5'],
    mobileSrc: crypto0
  },
  {
    header: indexLngObj[lng]['cryptoAssetsManagement#7'],
    header2: [
      `CINDX.trade is a module for traders to trade crypto assets on different exchange in one place, analyse the market, automate trading and achieve outstanding gains.`,
      `CINDX uses API for data collection and trades execution. API and secret keys are not less secure than users’ login and password. To protect CINDX users, we keep all the secret API keys in a separate database using bank- level encryption.`,
    ],
    text1: indexLngObj[lng]['cryptoAssetsManagement#8'],
    text2: indexLngObj[lng]['cryptoAssetsManagement#9'],
    text3: indexLngObj[lng]['cryptoAssetsManagement#10'],
    mobileSrc: crypto1
  },
  {
    header: `CINDX.HUB`,
    header2: [
      `CINDX.hub is component for algorithmic strategies creating, historical testing and analysis with the number of ready to use solutions provided.`,
    ],
    text1: `HUB.Pro is an option for professional traders which allows to automate their trading strategies for 24/7 trading and earning.`,
    text2: `HUB.Lite is an option for investors who can work with proven instruments with flexible risk settings.`,
    mobileSrc: crypto2
  }
];

const cryptoArr = [
  {
    preview: crypto1,
    more: cryptoMore1,
  },
  {
    preview: crypto0,
    more: cryptoMore0,
  },
  {
    preview: crypto2,
    more: cryptoMore2,
  },
];

class CryptoAssetsManagement extends React.Component {
  state = {
    isOpen: false,
    currentCrypto: 0,
    isChange: false,
    isDefault: true,
    imageSrc: ''
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  renderImgSlides = () => {
    let currentCryptoArr = []

    if (!this.state.isDefault) {
      switch(this.state.currentCrypto) {
        case 0:
          currentCryptoArr = [
            {
              preview: crypto2,
              more: cryptoMore2
            }, 
            {
              preview: crypto0,
              more: cryptoMore0
            }, 
            {
              preview: crypto1,
              more: cryptoMore1
            }
          ]
          break;
        case 1:
          currentCryptoArr = cryptoArr
          break;
        case 2:
          currentCryptoArr = [
            {
              preview: crypto1,
              more: cryptoMore1
            }, 
            {
              preview: crypto2,
              more: cryptoMore2
            }, 
            {
              preview: crypto0,
              more: cryptoMore0
            }
          ]
          break;
        default:
          currentCryptoArr = cryptoArr
          break;
      }
    } else {
      currentCryptoArr = cryptoArr
    }

    return currentCryptoArr.map((el, i) => {
      const animation0 = this.state.isChange && i === 0 ? 'problemBlock__slide-animation-0' : ''
      const animation1 = this.state.isChange && i === 1 ? 'problemBlock__slide-animation-1' : ''
      const animation2 = this.state.isChange && i === 2 ? 'problemBlock__slide-animation-2' : ''
      const startSlide = this.state.isDefault ? 0 : 1

      return (
        <div className={`problemBlock__slide problemBlock__slide-${i} ${animation0} ${animation1} ${animation2}`} key={i}>
          { i === startSlide ? 
            <div 
              className="problemBlock__slide-more-search" 
              style={{ backgroundImage: `url(${Rectangle_White_opacity})` }}
              onClick={
                () => {
                  if (window.innerWidth >= 1024)
                    this.setState({ isOpen: true, imageSrc: el.more })
                }
              } 
            >
              <span className="more-block__search-icon"></span>
            </div> : 
            null
          }
          <div style={{ backgroundImage: `url(${el.preview})` }} className='problemBlock__slide-img'></div>
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
              {
                el.header2.map((header2Text, index) => (
                  <p className="caption caption2" key={index}>{header2Text}</p>
                ))
              }
              <hr/>
              <div className="problemBlock__wrapper-mockup">
                { el.isMockup ?
                  <div className='video-block'>
                    <div className='mockup3'></div>
                  </div> :
                  null
                }
                { (el.text1 || el.text2 || el.text2) &&
                  (<div className="problemBlock__content-p">
                    { el.text1 &&
                      (<p>
                        • { el.text1 }
                      </p>)
                    }
                    { el.text2 &&
                      (<p>
                        • { el.text2 }
                      </p>)
                    }
                    { el.text3 &&
                      (<p>
                        • { el.text3 }
                      </p>)
                    }
                  </div>)
                }
              </div>
              <div className={`video_block ${this.state.currentCrypto === 2 ? 'video_block_last' : ''}`}>
                <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
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
              <p className="caption caption2">{ el.header2 }</p>
              <hr/>
              { el.isMockup ?
                <div className='video-block'>
                  <div className='mockup3'></div>
                </div> :
                null
              }
              { el.text1 &&
                (<p>
                  • { el.text1 }
                </p>)
              }
              { el.text2 &&
                (<p>
                  • { el.text2 }
                </p>)
              }
              { el.text3 &&
                (<p>
                  • { el.text3 }
                </p>)
              }
            </div>
            <div className={`video_block ${this.state.currentCrypto === 2 ? 'video_block_last' : ''}`}>
              <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
            </div>
          </div>
        </div>
      )
    })
  }

  nextSlide = () => {
    const slider = window.innerWidth > 767 ? this.slider : this.mobileSlider

    slider.slickNext()

    slider.innerSlider.state.currentSlide === cryptoArr.length - 1 ?
      slider.props.afterChange(0) :
      slider.props.afterChange(slider.innerSlider.state.currentSlide + 1)
  }

  prevSlide = () => {
    const slider = window.innerWidth > 767 ? this.slider : this.mobileSlider
  
    slider.slickPrev()

    slider.innerSlider.state.currentSlide === 0 ?
      slider.props.afterChange(cryptoArr.length - 1) :
      slider.props.afterChange(slider.innerSlider.state.currentSlide - 1)
    
    
  }

  dotsSlide = (i) => {
    const slider = window.innerWidth > 767 ? this.slider : this.mobileSlider

    slider.slickGoTo(i)
    slider.props.afterChange(i)
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
      swipeToSlide: false,
      fade: true,
      adaptiveHeight: true,
      beforeChange: () => {
        this.setState({
          isChange: false
        })
      },
      afterChange: (i) => {
        setTimeout(() => {
          this.setState({
            currentCrypto: i,
            isChange: true,
            isDefault: false
          })
        }, 0)
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            fade: false,
            adaptiveHeight: true,
            afterChange: (i) => {
              this.setState({
                currentCrypto: i,
              })
            }
          }
        }
      ]
    }

    return (
      <div name="product" id="product" className="cryptoAssetsManagement">
        <div className="size">
          <div className="row">
            <h2 className="header_blocks">
              <span>{ indexLngObj[lng]['cryptoAssetsManagement#1.1'] } </span>
              <span>{ indexLngObj[lng]['cryptoAssetsManagement#1.2'] }</span>
            </h2>
          </div>
          <div className="problemBlock__wrapper">
            <div className="problemBlock__slider">
              <div className="video_block problemBlock__switch-slide">
                <div className="problemBlock__arrow problemBlock__left-arrow" onClick={this.prevSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" width="30" height="30">
                    <g>
                      <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="#FFFFFF"/>
                    </g>
                  </svg>
                </div>
                <div className="problemBlock__dots">
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 0 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(0)}>MARKET</span>
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 1 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(1)}>TRADE</span>
                  <span className={`problemBlock__dot ${this.state.currentCrypto === 2 ? 'problemBlock__dot-active' : ''}`} onClick={() => this.dotsSlide(2)}>HUB</span>
                </div>
                <div className="problemBlock__arrow problemBlock__right-arrow" onClick={this.nextSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 129 129" width="30" height="30">
                    <g>
                      <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" fill="#FFFFFF"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="problemBlock__desktop">
                <Slider ref={slider => this.slider = slider} { ...settings }>
                  { this.renderProblemBlock() }
                </Slider>
              </div>
              <div className="problemBlock__mobile">
                <Slider ref={slider => this.mobileSlider = slider} { ...settings }>
                  { this.renderMobileProblemBlock() }
                </Slider>
              </div>
            </div>
            <div className="problemBlock__img-slides">
              { this.renderImgSlides() }
            </div>
          </div>
        </div>
        { this.state.isOpen ?
          <Popup
            onClick={() => this.setState({ isOpen: false })}
            src={this.state.imageSrc}
          /> :
          null
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(CryptoAssetsManagement);

export {connectedContainer as CryptoAssetsManagement};
