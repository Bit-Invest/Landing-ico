import React from 'react';

const ROOT_CLASS = 'video-pop-up';

export const VideoPopUp = () => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__undercover`} />
    <div className={`${ROOT_CLASS}__video-wrap`}>
      <div className={`${ROOT_CLASS}__check`} />
      <div className={`${ROOT_CLASS}__video`}>
        <iframe
          src="https://player.vimeo.com/video/272995021"
          width="640"
          height="360"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
    </div>
  </div>
);
