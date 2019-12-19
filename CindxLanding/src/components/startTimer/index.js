import React from 'react';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';

import './style.css';

export default class StartTimer extends React.Component {
	render() {
		return(
      <div className="startTimer">
          <div className="size content">
            <div className="titleText">
              <span className="text1">ATTENTION!!!</span>
              <span className="text2">Cases of fraudulent websites using company details and the name of our project have become more frequent! The official website of the project is only: <a href="https://cindx.io">https://cindx.io</a>. The CINDX Investkapital AS and its representatives are not related to the fraudulent site: <a href="https://www.cindxinvest.com/">https://www.cindxinvest.com/</a> and similar resources.</span>
              <span className="text3">BEWARE OF SCAMMERS!</span>
            </div>
          </div>
      </div>
		);
	}
};
