import * as React from 'react';
import { ProblemSolvingChild } from './problemSolvingChild/ProblemSolvingChild';
import block_1_row_1 from '../../images/block_1_row_1.png';
import block_1_row_2 from '../../images/block_1_row_2.png';
import block_1_row_3 from '../../images/block_1_row_3.png';
import { lng, links } from '../../links.js';
import indexLngObj from '../../lngs/index'
import './problemSolving.css';

const ProblemSolvingInfo = {
  caption: [ indexLngObj[lng]['problemSolving#1'], indexLngObj[lng]['problemSolving#2'], indexLngObj[lng]['problemSolving#3'] ],
  text1: [
    indexLngObj[lng]['problemSolving#4'],
    indexLngObj[lng]['problemSolving#5'],
    indexLngObj[lng]['problemSolving#6']
  ],
  icon: [
    block_1_row_1, block_1_row_2, block_1_row_3
  ],
  text2: [
    indexLngObj[lng]['problemSolving#7'],
    indexLngObj[lng]['problemSolving#8'],
    indexLngObj[lng]['problemSolving#9']
  ],
  text3: [
    indexLngObj[lng]['problemSolving#10'],
    indexLngObj[lng]['problemSolving#11'],
    indexLngObj[lng]['problemSolving#12']
  ]
};

export class ProblemSolving extends React.Component {

  render() {
    return (
      <div className="block_1">
        <div className="size">
          <h2 className="header_blocks">{ indexLngObj[lng]['problemSolving#13'] }</h2>
          <a target="_blank" href={links.mvp} className="sb">{ indexLngObj[lng]['problemSolving#14'] }</a>
          <div className="container">
            <div className="clear" />
            <div className="cont_row">
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[0]}
                text1={ProblemSolvingInfo.text1[0]}
                icon={ProblemSolvingInfo.icon[0]}
                text2={ProblemSolvingInfo.text2[0]}
                text3={ProblemSolvingInfo.text3[0]}
              />
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[1]}
                text1={ProblemSolvingInfo.text1[1]}
                icon={ProblemSolvingInfo.icon[1]}
                text2={ProblemSolvingInfo.text2[1]}
                text3={ProblemSolvingInfo.text3[1]}
              />
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[2]}
                text1={ProblemSolvingInfo.text1[2]}
                icon={ProblemSolvingInfo.icon[2]}
                text2={ProblemSolvingInfo.text2[2]}
                text3={ProblemSolvingInfo.text3[2]}
              />
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    )
  }
}
