import * as React from 'react';
import { MailForm } from '@components/mailForm';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';
import { links } from '../../links.js';
import qr_code from '../../images/qr_code.jpg';

import mailerlite from 'mailerlite-js';

import Asean_Prize from '@images/ASEAN_s.c45f4b3a.png';
import BB_S_Prize from '@images/BB_S.8027238f.png';

import youtube_icon from '../../media/youtube_icon.png';
import instagram_icon from '../../media/instagram_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import reddit_icon from '../../media/reddit_icon.png';
import telegram_icon from '../../media/telegram_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';
import WB_icon from '../../media/WB.png';

import Doc_icon from '@images/Doc_icon2.png';

import './MainBlock.css';

const ROOT_CLASS = 'main-block';

mailerlite.init(links.mailerlite.apiKey);

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
    });
  }

  renderQrCode = (atopClass) => lng === 'zn' ? (
    <div className={`qr_code ${atopClass}`}>
      <img alt="" src={qr_code} />
    </div>
  ) : null;

  render() {
    return(
      <div className={ROOT_CLASS} id="top">
        <div className={`size ${ROOT_CLASS}__content`}>
          <div className={`${ROOT_CLASS}__container-1`}>
            <div className={`${ROOT_CLASS}__header`}>
              {indexLngObj[lng]['mailForm#30']}
              <br/>
              <div className={`${ROOT_CLASS}__header2`}>
                {indexLngObj[lng]['mailForm#31']}
              </div>
              <div className={`${ROOT_CLASS}__header3`}>
                {indexLngObj[lng]['mailForm#32']} 
              </div>
            </div>
            <div className={`${ROOT_CLASS}__cont`}>
              <div className={`${ROOT_CLASS}__formStarted`}>
                <a className="button_send" href={links.mvp} target="_blank" rel="noopener noreferrer">{indexLngObj[lng]['mailForm#33']}</a>
              </div>
              <div className={`${ROOT_CLASS}__prizes`}>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/cindx/1st-place-in-the-pitch-competition-at-asean-digital-342dfb0ee61">
                  <img alt="Asean_Prize" src={Asean_Prize} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/cindx/borderless-blockchain-technology-summit-924a40a1f43e">
                  <img alt="BB_S_Prize" src={BB_S_Prize} />
                </a>
              </div>
              {this.renderQrCode('desktop')}
              <div className={`${ROOT_CLASS}__docs`}>
                <a target="__blank" href="">
                  <div className={`${ROOT_CLASS}__docs__item`}>
                    <img alt="" src={Doc_icon} />
                    <div className="text_docs_item">{indexLngObj[lng]['mailForm#34']}</div>
                  </div>
                </a>
                <a target="__blank" href="">
                  <div className={`${ROOT_CLASS}__docs__item`}>
                    <img alt="" src={Doc_icon} />
                    <div className="text_docs_item">{indexLngObj[lng]['mailForm#35']}</div>
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
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.youtube}>
                    <img alt="youtube link" className="icon" src={youtube_icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.instagram}>
                    <img alt="instagram link" className="icon" src={instagram_icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.reddit}>
                    <img alt="reddit link" className="icon" src={reddit_icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.twitter}>
                    <img alt="twitter link" className="icon" src={twitter_icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.facebook}>
                    <img alt="facebook link" className="icon" src={facebook_icon} />
                  </a>
                  {
                    lng === 'zn' ? (
                      <a target="_blank" rel="noopener noreferrer" href={links.soc.wb}>
                        <img alt="wb link" className="icon" src={WB_icon} />
                      </a>
                    ) : (
                      <a target="_blank" rel="noopener noreferrer" href={links.soc.medium}>
                        <img alt="medium link" className="icon" src={medium_icon} />
                      </a>
                    )
                  }
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.linkedin}>
                    <img alt="linkedin link" className="icon" src={linkedin_icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={links.soc.telegram} className="g_soc">
                    <img alt="telegram link" className="icon" src={telegram_icon} />
                    <span>12k +</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {this.renderQrCode('mobile')}
        </div>
        <div className={`${ROOT_CLASS}__socials`}></div>
      </div>
    );
  }
};

