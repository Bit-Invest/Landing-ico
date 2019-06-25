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
      text: '',
      hasTimer: false,
      buyButton: false,
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.getRestTime();
    }, 1000);
  }

  getRestTime = () => {
    const dateNow = new Date();
    const myOffsetUTC = dateNow.getTimezoneOffset();
    const timeMyOffsetUTC = myOffsetUTC * 60 * 1000;
    const utcNowTime = dateNow.getTime() + timeMyOffsetUTC;

    const datesIEO = [
      {
        text: indexLngObj[lng]['headertext#0'],
        timeTo: '2019/06/25 12:00',
        hasTimer: true,
        buyButton: true,
      },
      {
        text: indexLngObj[lng]['headertext#1'],
        timeTo: '2019/06/25 13:00',
        hasTimer: false,
        buyButton: true,
      },
      {
        text: indexLngObj[lng]['headertext#2'],
        timeTo: '2019/06/26 12:00',
        hasTimer: true,
        buyButton: true,
      },
      {
        text: indexLngObj[lng]['headertext#3'],
        timeTo: '2019/06/27 12:00',
        hasTimer: true,
        buyButton: true,
      },
      // {
      //   text: `${indexLngObj[lng]['headertext#4']} ${indexLngObj[lng]['headertext#4_1']}`,
      //   timeTo: '2019/06/27 12:00',
      //   buyButton: false,
      // },
    ];

    let nextDateIEO = datesIEO[datesIEO.length - 1];

    for (const tsDate of datesIEO) {
      const tsRestTime = new Date(tsDate.timeTo).getTime() - utcNowTime;

      if (tsRestTime > 0) {
        nextDateIEO = tsDate;
        break;
      }
    }

    const timePreIEO = new Date(nextDateIEO.timeTo).getTime();
    const utcIEOTime = timePreIEO;
    
    const restTime = utcIEOTime - utcNowTime;

    let restDays = Math.floor(restTime / 1000 / 60 / 60 / 24);
    let restHours = Math.floor(restTime / 1000 / 60 / 60) - (restDays * 24); 
    let restMinutes = Math.floor(restTime / 1000 / 60) - ((restDays * 24 * 60) + (restHours * 60)); 
    let restSeconds = Math.floor(restTime / 1000) - ((restDays * 24 * 60 * 60) + (restHours * 60 * 60) + (restMinutes * 60)); 

    let restDaysInt = restDays;

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
      restTime: restDaysInt > 0 ? (
        `${restDays}d : ${restHours}h : ${restMinutes}m`
      ) : (
        `${restHours}h : ${restMinutes}m : ${restSeconds}s`
      ),
      text: nextDateIEO.text,
      hasTimer: nextDateIEO.hasTimer,
      buyButton: nextDateIEO.buyButton,
    });
  }

	render() {
		return(
      <div className="startTimer">
          <div className="size content">
            <div className="titleText">
              <div className="firstText"><span>{this.state.text}&#8194;</span><span>{this.state.hasTimer?this.state.restTime:''}</span></div>
              {
                this.state.buyButton && (
                  <a className="buyButton" target="_blanl" rel="noopener noreferrer" href={indexLngObj[lng]['link#1_bitforex']}>
                    <span>{indexLngObj[lng]['buttonheader#1']}</span>
                    <span>
                      <img alt="" className="logoIcon" src={BitForexIcon} /> 
                      <span>{indexLngObj[lng]['buttonheader#2']}</span>
                    </span> 
                  </a>
                )
              }
            </div>
          </div>
      </div>
		);
	}
};
