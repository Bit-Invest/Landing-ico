import * as React from 'react';
import Slider from "react-slick";
import ico_check from '../../images/ico_check.png';
import './LegalSchedule.css';
import { lng } from '../../links.js'
import indexLngObj from '../../lngs/index'

const dataLegalSchedule = [
  {
    text: indexLngObj[lng]['legalSchedule#2'],
    version: '4.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#3'],
    version: '5.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#4'],
    version: '5.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#5'],
    version: '5.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#6'],
    version: '7.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#7'],
    version: '7.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#8'],
    version: '7.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#9'],
    version: '8.18',
    isCheck: false
  },
  {
    text: indexLngObj[lng]['legalSchedule#10'],
    version: '9.18',
    isCheck: true
  },
  {
    text: indexLngObj[lng]['legalSchedule#11'],
    version: '10.18',
    isCheck: false
  },
  {
    text: indexLngObj[lng]['legalSchedule#12'],
    version: '10.18',
    isCheck: false
  },
  {
    text: indexLngObj[lng]['legalSchedule#13'],
    version: '10.18',
    isCheck: false
  }
]

export class LegalSchedule extends React.Component {
  mapDataLegal = () => {
    return dataLegalSchedule.map((el, i) => (
        <div className="item" key={i}>
          <div className="cont_item one">
            {el.isCheck ? <img src={ico_check} alt={"CINDEX"}/> : null}
            <p>
              {el.text}
            </p>
            <div className="numb">
              {el.version}
            </div>
          </div>
        </div>
    ))
  }

  render() {
    const settings = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    const settings2 = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const settings3 = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="block_5">
        <div className="size">
          <h2 className="header_blocks">{ indexLngObj[lng]['legalSchedule#1'] }</h2>
            <div className="block_arrow_relative">
              <div className="settings">
                <div className="container">
                  <Slider {...settings}>
                    {this.mapDataLegal()}
                  </Slider>
                </div>
              </div>
              <div className="settings2">
                <div className="container">
                  <Slider {...settings2}>
                    {this.mapDataLegal()}
                  </Slider>
                </div>
              </div>
              <div className="settings3">
                <div className="container">
                  <Slider {...settings3}>
                    {this.mapDataLegal()}
                  </Slider>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}