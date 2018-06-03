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

        console.log(scrTop, newSroll);

        scroll.scrollTo(newSroll);
      }}
    />
    <div className={`${ROOT_CLASS}__social-media`}>
      {Socials.map(social => (
        <a key={social} href={socsSrc[social][1]} target="__blank">
          <img src={socsSrc[social][0]} className={`${ROOT_CLASS}__social`} />
        </a>
      ))}
    </div>
  </div>
);
