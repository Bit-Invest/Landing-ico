import * as React from 'react';

import { lng, links } from '../../links.js';

import reddit_icon from '../../media/reddit_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';
import telegram_icon_white from '../../media/telegram_icon_white.png';
import WB_icon from '../../media/WB.png';

import './SocIcons.css';

export class SocIcons extends React.Component { 
  constructor() {
    super();

    this.state = {
      menuShow: false,
    };
  }

  componentWillMount() {
    document.onscroll = (e) => {
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      let twoWindowTop = document.getElementById('product').offsetTop;
      
      if (top > twoWindowTop && !this.state.menuShow) {
        this.setState({
          menuShow: true,
        });
      }

      if (twoWindowTop > top && this.state.menuShow) {
        this.setState({
          menuShow: false,
        });
      }
    };
  }

  render() {
    return(
      <div className="socIcons" style={{display: this.state.menuShow ? 'block' : 'none'}}>
        <div className="fixedSocIcon">
          <div className={`socIconsBlock ${lng === 'zn' ? 'twoTl' : ''}`}>
            <a target="_blank" className="item" href={links.soc.reddit}>
              <img className="img" src={reddit_icon} alt="CINDX"/>
            </a>
            <a target="_blank" className="item" href={links.soc.twitter}>
              <img className="img" src={twitter_icon} alt="CINDX"/>
            </a>
            <a target="_blank" className="item" href={links.soc.facebook}>
              <img className="img" src={facebook_icon} alt="CINDX"/>
            </a>
            {
              lng === 'zn' ? (
                <a target="_blank" className="item" href={links.soc.wb}>
                  <img alt="wb link" className="img" src={WB_icon} />
                </a>
              ) : (
                <a target="_blank" className="item" href={links.soc.medium}>
                  <img alt="medium link" className="img" src={medium_icon} />
                </a>
              )
            }
            <a target="_blank" className="item" href={links.soc.linkedin}>
              <img className="img" src={linkedin_icon} alt="CINDX"/>
            </a>
            <a target="_blank" className="item" href={links.soc.telegram}>
              <img className="img_2" src={telegram_icon_white} alt="CINDX"/>
              <span>15k +</span>
            </a>
            {
              lng === 'zn' && (
                <a target="_blank" className="item" rel="noopener noreferrer" href={links.soc.telegram_zn}>
                  <img className="img_3"  alt="wb link" src={telegram_icon_white} />
                  <span>中文</span>
                </a>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}