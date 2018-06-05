import React from 'react';
import LinkedInIcon from '@assets/export_mountain_v2/LinkedIN__icon.svg';

const ROOT_CLASS = 'team-member';

export const TeamMember = props => (
  <div className={ROOT_CLASS}>
    <img src={props.avatar} className={`${ROOT_CLASS}__avatar`} />
    <div className={`${ROOT_CLASS}__name`}>
      {props.name} {props.surname}
    </div>
    <div className={`${ROOT_CLASS}__position`}>{props.position}</div>
    <div className={`${ROOT_CLASS}__delimiter`} />
    <div className={`${ROOT_CLASS}__expirience`}>
      {props.achievments.map((ach, index) => (
        <div className={`${ROOT_CLASS}__achievment`} key={index}>
          <span className={`${ROOT_CLASS}__achievment-number`}>
            {ach.number}{' '}
          </span>
          <span className={`${ROOT_CLASS}__achievment-title`}>{ach.title}</span>
        </div>
      ))}
    </div>
    <a href={props.linkedIn}>
      <img src={LinkedInIcon} className={`${ROOT_CLASS}__linked-in`} />
    </a>
  </div>
);
