import React from 'react';
import mailerlite from 'mailerlite-js';
import MounsCnvs from '../animate/j.js';

import { lng, links } from '../../links';
import indexLngObj from '../../lngs/index';

import Group from '@images/mailIcon.svg';

import './style.css';

export default class SubscribeBlock extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      submitStatus: 4, // 0 - пусто; 1 - не подходит почта; 2 - всё ок отправлено; 3 - отправляется
      submitStatusText: null
    };
  }

  updateDimensions = () => {
    if(window.innerWidth > 1000){
      MounsCnvs.resizeFunc();
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  onChange = (e) => {
    let text = e.target.value;

    if(text.length>0){
      this.setState({
        submitStatusText: null,
        submitStatus: 4,
      });
    }

    this.setState({
      email: text,
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

  render() {
    const {
      submitStatus,
      submitStatusText
    } = this.state;

    return(
      <div className="subscribeBlock">
        <div className="size sizeSubscribe">
          <div className="mainer">
            <div className="leftTitle">{indexLngObj[lng]['subscribeBlock#1']}</div>
            <div className="rightForm">
              <div className="contentCenter">
                <div className="inputBlock">
                  <img src={Group} alt="" />
                  <input type="text" placeholder="Email" onChange={this.onChange} />
                </div>
                <div className="sendButtonSubscribe" onClick={this.sendSubcribe}>
                  {indexLngObj[lng]['joinTokenPreSale#17']}
                </div>
              </div>
              {
                submitStatus !== 4 ?
                  <div
                    className={`subscribeBlockRes ${
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
        </div>
      </div>
    );
  }
}
