import * as React from 'react';
import Slider from "react-slick";
import ico_check from '../../images/ico_check.png';
import './LegalSchedule.css';
import { lng } from '../../links.js'
import indexLngObj from '../../lngs/index'

const dataLegalSchedule = [
  {
    text: 'RECEIVED LICENSE (FVR000110) TO EXCHANGE VIRTUAL CURRENCY TO FIAT SERVICES',
    version: '4.18',
    isCheck: true
  },
  {
    text: 'APPLIED FOR TRADEMARK REGISTRATION IN ESTONIA AND EU',
    version: '5.18',
    isCheck: true
  },
  {
    text: 'RECEIVED LICENSE (FFA000254) FOR OPERATING AS A FINANCIAL INSTITUTION',
    version: '5.18',
    isCheck: true
  },
  {
    text: 'WORKED OUT PROSPECTUS IN ACCORDANCE WITH ESTONIAN LAW',
    version: '7.18',
    isCheck: true
  },
  {
    text: 'RECEIVED LICENSE (FRK000284) FOR A VIRTUAL CURRENCY WALLET SERVICE',
    version: '8.18',
    isCheck: true
  },
  {
    text: 'APPOINTED A PERSONAL DATA MANAGER TO MEET GDPR REQUIREMENTS',
    version: '8.18',
    isCheck: true
  },
  {
    text: 'Applied for Prospectus EU 809-2004 registration',
    version: '8.18',
    isCheck: true
  },
  {
    text: 'REGISTERED UNDER EXEMPTION D IN SEC',
    version: '9.18',
    isCheck: false
  },
  {
    text: 'RECEIVED THE FSA LICENSE',
    version: '1.19',
    isCheck: false
  },
  {
    text: 'ISSUED CINX SECURITY TOKENS',
    version: '1.19',
    isCheck: false
  },
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