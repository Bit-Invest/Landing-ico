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
      readingTime: '4 MIN READ',
      mainThought: 'Get to know more about the CINDX tokens!',
    },
    linkMore: 'https://medium.com/cindx/cindx-token-benefits-for-token-holders-d3228205117c',
  },
  {
    texts: {
      title: 'CINDX FAQ',
      readingTime: '6 MIN READ',
      mainThought: 'Frequently Asked Questions About CINDX',
    },
    linkMore: 'https://medium.com/cindx/frequently-asked-questions-about-cindx-692cae405d6',
  },
    {
    texts: {
      title: 'CINDX launches on Bitforex',
      readingTime: '3 MIN READ',
      mainThought: 'CINDX Premium Token Offering on Bitforex',
    },
    linkMore: 'https://event.bitforex.com/en/CINXO.html',
  },
];

class UrgentNest extends React.Component {
  renderNews() {
    const resJsx = urgentNewsData
      .map((curUrgent, index) => (
        <div className="itemUrgent" key={index}>
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
