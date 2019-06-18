import React from 'react';

import './style.css';

export default class StartTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      restTime: '0D:0Р:0M:0S',
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

    this.setState({
      restTime: `${restDays}D:${restHours}P:${restMinutes}M:${restSeconds}S`,
    });
  }

	render() {
		return(
			<div className="startTimer">
        <div className="size content">
          <div className="titleText">{this.state.restTime} left until the start of the Pre-IEO on Bitforex. Hurry up, the sale lasts for only 1 hour.</div>
        </div>
      </div>
		);
	}
};
