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
              <span className="text2">Due to the emergence of a large number of fraudulent structures under our trademark in the countries of South-East Asia and the inability to bring them to justice, it was decided to suspend the licenses, not to use the Cindx trademark further, and to close the project named Cindx. Any companies using the Cindx trademark are scammers! Never send them money or cryptocurrency! The official website of the project is only: <a href="https://cindx.io">https://cindx.io</a>. The CINDX Investkapital AS and its representatives are not related to the fraudulent site: <a href="https://www.cindxinvest.com/">https://www.cindxinvest.com/</a> and similar resources.</span>
              <span className="text3">BEWARE OF SCAMMERS!</span>
            </div>
          </div>
      </div>
		);
	}
};
