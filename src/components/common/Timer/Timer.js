import React from 'react';
import { TimeCircle } from '@common/TimeCircle';

const ROOT_CLASS = 'timer';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secs: 0,
      mount: 0,
      days: 0,
      hours: 0,
      minutes: 0
    };
  }

  componentDidMount() {
    const { timerInterval } = this;

    timerInterval;
    setInterval(timerInterval, 1000);
  }

  timerInterval = () => {
    let timeTo = new Date(2018, 5, 27).getTime() - new Date().getTime(),
      tms = [
        Math.floor((timeTo / 1000) % 60),
        Math.floor((timeTo / 1000 / 60) % 60),
        Math.floor((timeTo / (1000 * 60 * 60)) % 24),
        Math.floor((timeTo / (1000 * 60 * 60 * 24)) % 30),
        Math.floor(timeTo / (1000 * 60 * 60 * 24 * 30))
      ];

    this.setState({
      mount: tms[4],
      days: tms[3],
      hours: tms[2],
      minutes: tms[1],
      secs: tms[0]
    });
  };

  render() {
    const { mount, days, hours, minutes, secs } = this.state;

    return (
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__circle`}>
          <TimeCircle title="days" count={days} />
        </div>
        <div className={`${ROOT_CLASS}__circle`}>
          <TimeCircle title="hours" count={hours} />
        </div>
        <div className={`${ROOT_CLASS}__circle`}>
          <TimeCircle title="minutes" count={minutes} />
        </div>
        <div className={`${ROOT_CLASS}__circle`}>
          <TimeCircle title="seconds" count={secs} />
        </div>
      </div>
    );
  }
}
