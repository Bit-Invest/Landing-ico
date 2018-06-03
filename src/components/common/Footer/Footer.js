import React from 'react';
import * as Scroll from 'react-scroll';

const ROOT_CLASS = 'footer';

const Socials = ['twitter', 'tumblr', 'linked-in', 'facebook'];
const scroll = Scroll.animateScroll;

export const Footer = props => (
  <div className={ROOT_CLASS}>
    <div
      className={`${ROOT_CLASS}__button`}
      onClick={() => {
        scroll.scrollMore(global.HEIGHT);
      }}
    />
    <div className={`${ROOT_CLASS}__social-media`}>
      {Socials.map(social => (
        <div
          key={social}
          className={`${ROOT_CLASS}__social ${ROOT_CLASS}__social_${social}`}
        />
      ))}
    </div>
  </div>
);
