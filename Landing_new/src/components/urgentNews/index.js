import React from 'react';
import { links } from '../../links.js';

import './style.css';

let urgentNewsData = [
  {
    texts: {
      title: 'Initial Circulation Supply of CINXO',
      readingTime: '4 MIN READ',
      mainThought: 'Important information about CINDX tokens!', 
    },
    linkMore: 'https://medium.com/cindx/the-initial-circulating-supply-of-cinxo-tokens-386ae92b57cd',
  },
  {
    texts: {
      title: 'CINDX Token Benefits For Token Holders',
      readingTime: '6 MIN READ',
      mainThought: 'Get to know more about the CINDX tokens!',
    },
    linkMore: 'https://medium.com/cindx/cindx-token-benefits-for-token-holders-d3228205117c',
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
          <a className="readMore" target="_blank" href={curUrgent.linkMore}>Read More</a>
        </div>
      ))
  
    return resJsx;
  }

  render() {
    return(
      <div className="urgentNews">
        <div className="size container">
          <div className="listUrgents">{this.renderNews()}</div>
          <a className="clickToAllUrgents" href={links.medium} target="_blank">View all posts</a>
        </div>
      </div>
    );
  }
};

export default UrgentNest;
