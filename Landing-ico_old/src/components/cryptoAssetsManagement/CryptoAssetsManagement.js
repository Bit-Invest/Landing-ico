import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import {links} from '../../links.js';
import play_button_youtube from '../../media/play_button_youtube.png';
import './cryptoAssetsManagement.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'
import PopUpDisc from '../popUpDisc/PopUpDisc'

class CryptoAssetsManagement extends React.Component {
  state = {
    isOpenDisc: true
  }
  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  render() {
    const { props } = this;

    return(
      <div name="product" id="product" className="cryptoAssetsManagement">
        <div className="size">
          <div className="row">
            <h2 className="header_blocks">
              { indexLngObj[lng]['cryptoAssetsManagement#1.1'] }
              <br/>
              { indexLngObj[lng]['cryptoAssetsManagement#1.2'] }
            </h2>
            <div className="video" onClick={() => this.showVideoInPopUp('https://www.youtube.com/embed/nmh_BfGHORE')}>
              <img
                src={play_button_youtube}
                alt="CINDEX"
                className="play"

              />
            </div>
          </div>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">{ indexLngObj[lng]['cryptoAssetsManagement#2'] }</p>
              <hr/>
              <p>
              • { indexLngObj[lng]['cryptoAssetsManagement#3'] }
              </p>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#4'] }
              </p>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#5'] }
              </p>
            </div>
            <div className="video_block">
              <div className="mockup1"></div>
              <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
            </div>
          </div>
          <div className="problemBlock problemBlockMobile">
            <div className="video_block">
              <div className="mockup2"></div>
              <a target='_blank' href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
            </div>
            <div className="txt2">
              <p className="caption">{ indexLngObj[lng]['cryptoAssetsManagement#7'] }</p>
              <hr/>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#8'] }
              </p>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#9'] }
              </p>
              <p>
              • { indexLngObj[lng]['cryptoAssetsManagement#10'] }
              </p>
            </div>
          </div>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">{ indexLngObj[lng]['cryptoAssetsManagement#11'] }</p>
              <hr/>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#12'] }
              </p>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#13'] }
              </p>
              <p>
                • { indexLngObj[lng]['cryptoAssetsManagement#14'] }
              </p>
            </div>
            <div className='video_block'>
              <div className="mockup3"></div>
              <a target="_blank" href={links.mvp} className="btn">{ indexLngObj[lng]['cryptoAssetsManagement#6'] }</a>
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
