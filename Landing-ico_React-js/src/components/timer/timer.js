import * as React from 'react';
import './timer.css';

const ROOT_CLASS = 'timer';

export class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }; 
  }

  componentWillMount() {
    this.timerCoursGet();
  }

  timerCoursGet = () => {
    var end = new Date("2018/08/26 12:00:00 GMT-0000");
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var _months = _day * 30;

    var showRemaining = () => {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        console.log('finish');
        return;
      }
      var months = Math.floor(distance / _months);
      var days = Math.floor((distance % _months) / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      })
    }

    showRemaining();
    setInterval(showRemaining, 1000);
  }

  render() {
    const { props } = this;
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;

    return(
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__days ${ROOT_CLASS}__point`}>
          <div className={`${ROOT_CLASS}__value`}>
            {days}
          </div>
          <div className={`${ROOT_CLASS}__title`}>
            Days
          </div>
        </div>:
        <div className={`${ROOT_CLASS}__hours ${ROOT_CLASS}__point`}>
          <div className={`${ROOT_CLASS}__value`}>
            {hours}
          </div>
          <div className={`${ROOT_CLASS}__title`}>
            Hours
          </div>
        </div>:
        <div className={`${ROOT_CLASS}__minutes ${ROOT_CLASS}__point`}>
          <div className={`${ROOT_CLASS}__value`}>
            {minutes}
          </div>
          <div className={`${ROOT_CLASS}__title`}>
            Minutes
          </div>
        </div>:
        <div className={`${ROOT_CLASS}__seconds ${ROOT_CLASS}__point`}>
          <div className={`${ROOT_CLASS}__value`}>
            {seconds}
          </div>
          <div className={`${ROOT_CLASS}__title`}>
            Seconds
          </div>
        </div>
      </div>
    )
  }
};