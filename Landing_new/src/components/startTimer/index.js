import React from 'react';

import BitForexIcon from '../../media/BitForex.png';

import './style.css';

export default class StartTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      restTime: '0D:0H:0M:0S',
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.getRestTime();
    }, 1000);
  }

  getRestTime = () => {
    const MOSCOW_OFF = 4;
    const dateNow = new Date();
    const datePreIEO = new Date();
    
    dateNow.setTime((new Date().getTime()) + 
      (dateNow.getTimezoneOffset() * 60 * 1000) + 
      (1000 * 60 * 60 * MOSCOW_OFF)); 

    datePreIEO.setTime((new Date('2019/06/25 15:00').getTime()) + 
      (datePreIEO.getTimezoneOffset() * 60 * 1000) + 
      (1000 * 60 * 60 * MOSCOW_OFF)); 

    const ieoTime = datePreIEO.getTime();
    const nowTime = dateNow.getTime();
    const restTime = ieoTime - nowTime;

    let restDays = Math.floor(restTime / 1000 / 60 / 60 / 24);
    let restHours = Math.floor(restTime / 1000 / 60 / 60) - (restDays * 24); 
    let restMinutes = Math.floor(restTime / 1000 / 60) - ((restDays * 24 * 60) + (restHours * 60)); 
    let restSeconds = Math.floor(restTime / 1000) - ((restDays * 24 * 60 * 60) + (restHours * 60 * 60) + (restMinutes * 60)); 

    if ((`${restDays}`).length === 1) {
      restDays = `0${restDays}`;
    }

    if ((`${restHours}`).length === 1) {
      restHours = `0${restHours}`;
    }

    if ((`${restMinutes}`).length === 1) {
      restMinutes = `0${restMinutes}`;
    }

    if ((`${restSeconds}`).length === 1) {
      restSeconds = `0${restSeconds}`;
    }

    this.setState({
      restTime: `${restDays}D:${restHours}H:${restMinutes}M:${restSeconds}S`,
    });
  }

	render() {
		return(
			<div className="startTimer">
        <div className="size content">
          <div className="titleText">
            <div className="firstText">
              <span>1h only CINDX Pre-IEO on</span> 
              <span>
                <img alt="" className="logoIcon" src={BitForexIcon} /> 
                <span>Bitforex</span>
              </span> 
              <span>&#8194; starts in</span>              
            </div>
            <div className="timerText">{this.state.restTime}</div>
          </div>
        </div>
      </div>
		);
	}
};
