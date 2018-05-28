import React from 'react';

const ROOT_CLASS = 'media-block';

export const MediaBlock = props => (
  <div className={`${ROOT_CLASS}_active`}>
    <img className={`${ROOT_CLASS}__picture`} src={props.imageSrc} />
    <div className={`${ROOT_CLASS}__info`}>
      <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
      <div className={`${ROOT_CLASS}__description`}>{props.description}</div>
      <a href={props.href} className={`${ROOT_CLASS}__read-more`}>
        read more
      </a>
    </div>
  </div>
);
