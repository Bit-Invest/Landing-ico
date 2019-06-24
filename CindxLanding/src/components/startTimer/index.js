import React from 'react';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';

import BitForexIcon from '../../media/BitForex.png';

import './style.css';

export default class StartTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIEO: 0, // 0 - до 1 раунда, 1 - вовремя 1 раунда, 2 - после 1 раунда, 3 - вовремя 2 раунда, 4 - после 2 раунда
      restTime: '0d : 0h : 0m',
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.getRestTime();
    }, 1000);
  }

  // 1) 25.06 14-59 мск: The CINDX Pre-IEO is Live!
  // 2) 25.06 16-00 мск: 2nd round of CINDX Pre-IEO starts in X:Y:Z
  // 3) 26.06 15-00 мск: The CINDX Pre-IEO ends in X:Y:Z
  // 4) 27.06 15-00 мск(или раньше): The CINDX Pre-IEO has ended. $400,000 worth of tokens sold. (в моб только первое предложение; кнопку убрать и в пк, и в моб)

  getRestTime = () => {
    const dateNow = new Date();
    const myOffsetUTC = dateNow.getTimezoneOffset();
    const timeMyOffsetUTC = myOffsetUTC * 60 * 1000;
    const utcNowTime = dateNow.getTime() + timeMyOffsetUTC;

    const timePreIEO = new Date('2019/06/25 12:00').getTime();
    const utcIEOTime = timePreIEO;
    
    const restTime = utcIEOTime - utcNowTime;

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
      restTime: `${restDays}d : ${restHours}h : ${restMinutes}m`,
    });
  }

	render() {
		return(
			<a target="_blanl" rel="noopener noreferrer" href={indexLngObj[lng]['link#1_bitforex']}>
        <div className="startTimer">
            <div className="size content">
              <div className="titleText">
                <div className="firstText">
                  <span>{indexLngObj[lng]['headerTimer#1']}</span> 
                  <span>
                    <img alt="" className="logoIcon" src={BitForexIcon} /> 
                    <span>{indexLngObj[lng]['headerTimer#6']}</span>
                  </span> 
                  <span>&#8194;{indexLngObj[lng]['headerTimer#7']}&#8194;</span>              
                </div>
                <div className="timerText">{this.state.restTime}</div>
              </div>
            </div>
        </div>
      </a>
		);
	}
};
