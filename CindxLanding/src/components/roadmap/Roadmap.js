import * as React from 'react';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';

import Gen_Image from '@images/New_CINDX_website-min.png';
import roadMapZN from '@images/roadMapZN.png';

import './Roadmap.css';

const ROOT_CLASS = 'roadmap';
export class Roadmap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <div className={`${ROOT_CLASS} ${ROOT_CLASS}__headcontainer`}>
        <div className="size">
          <div className={`${ROOT_CLASS}__header`}>
            <div className="header_blocks">{indexLngObj[lng]['roadmap#24']}</div>
          </div>
          {
            lng === 'zn' ? (
              <img alt="" src={roadMapZN} className="imageForRoadmap" />
            ) : (
              <img alt="" src={Gen_Image} className="imageForRoadmap" />
            )
          }
        </div>
      </div>
    )
  }
};
