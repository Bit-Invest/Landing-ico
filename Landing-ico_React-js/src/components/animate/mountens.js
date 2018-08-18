import * as React from 'react';
import './mouns.css';
import MounsCnvs from './j.js';

export class CanvasMouns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClickButton = payload => {
    this.setState({currentButton: payload.name});
  }

  updateDimensions = () => {
    if(window.innerWidth > 1000){
      MounsCnvs.resizeFunc();
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  render() {
    return (
    	<div className="canvasAnimateMouns">
    		<canvas id="prlxCnvas2">
					Your browser error
				</canvas>
    	</div>
    );
  }
}