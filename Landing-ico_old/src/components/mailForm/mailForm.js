import * as React from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { Timer } from '@components/timer';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { bindActionCreators } from 'redux';
import play_button_youtube from '../../media/play_button_youtube.png';
import { connect } from 'react-redux';
import { links, lng, getGAID, ab_val } from '../../links.js';
import indexLngObj from '../../lngs/index'

import asean_s from '../../media/ASEAN_s.png';
import bb_s from '../../media/BB_S.png';

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

    fetch(`https://cindx.io/subscribe/?email=${email}&loc=${lng}&clickid=${links.clickid}&loc=en&gaid=${links.gaid()}`)
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
            window.location.href = `${links.joinpresale}&gaid=${getGAID()}&mail=${email}&lang=${lng}`;
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
    const { props } = this;
    const { email, submitStatus, submitStatusText } = this.state;
    const now = new Date();
    const sale_step = 8;


    const step_content = {
      title1: [
        'Security Token Sale Starts with',
        'Security Token Sale Is Live',
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19'],
        indexLngObj[lng]['mailForm#19']
      ],
      bonus: [
        '40% BONUS',
        '40% BONUS',
        indexLngObj[lng]['mailForm#20'],
        '17' + indexLngObj[lng]['mailForm#20'].replace('20',''),
        '15' + indexLngObj[lng]['mailForm#20'].replace('20',''),
        '13' + indexLngObj[lng]['mailForm#20'].replace('20',''),
        '10' + indexLngObj[lng]['mailForm#20'].replace('20',''),
        '5' + indexLngObj[lng]['mailForm#20'].replace('20',''),
        'IS OVER'
      ],
      desc1: [
        <div>for the first 100 buyers <br /> Token sale starts in</div>
      ],
      timer: [
        <Timer />,
        <div className="timerRepText">BE THE EARLY BIRD</div>,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
        <Timer />,
      ],
      textDescFromPrice: [
        'Starts from $1',
        '$1 now',
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
        indexLngObj[lng]['mailForm#23'],
      ],
      fromPrice: [
        '1.40',
        '1.40',
        '1.20',
        '1.17',
        '1.15',
        '1.13',
        '1.10',
        '1.05',
        '1.01'
      ],
      toPrice: [
        '1.25',
        '1.25',
        '1.17',
        '1.15',
        '1.13',
        '1.10',
        '1.05',
        '1.00',
        '1.00'
      ]
    };

    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__video`} onClick={() => this.showVideoInPopUp('https://player.vimeo.com/video/286746544')}>
          <img
            src={play_button_youtube}
            alt="CINDEX"
            className={`${ROOT_CLASS}__play`}
          />
        </div>
        <div className={`${ROOT_CLASS}__content`}>
          <div style={{display: !email ? 'none' : null }} className={`${ROOT_CLASS}__contentagree`}>
            <div className={`${ROOT_CLASS}__contentagreescroll`}>
              <p className="boldtext">{ indexLngObj[lng]['mailForm#6'] }</p>
              <p style={{margin: 0}}>{ indexLngObj[lng]['mailForm#7'] }</p>
              <p>{ indexLngObj[lng]['mailForm#8'] }</p>
              <a target="_blank" href="http://support@icopromo.com">support@icopromo.com</a>
              <p>{ indexLngObj[lng]['mailForm#9'] }</p>
              <a target="_blank" href="https://sumsub.com/privacy-and-cookie-policy">Privacy Policy</a>
              <p>{ indexLngObj[lng]['mailForm#10'] }</p>
              <p>{ indexLngObj[lng]['mailForm#17'] } <a href={links.pp} target="_blank" >{ indexLngObj[lng]['mailForm#18'] }</a></p>
            </div>
          </div>
          <div style={{display: email ? 'none' : null }} className="timerContent">
            <div className={`${ROOT_CLASS}__title`}>
              Security Token Sale
            </div>
            <div className={`${ROOT_CLASS}__bonus`}>
              IS NOW OVER
            </div>          
          </div>
        </div>
        <div className="newDivRatings">
          <img src={asean_s} />
          <img src={bb_s} />
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
