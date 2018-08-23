import * as React from 'react';
import { Roadmap } from './Roadmap';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

import i3_1 from '@images/Roadshow/3.8/1.svg';
import i3_2 from '@images/Roadshow/3.8/2.svg';
import i3_3 from '@images/Roadshow/3.8/3.svg';
import i3_4 from '@images/Roadshow/3.8/4.svg';
import i3_5 from '@images/Roadshow/3.8/5.svg';
import i3_6 from '@images/Roadshow/3.8/6.svg';
import i3_7 from '@images/Roadshow/3.8/7.svg';

import i12_1 from '@images/Roadshow/12/1.svg';
import i12_2 from '@images/Roadshow/12/2.svg';
import i12_3 from '@images/Roadshow/12/3.svg';
import i12_4 from '@images/Roadshow/12/4.svg';
import i12_5 from '@images/Roadshow/12/5.svg';
import i12_6 from '@images/Roadshow/12/6.svg';
import i12_7 from '@images/Roadshow/12/7.svg';

import i21_1 from '@images/Roadshow/21/1.svg';
import i21_2 from '@images/Roadshow/21/2.svg';
import i21_3 from '@images/Roadshow/21/3.svg';
import i21_4 from '@images/Roadshow/21/4.svg';
import i21_5 from '@images/Roadshow/21/5.svg';
import i21_6 from '@images/Roadshow/21/6.svg';
import i21_7 from '@images/Roadshow/21/7.svg';

const IMAGES = {
  ['21m']: {
    images: [i21_1, i21_2, i21_3, i21_4, i21_5, i21_6, i21_7]
  },
  ['12m']: {
    images: [i12_1, i12_2, i12_3, i12_4, i12_5, i12_6, i12_7]
  },
  ['3.8m']: {
    images: [i3_1, i3_2, i3_3, i3_4, i3_5, i3_6, i3_7]
  }
}

const DESCRIPTION = {
  ['21m']: {
    values: [
      indexLngObj[lng]['roadmap#3'], 
      indexLngObj[lng]['roadmap#4'],
      indexLngObj[lng]['roadmap#5'],
      indexLngObj[lng]['roadmap#6'],
      indexLngObj[lng]['roadmap#7'],
      indexLngObj[lng]['roadmap#8'],
      indexLngObj[lng]['roadmap#9']
    ]
  },
  ['12m']: {
    values: [
      indexLngObj[lng]['roadmap#10'],
      indexLngObj[lng]['roadmap#11'],
      indexLngObj[lng]['roadmap#12'],
      indexLngObj[lng]['roadmap#13'],
      indexLngObj[lng]['roadmap#14'],
      indexLngObj[lng]['roadmap#15'],
      indexLngObj[lng]['roadmap#16']
    ]
  },
  ['3.8m']: {
    values: [
      indexLngObj[lng]['roadmap#17'],
      indexLngObj[lng]['roadmap#18'],
      indexLngObj[lng]['roadmap#19'],
      indexLngObj[lng]['roadmap#20'],
      indexLngObj[lng]['roadmap#21'],
      indexLngObj[lng]['roadmap#22'],
      indexLngObj[lng]['roadmap#23']
    ]
  }
};

export class RoadmapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: '21m',
      currentImage: 6
    }
  }

  onClickButton = payload => {
    this.setState({currentButton: payload.name});
  }

  onClickQuartal = num => {
    this.setState({currentImage: num});
  }

  render() {
    return (
      <Roadmap
        currentButton={this.state.currentButton}
        onClickButton={this.onClickButton}
        onClickQuartal={this.onClickQuartal}
        imageSrc={IMAGES[this.state.currentButton].images[this.state.currentImage]}
        descText={DESCRIPTION[this.state.currentButton].values[this.state.currentImage]}
        quartalCour={this.state.currentImage}
      />
    );
  }
}