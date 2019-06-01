import * as React from 'react';
import { MailForm } from '@components/mailForm';
import { IcoInfo } from './icoInfo';
import './MainBlock.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index';

import Asean_Prize from '@images/ASEAN_s.c45f4b3a.png';
import BB_S_Prize from '@images/BB_S.8027238f.png';

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

import Doc_icon from '@images/Doc_icon2.png';

const ROOT_CLASS = 'main-block';

export class MainBlock extends React.Component {
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

    fetch(`https://cindx.io/subscribe/?email=${email}&loc=en&clickid=default&loc=en&gaid=default`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if(responseJson.status == 1 || responseJson.status == 2) {
          this.setState({
            submitStatus: 1,
            submitStatusText: indexLngObj[lng]['mailForm#3']
          });
        } else if (responseJson.status == 0) {
          this.setState({
            submitStatus: 2,
            submitStatusText: indexLngObj[lng]['mailForm#4']
          });

          setTimeout(()=>{
            window.location.href = `http://mvp.cindx.io/`;
          }, 1000);
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          submitStatus: 3,
          submitStatusText: indexLngObj[lng]['mailForm#5']
        });
      });
  }

  render() {
    const {
      submitStatus,
      submitStatusText
    } = this.state;

    return(
      <div className={ROOT_CLASS} id="top">
        <div className={`${ROOT_CLASS}__content`}>
          <div className={`${ROOT_CLASS}__container-1`}>
            <div className={`${ROOT_CLASS}__header`}>
              One-stop solution for crypto asset management. <br/>
              <div className={`${ROOT_CLASS}__header2`}>
                Making Crypto Investments Easy, Secure and Fast.
              </div>
              <div className={`${ROOT_CLASS}__header3`}>
                Subscribe to the latest updates from Cindx 
              </div>
            </div>
            <div className={`${ROOT_CLASS}__cont`}>
              <div className={`${ROOT_CLASS}__formStarted`}>
                <input type="text" placeholder="EMAIL" onChange={this.onChange} />
                <div className="button_send" onClick={this.sendSubcribe}>Subscribe</div>
              </div>
              {
                submitStatus !== 4 ?
                  <div
                    className={`${ROOT_CLASS}__textStatus ${
                      (submitStatus === 0 || submitStatus ===1) ? "error" :
                        (submitStatus === 3) ? "loading" :
                          (submitStatus === 2) ? "success" : null
                    }
                    `}>
                      {submitStatusText}
                  </div> : null
              }
              <div className={`${ROOT_CLASS}__prizes`}>
                <img src={Asean_Prize} />
                <img src={BB_S_Prize} />
              </div>
              <div className={`${ROOT_CLASS}__docs`}>
                <a target="__blank" href="">
                  <div className={`${ROOT_CLASS}__docs__item`}>
                    <img src={Doc_icon} />
                    <div className="text_docs_item">PROSPECTUS</div>
                  </div>
                </a>
                <a target="__blank" href="">
                  <div className={`${ROOT_CLASS}__docs__item`}>
                    <img src={Doc_icon} />
                    <div className="text_docs_item">TECH WHITEPAPER</div>
                  </div>            
                </a>
              </div>
            </div>
          </div>
          <div className={`${ROOT_CLASS}__container-2`}>
            <div className={`${ROOT_CLASS}__form`}>
              <MailForm />
              <div className="icons_wrapper">
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
                  <a target="_blank" href={links.soc.telegram} className="g_soc">
                    <img className="icon" src={telegram_icon} alt={"CINDEX"}/>
                    <span>7k +</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${ROOT_CLASS}__socials`}></div>
      </div>
    );
  }
}

