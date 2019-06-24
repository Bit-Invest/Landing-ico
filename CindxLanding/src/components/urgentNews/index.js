import React from 'react';
import { lng, links } from '../../links';
import indexLngObj from '../../lngs/index';

import './style.css';

let urgentNewsData = [
  {
    texts: {
      title: indexLngObj[lng]['urgentnews#1'],
      readingTime: indexLngObj[lng]['urgentnews#2'],
      mainThought: indexLngObj[lng]['urgentnews#3'], 
    },
    linkMore: indexLngObj[lng]['urgentnews#4'],
  },
  {
    texts: {
      title: indexLngObj[lng]['urgentnews#5'],
      readingTime: indexLngObj[lng]['urgentnews#6'],
      mainThought: indexLngObj[lng]['urgentnews#7'], 
    },
    linkMore: indexLngObj[lng]['urgentnews#8'],
  },
  {
    texts: {
      title: indexLngObj[lng]['urgentnews#9'],
      readingTime: indexLngObj[lng]['urgentnews#10'],
      mainThought: indexLngObj[lng]['urgentnews#11'], 
    },
    linkMore: indexLngObj[lng]['urgentnews#12'],
  },
  {
    texts: {
      title: indexLngObj[lng]['urgentnews#13'],
      readingTime: indexLngObj[lng]['urgentnews#14'],
      mainThought: indexLngObj[lng]['urgentnews#15'], 
    },
    linkMore: indexLngObj[lng]['urgentnews#16'],
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
          <a className="readMore" target="_blank" href={curUrgent.linkMore}>{ indexLngObj[lng]['urgentnews#g2'] }</a>
        </div>
      ))
  
    return resJsx;
  }

  render() {
    return(
      <div className="urgentNews">
        <div className="size container">
          <div className="listUrgents">{this.renderNews()}</div>
          <a className="clickToAllUrgents" href={links.medium} target="_blank">{ indexLngObj[lng]['urgentnews#g1'] }</a>
        </div>
      </div>
    );
  }
};

export default UrgentNest;
