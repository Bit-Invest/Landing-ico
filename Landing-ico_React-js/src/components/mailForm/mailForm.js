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
import './mailForm.css';

import first_block_2_row_1 from '@images/first_block_2_row_1.png';
import first_block_2_row_2 from '@images/first_block_2_row_2.png';
import first_block_2_row_3 from '@images/first_block_2_row_3.png';


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
    const end = new Date("2018/09/16 12:00:00 GMT-0000");
    const now = new Date();
    const distance = end - now;
    const sale_step = 2;

    const step_content = {
      title1: [
        'Security Token Sale Starts with',
        'Security Token Sale Is Live',
        indexLngObj[lng]['mailForm#19']
      ],
      bonus: [
        '40% BONUS',
        '40% BONUS',
        indexLngObj[lng]['mailForm#20']
      ],
      desc1: [
        <div>for the first 100 buyers <br /> Token sale starts in</div>
      ],
      timer: [
        <Timer />,
        <div className="timerRepText">BE THE EARLY BIRD</div>,
        <Timer />,
      ],
      textDescFromPrice: [
        'Starts from $1',
        '$1 now',
        indexLngObj[lng]['mailForm#23'],
      ],
      fromPrice: [
        '1.40',
        '1.40',
        '1.20',
      ],
      toPrice: [
        '1.25',
        '1.25',
        '1.17',
      ]
    };

    return (
      <div className={ROOT_CLASS}>
        <div class={`${ROOT_CLASS}__legals`}>
          <a  target="__blank" href="https://drive.google.com/open?id=1nulb7NnAQJJHGF09v9VdZC5tUQJPOV4u">
            <div class={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_1} class="img_legal" />
              <div class="text_legal">CRYPTOCURRENCY EXCHANGE LICENSE</div>
            </div>
          </a>
          <a  target="__blank" href="https://drive.google.com/open?id=1VvZSFwaR_LVJZBRp_v8GZ6w5erbDr1VF">
            <div class={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_2} class="img_legal" />
              <div class="text_legal">FINANCIAL INSTITUTION LICENSE</div>
            </div>
          </a>
          <a  target="__blank" href="https://drive.google.com/open?id=1yNU430cKV_3wsGBkBDxqI1DhXVnqdOLM">
            <div class={`${ROOT_CLASS}__item_legals`}>
              <img src={first_block_2_row_3} class="img_legal" />
              <div class="text_legal">CRYPTO WALLET LICENSE</div>
            </div>
          </a>
        </div>
        <div className={`${ROOT_CLASS}__video`} onClick={() => this.showVideoInPopUp('https://player.vimeo.com/video/286746544')}>
          <img
            src={play_button_youtube}
            alt="CINDEX"
            className={`${ROOT_CLASS}__play`}
          />
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
