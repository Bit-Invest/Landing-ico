import * as React from 'react';
import { Roadmap } from './Roadmap';

const IMAGES = {
  ['21m']: {
    images: ['', '', '', '', '', '', '', '', '']
  },
  ['12m']: {
    images: ['', '', '', '', '', '', '', '', '']
  },
  ['3.8m']: {
    images: ['', '', '', '', '', '', '', '', '']
  }
}

export class RoadmapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: '21m',
      currentImage: 0
    }
  }

  onClickButton = payload => {
    this.setState({currentButton: payload.name});
  }

  onClickQuartal = num => {
    console.log(num);
    this.setState({currentImage: num});
  }

  render() {
    return (
      <Roadmap
        currentButton={this.state.currentButton}
        onClickButton={this.onClickButton}
        onClickQuartal={this.onClickQuartal}
        imageSrc={IMAGES[this.state.currentButton].images[this.state.currentImage]}
      />
    );
  }
}