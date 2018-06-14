import React from 'react';
import * as Scroll from 'react-scroll';
import { socsSrc } from '@common/Links';

const ROOT_CLASS = 'footer';

const Socials = [
  'medium',
  'linkedin',
  'facebook',
  'twitter',
  'reddit',
  'telegram'
];

const SocialsYandex = [
  'Go_to_Medium_Main_Site',
  'Go_to_LinkedIn_Main_Site',
  'Go_to_Facebook_Main_Site',
  'Go_to_Twitter_Main_Site',
  'Go_to_Reddit_Main_Site',
  'Go_to_Telegram_Main_Site'
];

const scroll = Scroll.animateScroll;

export const Footer = props => (
  <div className={ROOT_CLASS}>
    <div
      className={`${ROOT_CLASS}__button`}
      onClick={() => {
        let scrTop = window.scrollY;
        let newSroll =
          Math.ceil((scrTop + 0.01) / global.HEIGHT) * global.HEIGHT;

        scroll.scrollTo(newSroll);
      }}
    />
    <div className={`${ROOT_CLASS}__social-media`}>
      {Socials.map(social => (
        <a
          key={social}
          href={socsSrc[social][1]}
          target="__blank"
          onClick={() => {
            if (typeof window.yaCounter49156897 !== 'undefined') {
              window.yaCounter49156897.reachGoal(SocialsYandex[social]);
            }
          }}>
          <img src={socsSrc[social][0]} className={`${ROOT_CLASS}__social`} />
        </a>
      ))}
    </div>
  </div>
);
