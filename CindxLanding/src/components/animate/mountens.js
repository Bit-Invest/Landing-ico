import * as React from 'react';
import './mouns.css';

export class CanvasMouns extends React.Component {
  render() {
    return (
    	<div className="canvasAnimateMouns">
        <div id="animateHtml"></div>
    		<canvas id="prlxCnvas2" width="0" height="0">
					Your browser error
				</canvas>
    	</div>
    );
  }
}