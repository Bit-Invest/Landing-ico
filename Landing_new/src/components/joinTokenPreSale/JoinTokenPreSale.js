import * as React from 'react';
import './JoinTokenPreSale.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'
import bitcointalk_icon from '../../media/bitcointalk_icon.png';
import youtube_icon from '../../media/youtube_icon.png';
import instagram_icon from '../../media/instagram_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import reddit_icon from '../../media/reddit_icon.png';
import telegram_icon from '../../media/telegram_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';
import github_icon from '../../media/github_icon.png';
import { links } from '../../links.js';
import { Join } from '../../links.js';
import weibo_icon from '../../media/weibo_icon.png';
import wechat_icon from '../../media/wechat_icon.png';
import kakaotalk_icon from '../../media/kakaotalk_icon.png';

export const JoinTokenPreSale = () => (
  <div className="block_9">
    <div className="size">
      {/* <h2 className="header_blocks">{ indexLngObj[lng]['joinTokenPreSale#1'] }</h2> */}
      <div className="container2">
        {/* <Join
          text={ indexLngObj[lng]['joinTokenPreSale#2'] }
          className="sb"
        /> */}
        {/* <a target="_blank" href={links.mvp} className="sb_2">
          { indexLngObj[lng]['joinTokenPreSale#3'] }
        </a> */}
        <div className="icons_wrapper">
          <div className="caption">{ indexLngObj[lng]['joinTokenPreSale#13'] }</div>
          <div className="icon_block">
            <a target="_blank" href="https://bitcointalk.org/index.php?topic=4421275.0">
              <img className="icon" src={bitcointalk_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.youtube.com/cindx">
              <img className="icon" src={youtube_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.instagram.com/cindx.io/">
              <img className="icon" src={instagram_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.reddit.com/r/cindx/">
              <img className="icon" src={reddit_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://t.me/cindx_official">
              <img className="icon" src={telegram_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://twitter.com/CINDXPlatform">
              <img className="icon" src={twitter_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.github.com/Bit-Invest/Cindx-frontend">
              <img className="icon" src={github_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.facebook.com/cindx.io/">
              <img className="icon" src={facebook_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://medium.com/cindx">
              <img className="icon" src={medium_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/cindx/">
              <img className="icon" src={linkedin_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
              <img className="icon" src={wechat_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
              <img className="icon" src={kakaotalk_icon} alt={"CINDEX"}/>
            </a>
            <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
              <img className="icon" src={weibo_icon} alt={"CINDEX"}/>
            </a>
          </div>
        </div>
        <div className="adress">
          <div className="adress_left">
            <div className="caption">{ indexLngObj[lng]['joinTokenPreSale#4'] }</div>
            <div className="address__text">
              <div>{ indexLngObj[lng]['joinTokenPreSale#5'] }</div>
              <div>{ indexLngObj[lng]['joinTokenPreSale#6'] }</div>
            </div>
            <a href="mailto:hello@cindx.io">
              <p>
                { indexLngObj[lng]['joinTokenPreSale#7'] }
              </p>
            </a>
            <a href="http://static.cindx.io/LD_LAST.pdf" target="__blank" className="linkDoc">User agreement</a>
            <a href="http://static.cindx.io/PP_LAST.pdf" target="__blank" className="linkDoc">Privacy policy</a>
            {/* <a target="_blank" href={links.lD}>
              <p className="lD">
                { indexLngObj[lng]['joinTokenPreSale#8'] }
              </p>
            </a> */}
          </div>
          {/*<div className="adress_right">
            <div className="caption">{ indexLngObj[lng]['joinTokenPreSale#9'] }</div>
            <div className="address__text">
              <div>{ indexLngObj[lng]['joinTokenPreSale#10'] }</div>
              <div>{ indexLngObj[lng]['joinTokenPreSale#11'] }</div>
            </div>
            <p>
              { indexLngObj[lng]['joinTokenPreSale#12'] } <a href="mailto:hr@cindx.io">hr@cindx.io</a>
            </p>
          </div>*/}
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
)
