import * as React from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { Timer } from '@components/timer';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { bindActionCreators } from 'redux';
import play_button_youtube from '../../media/play_button_youtube.png';
import { connect } from 'react-redux';
import {links} from '../../links.js';
import './mailForm.css';

const ROOT_CLASS = 'mail-form';

class MailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      submitStatus: 4, // 0 - пусто; 1 - не подходит почта; 2 - всё ок отправлено; 3 - отправляется
      submitStatusText: null
    };
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
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
      status_text = 'Wrong email';
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
        submitStatusText: 'sending ..'
      });
    }

    fetch('https://cindx.io/subscribe/?email=haniev97@mail.ru')  
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if(responseJson.status == 1 || responseJson.status == 2) {
          this.setState({
            submitStatus: 1,
            submitStatusText: 'Already was or is not valid, try again'
          });
        } else if (responseJson.status == 0) {
          this.setState({
            submitStatus: 2,
            submitStatusText: 'Your email has been sent successfully'
          });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          submitStatus: 3,
          submitStatusText: 'an error occurred, try again'
        });
      });
  }

  render() {
    const { props } = this;
    const { email, submitStatus, submitStatusText } = this.state;

    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__video`}>
          <img
            src={play_button_youtube}
            alt="CINDEX"
            className={`${ROOT_CLASS}__play`}
            onClick={() => this.showVideoInPopUp('https://www.youtube.com/embed/SWFZpVGiv-E')}
          />
        </div>
        <div className={`${ROOT_CLASS}__content`}>
          <div style={{display: !email ? 'none' : null }} className={`${ROOT_CLASS}__contentagree`}>
            <div className={`${ROOT_CLASS}__contentagreescroll`}>
              <p className="boldtext">GDRP Сompliance</p>
              <p>Personal data provided via Subscription form and KYC procedure will be collected in the full compliance with GDRP</p>
              <p>The Data Protection Officer  of the project is  Mrs. Sofja Pevzner-Belositski. Contact details: dpo@cindx.io. Any data subject may, at any time, contact Data Protection Officer of directly with any request related to data protection.</p>
              <p>Your personal data provided via Subscription form and KYC procedure will be shared to our partners:</p>
              <p>ICO Promo</p>
              <p>Privacy Policy</p>
              <p>Sum & Substance</p>
              <p>Privacy Policy</p>
              <p>By default, the personal data provided by subscriber are kept by CINDX, ICO Promo and Sum & Substance for 5 years after registration of subscriber in the system</p>
              <p>If you do not agree to this privacy policy, please do not use our site.</p>
              <p>By using our site, you consent to the collection and use of information by us. Owing to the global nature of the internet infrastructure, the information you provide may be transferred in transit to countries outside the European Economic Area that do not have similar protections in place regarding your data and its use as set out in this policy.</p>
              <p>However, we have taken the steps outlined above to try to improve the security of your information. By submitting your information you consent to these transfers</p>
              <p>I agree to process my <a href={links.lD} target="_blank" >personal data</a></p>
            </div>
          </div>
          <div style={{display: email ? 'none' : null }} className="timerContent">
            <div className={`${ROOT_CLASS}__title`}>
              Pre-Token Sale Live
            </div>
            <div className={`${ROOT_CLASS}__bonus`}>
              25% BONUS
            </div>
            <div className={`${ROOT_CLASS}__description`}>
            Get it before everyone else does<br/>Offer expires within
            </div>
            <div className={`${ROOT_CLASS}__timer`}>
              <Timer days={10} hours={6} minutes={20} seconds={14}/>
            </div>
            <div className={`${ROOT_CLASS}__cost`}>
              <div className={`${ROOT_CLASS}__now`}>
                <div className={`${ROOT_CLASS}__cost-title`}>
                  1$ now
                </div>
                <div className={`${ROOT_CLASS}__cost-value`}>
                  {props.now} CINX
                </div>
              </div>
              <div className={`${ROOT_CLASS}__arrows`}></div>
              <div className={`${ROOT_CLASS}__later`}>
                <div className={`${ROOT_CLASS}__cost-title`}>
                  1$ later
                </div>
                <div className={`${ROOT_CLASS}__cost-value`}>
                  {props.later} CINX
                </div>
              </div>
            </div>
          </div>
          <div className={`${ROOT_CLASS}__input ${ (submitStatus === 0 || submitStatus === 1) ? "errorRed" : null }`}>
            <Input 
              placeholder="Your Email" 
              onChange={this.onChange} 
            />
          </div>
          <div className={`${ROOT_CLASS}__button`}>
            <div className={`button button_gradient ${!email ? null : "focus_bun_grdn"}`}
              onClick={this.sendSubcribe}
            >
              { !email ? "JOIN PRE-SALE" : "AGREE & SUBMIT" }
            </div>
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
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(MailForm);

export {connectedContainer as MailForm};
