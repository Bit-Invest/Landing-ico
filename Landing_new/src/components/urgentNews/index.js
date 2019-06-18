import React from 'react';
import { links } from '../../links.js';

import './style.css';

let urgentNewsData = [
  {
    texts: {
      title: 'Ibraghim Haniev CINDX Tech Lead',
      readingTime: '3 MIN READ',
      mainThought: 'Get to know more about the CINDX team!',
    },
    linkMore: 'https://cindx.io/',
  },
];

class UrgentNest extends React.Component {
  renderNews() {
    const resJsx = urgentNewsData
      .map(curUrgent => (
        <div className="itemUrgent">
          <div className="childItem titleOne">{curUrgent.texts.title}</div>
          <div className="childItem readingTime">{curUrgent.texts.readingTime}</div>
          <div className="childItem mainThought">{curUrgent.texts.mainThought}</div>
          <a className="readMore" href={curUrgent.linkMore}>Read More</a>
        </div>
      ))
  
    return resJsx;
  }

  render() {
    return(
      <div className="urgentNews">
        <div className="container">
          <div className="listUrgents">{this.renderNews()}</div>
          <a className="clickToAllUrgents" href={links.medium} target="_blank">View all posts</a>
        </div>
      </div>
    );
  }
};

export default UrgentNest;
