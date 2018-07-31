import * as React from 'react';
import { HowCindxWorksChild } from './howCindxWorksChild/HowCindxWorksChild';
import block_2_img_1 from '../../images/block_2_img_1.png';
import block_2_img_2 from '../../images/block_2_img_2.png';
import block_2_img_3 from '../../images/block_2_img_3.png';
import block_2_img_4 from '../../images/block_2_img_4.svg';

const HowCindxWorksInfo = {
  name: [
    'Investors', 'Traders', 'Vendors', 'CINDX'
  ],
  text1: [
    'increase their crypto earnings with the portfolio management skills of top traders',
    'earn commissions from the investors that follow them based on their performance and trade strategy',
    'sell advanced trading tools, like trade robots and news widgets.',
    'collects commissions and subscription fees'
  ],
  text2: [
    'I’m joining CINDX with crypto assets that  I want to be traded',
    'I’m joining CINDX with trading expertise that will benefit investors',
    'Im joining CINDX with trading apps that will help investors',
    'We’re here to make trading easy, secure, and profitable'
  ],
  icon: [
    block_2_img_1, block_2_img_2, block_2_img_3, block_2_img_4
  ]
}

export const HowCindxWorks = props => (
  <div className="block_2">
    <div className="size">
      <h2>In a Nutshell: How CINDX Works</h2>
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
      <div className="clear" />
    </div>
  </div>
)
