import * as React from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { Timer } from '@components/timer';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { bindActionCreators } from 'redux';
import play_button_youtube from '../../media/play_button_youtube.png';
import { connect } from 'react-redux';
import { links, lng } from '../../links.js';
import indexLngObj from '../../lngs/index'
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

    fetch(`https://cindx.io/subscribe/?email=${email}&clickid=${links.clickid}&loc=en&gaid=${links.gaid()}`)
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

    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__video`} onClick={() => this.showVideoInPopUp('https://www.youtube.com/embed/nmh_BfGHORE')}>
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
              <p>{ indexLngObj[lng]['mailForm#7'] }</p>
              <p>{ indexLngObj[lng]['mailForm#8'] }</p>
              <p>{ indexLngObj[lng]['mailForm#9'] }</p>
              <p>{ indexLngObj[lng]['mailForm#10'] }</p>
              <p>{ indexLngObj[lng]['mailForm#11'] }</p>
              <p>{ indexLngObj[lng]['mailForm#12'] }</p>
              <p>{ indexLngObj[lng]['mailForm#11'] }</p>
              <p>{ indexLngObj[lng]['mailForm#13'] }</p>
              <p>{ indexLngObj[lng]['mailForm#14'] }</p>
              <p>{ indexLngObj[lng]['mailForm#15'] }</p>
              <p>{ indexLngObj[lng]['mailForm#16'] }</p>
              <p>{ indexLngObj[lng]['mailForm#17'] } <a href={links.lD} target="_blank" >{ indexLngObj[lng]['mailForm#18'] }</a></p>
            </div>
          </div>
          <div style={{display: email ? 'none' : null }} className="timerContent">
            <div className={`${ROOT_CLASS}__title`}>
              { indexLngObj[lng]['mailForm#19'] }
            </div>
            <div className={`${ROOT_CLASS}__bonus`}>
              { indexLngObj[lng]['mailForm#20'] }
            </div>
            <div className={`${ROOT_CLASS}__description`}>
              { indexLngObj[lng]['mailForm#21'] } <br/> { indexLngObj[lng]['mailForm#22'] }
            </div>
            <div className={`${ROOT_CLASS}__timer`}>
              <Timer />
            </div>
            <div className={`${ROOT_CLASS}__cost`}>
              <div className={`${ROOT_CLASS}__now`}>
                <div className={`${ROOT_CLASS}__cost-title`}>
                  { indexLngObj[lng]['mailForm#23'] }
                </div>
                <div className={`${ROOT_CLASS}__cost-value`}>
                  {props.now} CINX
                </div>
              </div>
              <div className={`${ROOT_CLASS}__arrows`}></div>
              <div className={`${ROOT_CLASS}__later`}>
                <div className={`${ROOT_CLASS}__cost-title`}>
                  { indexLngObj[lng]['mailForm#24'] }
                </div>
                <div className={`${ROOT_CLASS}__cost-value`}>
                  {props.later} CINX
                </div>
              </div>
            </div>
          </div>
          <div className={`${ROOT_CLASS}__input ${ (submitStatus === 0 || submitStatus === 1) ? "errorRed" : null }`}>
            <Input
              placeholder={ indexLngObj[lng]['mailForm#25'] }
              onChange={this.onChange}
            />
          </div>
          <div className={`${ROOT_CLASS}__button`}>
            <div className={`button button_gradient ${!email ? null : "focus_bun_grdn"}`}
              onClick={this.sendSubcribe}
            >
              { !email ? indexLngObj[lng]['mailForm#26'] : indexLngObj[lng]['mailForm#27'] }
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
