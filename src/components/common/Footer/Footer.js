import React from 'react';

const ROOT_CLASS = 'footer';

const Socials = ['twitter', 'tumblr', 'linked-in', 'facebook'];

export const Footer = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__button`} />
    <div className={`${ROOT_CLASS}__social-media`}>
      {Socials.map(social => (
        <div
          className={`${ROOT_CLASS}__social ${ROOT_CLASS}__social_${social}`}
        />
      ))}
    </div>
  </div>
);
