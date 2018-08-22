import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import {links} from '../../links.js';
import play_button_youtube from '../../media/play_button_youtube.png';
import './cryptoAssetsManagement.css';

class CryptoAssetsManagement extends React.Component {
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
              CINDX Is a Crypto Asset Management Hub
            </h2>
            {/* <div className="video" onClick={() => this.showVideoInPopUp('https://www.youtube.com/embed/ZLA5tMEJS7M')}>
              <img
                src={play_button_youtube}
                alt="CINDEX"
                className="play"

              />
            </div> */}
          </div>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">СINDX.MARKETPLACE FOR INVESTORS</p>
              <hr/>
              <p>
              • Don’t worry about your knowledge and experience – the experts of crypto trading are here to help you
              </p>
              <p>
                • Control your currency: your coins are kept in your wallet at all times
              </p>
              <p>
                • Only pay if you earn: you will only be charged fees if your portfolio makes money
              </p>
            </div>
            <div className="video_block">
              <div className="mockup1"></div>
              <a target="_blank" href={links.mvp} className="btn">TEST MVP</a>
            </div>
          </div>
          <div className="problemBlock problemBlockMobile">
            <div className="video_block">
              <div className="mockup2"></div>
              <a target='_blank' href={links.mvp} className="btn">TEST MVP</a>
            </div>
            <div className="txt2">
              <p className="caption">CINDX.TRADE FOR TRADERS</p>
              <hr/>
              <p>
                • You can attract capital with $0 marketing costs
              </p>
              <p>
                • We provide you with Terminal, App Store, marketplace and other advanced tools to succeed in trading.
              </p>
              <p>
              • CINDX helps to monetize your reputation and expertise. Your trade history and influence are transparent.
              </p>
            </div>
          </div>
          <div className="problemBlock">
            <div className="txt">
              <p className="caption">CINDX.TALK, CINDX.HUB & CINDX.DAO</p>
              <hr/>
              <p>
                • CINDX.talk - a social network with a reward for useful content
              </p>
              <p>
                • CINDX.hub - the component includes a vendor’s account, as well as a hub for testing and integrating third-party software
              </p>
              <p>
                • CINDX.dao - a component that allows you to implement a voting system for the community based on decentralised autonomous organisation rules
              </p>
            </div>
            <div className='video_block'>
              <div className="mockup3"></div>
              <a target="_blank" href={links.mvp} className="btn">TEST MVP</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(CryptoAssetsManagement);

export {connectedContainer as CryptoAssetsManagement};
