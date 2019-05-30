import * as React from 'react';
import github_icon from '../../media/github_icon.png';
import reddit_icon from '../../media/reddit_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';
import instagram_icon from '../../media/instagram_icon.png';
import telegram_icon_white from '../../media/telegram_icon_white.png';
import './SocIcons.css';

export const SocIcons = () => (
  <div className="socIcons">
    <div className="fixedSocIcon">
      <div className="socIconsBlock">
        <a target="_blank" href="https://www.github.com/Bit-Invest/Cindx-frontend">
          <img className="img" src={github_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://www.reddit.com/r/cindx/">
          <img className="img" src={reddit_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://twitter.com/CINDXPlatform">
          <img className="img" src={twitter_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://www.facebook.com/cindx.io/">
          <img className="img" src={facebook_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://medium.com/cindx">
          <img className="img" src={medium_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/cindx/">
          <img className="img" src={linkedin_icon} alt="CINDX"/>
        </a>
        <a target="_blank" href="https://t.me/cindx_official">
          <img className="img_2" src={telegram_icon_white} alt="CINDX"/>
        </a>
      </div>
    </div>
  </div>
)
