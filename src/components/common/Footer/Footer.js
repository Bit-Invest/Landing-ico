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
const scroll = Scroll.animateScroll;

export const Footer = props => (
  <div className={ROOT_CLASS}>
    <div
      className={`${ROOT_CLASS}__button`}
      onClick={() => {
        let scrTop = (
          document.documentElement ||
          document.body.parentNode ||
          document.body
        ).scrollTop;
        let newSroll =
          Math.ceil((scrTop + 0.01) / global.HEIGHT) * global.HEIGHT;

        scroll.scrollTo(newSroll);
      }}
    />
    <div className={`${ROOT_CLASS}__social-media`}>
      {Socials.map(social => (
        <a href={socsSrc[social][1]} target="__blank">
          <img
            src={socsSrc[social][0]}
            key={social}
            className={`${ROOT_CLASS}__social`}
          />
        </a>
      ))}
    </div>
  </div>
);
