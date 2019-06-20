import * as React from 'react';
import { HowCindxWorksChild } from './howCindxWorksChild/HowCindxWorksChild';
import block_2_img_1 from '../../images/block_2_img_1.png';
import block_2_img_2 from '../../images/block_2_img_2.png';
import block_2_img_3 from '../../images/block_2_img_3.png';
import block_2_img_4 from '../../images/block_2_img_4.png';
import './howCindxWorks.css';
import { lng } from '../../links.js';
import indexLngObj from '../../lngs/index';

const HowCindxWorksInfo = {
  name: [
    indexLngObj[lng]['howCindxWorks#1'], indexLngObj[lng]['howCindxWorks#2'], indexLngObj[lng]['howCindxWorks#3'], 'CINDX'
  ],
  text1: [
    indexLngObj[lng]['howCindxWorks#4'],
    indexLngObj[lng]['howCindxWorks#5'],
    indexLngObj[lng]['howCindxWorks#6'],
    indexLngObj[lng]['howCindxWorks#7']
  ],
  text2: [
    indexLngObj[lng]['howCindxWorks#8'],
    indexLngObj[lng]['howCindxWorks#9'],
    indexLngObj[lng]['howCindxWorks#10'],
    indexLngObj[lng]['howCindxWorks#11']
  ],
  icon: [
    block_2_img_1, block_2_img_2, block_2_img_3, block_2_img_4
  ]
}

export const HowCindxWorks = props => (
  <div className="block_2">
    <div className="size">
      <h2 className="header_blocks">{ indexLngObj[lng]['howCindxWorks#12'] }</h2>
        <div className="container">
          <div className="cont_row">
            <HowCindxWorksChild
              name={HowCindxWorksInfo.name[0]}
              text1={HowCindxWorksInfo.text1[0]}
              text2={HowCindxWorksInfo.text2[0]}
              icon={HowCindxWorksInfo.icon[0]}
            />
            <HowCindxWorksChild
              name={HowCindxWorksInfo.name[1]}
              text1={HowCindxWorksInfo.text1[1]}
              text2={HowCindxWorksInfo.text2[1]}
              icon={HowCindxWorksInfo.icon[1]}
            />
            <HowCindxWorksChild
              name={HowCindxWorksInfo.name[2]}
              text1={HowCindxWorksInfo.text1[2]}
              text2={HowCindxWorksInfo.text2[2]}
              icon={HowCindxWorksInfo.icon[2]}
            />
            <HowCindxWorksChild
              name={HowCindxWorksInfo.name[3]}
              text1={HowCindxWorksInfo.text1[3]}
              text2={HowCindxWorksInfo.text2[3]}
              icon={HowCindxWorksInfo.icon[3]}
            />
          </div>
        </div>
      <div className="clear" />
    </div>
  </div>
)
