import React from 'react';
import { Screen } from '@common/Screen';
import { TeamMember } from '@common/TeamMember';
import Ibrahim from '@assets/export_mountain_v2/ibrahim.jpg';
import Slider from 'react-slick';

const ROOT_CLASS = 'team-screen';
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true
};

export const TeamScreen = props => (
  <Screen>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header-wrap`}>
        <div className={`${ROOT_CLASS}__header`}>{props.header}</div>
        <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
      </div>
      <div className={`${ROOT_CLASS}__slider-wrap`}>
        <Slider {...settings}>
          {props.slides.map((slide, index) => (
            <TeamMember {...slide} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  </Screen>
);

// <TeamMember
//   avatar={Ibrahim}
//   name="Ibrahim"
//   surname="Haniev"
//   position="Chief technical officer (заебщик)"
//   achievments={[
//     {years: 500, title: 'years in web development'},
//     {years: 700, title: 'years in mastering front'},
//     {years: 4, title: 'years in CINDEX'}
//   ]}
//   linkedIn="/"
// />
