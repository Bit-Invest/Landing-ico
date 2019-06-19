import * as React from 'react';
import './JoinTokenPreSale.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index';
import mailerlite from 'mailerlite-js';

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

mailerlite.init(links.mailerlite.apiKey);

export class MailBlock extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      submitStatus: 4, // 0 - пусто; 1 - не подходит почта; 2 - всё ок отправлено; 3 - отправляется
      submitStatusText: null
    };
  }

  onChange = (e) => {
    let text = e.target.value;

    if(text.length>0){
      this.setState({
        submitStatusText: null,
        submitStatus: 4
      });
    }

    this.setState({
      email: text
    });
  }

  sendSubcribe = () => {
    const { email } = this.state;
    let error = false;
    let status_text = null;

    if(!email){
      error = 0;
      status_text = indexLngObj[lng]['mailForm#1'];
    }

    if(error !== false){
      this.setState({
        submitStatus: error,
        submitStatusText: status_text
      });

      return false;
    } else {
      this.setState({
        submitStatus: 3,
        submitStatusText: indexLngObj[lng]['mailForm#2']
      });
    }

    mailerlite.subscribers.addToList(links.mailerlite.listId, email, (status, res) => {
      console.log({status, res});
      if (!res.email) {
        return this.setState({
          submitStatus: 1,
          submitStatusText: indexLngObj[lng]['mailForm#3']
        });
      }

      this.setState({
        submitStatus: 2,
        submitStatusText: indexLngObj[lng]['mailForm#4']
      });     

      setTimeout(()=>{
        window.location.href = links.mvp;
      }, 2000); 
    });
  }

  render() {
    const {
      submitStatus,
      submitStatusText
    } = this.state;

    return(
      <div className="mail-block-footer">
        <div className="title">{indexLngObj[lng]['joinTokenPreSale#16']}</div>
        <div className={`mail-block-footer__formStarted`}>
          <input type="text" placeholder="EMAIL" onChange={this.onChange} />
          <div className="button_send" onClick={this.sendSubcribe}>{indexLngObj[lng]['joinTokenPreSale#17']}</div>
        </div>
        {
          submitStatus !== 4 ?
            <div
              className={`mail-block-footer__textStatus ${
                (submitStatus === 0 || submitStatus ===1) ? "error" :
                  (submitStatus === 3) ? "loading" :
                    (submitStatus === 2) ? "success" : null
              }
              `}>
                {submitStatusText}
            </div> : null
        }
      </div>
    );
  }
}

export const JoinTokenPreSale = () => (
  <div className="block_9">
    <div className="size">
      {/* <h2 className="header_blocks">{ indexLngObj[lng]['joinTokenPreSale#1'] }</h2> */}
      <div className="container2">
        <MailBlock />
        <div className="container3">
          <div className="icons_wrapper">
            <div className="caption">{ indexLngObj[lng]['joinTokenPreSale#13'] }</div>
            <div className="icon_block">
              <a target="_blank" href={links.soc.youtube}>
                <img className="icon" src={youtube_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.instagram}>
                <img className="icon" src={instagram_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.reddit}>
                <img className="icon" src={reddit_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.telegram}>
                <img className="icon" src={telegram_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.twitter}>
                <img className="icon" src={twitter_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.facebook}>
                <img className="icon" src={facebook_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.medium}>
                <img className="icon" src={medium_icon} alt={"CINDEX"}/>
              </a>
              <a target="_blank" href={links.soc.linkedin}>
                <img className="icon" src={linkedin_icon} alt={"CINDEX"}/>
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
              <a href="http://static.cindx.io/LD_LAST.pdf" target="__blank" className="linkDoc">{indexLngObj[lng]['joinTokenPreSale#14']}</a>
              <a href="http://static.cindx.io/PP_LAST.pdf" target="__blank" className="linkDoc">{indexLngObj[lng]['joinTokenPreSale#15']}</a>
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
    </div>
    <div className="clear" />
  </div>
)
