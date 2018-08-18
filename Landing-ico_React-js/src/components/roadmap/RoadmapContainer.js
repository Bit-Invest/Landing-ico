import * as React from 'react';
import { Roadmap } from './Roadmap';

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
      'We are building the base for the CINDX platform. At this step, the Minimum Viable Product (MVP) is developed. The MVP allows an access to exchanges and replication protocol. A large portion of our resources is allocated to the scalability and security of the platform.', 
      'The CINDX.alpha version of the platform will be released. This includes a blockchain architecture and a basic system of settlement via smart contracts. The CINDX.market and CINDX.trade components will be  going through some alterations to add functionalities.  ',
      'Based on the blockchain architecture of the CINDX.alpha version, we will produce the CINDX.talk component. This will allow users to communicate, learn and earn with useful content. Additionally, an analytical module will be added to the CINDX.core component of the platform to analyze the market information and present it to the third-party services.      ',
      'At this stage, the CINDX.market and CINDX.trade components will be added. Managers can create index-based products, and the trading terminal is integrated with a flexible setting of risk management. ',
      'CINDX.talk will have public and private channels. At this stage, the content will  be able to be  separated. ',
      'There will be a big update for the platform at this stage: users will be able to store and exchange cryptocurrencies and fiat. CINDX.trade is an extremely flexible system of order execution and risk management. The Vendor’s market will appear; however, at this point, the Vendor’s market will only contain applications developed by CINDX and its partners.  ',
      'A tokenized rating system will be added in the final version of CINDX.talk, as well as a new type of product: “algorithmic trading”. We will also add an automatic arbitrage function that will operate between exchanges and multi-exchange orders.   ',
    ]
  },
  ['12m']: {
    values: [
      'We are building the base for the CINDX platform. At this step, the MVP is developed. The MVP allows an access to exchanges and replication protocol. A large portion of our resources is allocated to the scalability and security of the platform. ',
      'The CINDX.alpha version of the platform will be released. This includes a blockchain architecture and a basic system of settlement via smart contracts. The CINDX.market and CINDX.trade components will be going through some alterations to add functionalities.  ',
      'Based on the blockchain architecture of the CINDX.alpha version, we will produce the CINDX.talk component. This will allow users to communicate, learn and earn with useful content. Additionally, an analytical module will be added to the CINDX.core component of the platform to analyze the market information and present it to the third-party services. Another new component, CINDX.hub, will enable Vendors to develop applications that will analyze the market data that CINDX provides. ',
      'At this stage, the CINDX.market and CINDX.trade components will be added. Managers can create index-based products, and the trading terminal is integrated with a flexible setting of risk management. An SDK for developers will be released. This should simplify application development and implementation for CINDX.  ',
      'CINDX.talk will have public and private channels. At this stage, the content will be able to be separated. CINDX.hub will integrate Github, which will simplify application development even more.',
      'There will be a big update for the platform at this stage: users will be able to store and exchange cryptocurrencies and fiat. CINDX.trade will be an extremely flexible system of order execution and risk management. CINDX.hub will have a full-scale editor for trading strategies with a testing system based on historical market data.',
      'A tokenized rating system  CINDX.talk will be added in the final version of CINDX.talk. This will provide a system of assessment for CINDX community trading experts. “Algorithmic trading” will also be added. We will also add an automatic arbitrage function that will operate between exchanges and multi-exchange orders. A high-grade platform for a code audit will be created. ',
    ]
  },
  ['3.8m']: {
    values: [
      'We are building the base for the CINDX platform. At this step, the MVP is developed. The MVP allows an access to exchanges and replication protocol. A large portion of our resources is allocated to the scalability and security of the platform.',
      'The CINDX.alpha version of the platform will be released. This includes a blockchain architecture and a basic system of settlement via smart contracts. The CINDX.market and CINDX.trade components will be  going through some alterations to add functionalities. ',
      'Based on the blockchain architecture of the CINDX.alpha version, we will produce the CINDX.talk component. This will allow users to communicate, learn and earn with useful content. Additionally, an analytical module will be added to the CINDX.core component of the platform to analyze the market information and present it to the third-party services. Another new component,  CINDX.hub, will enable Vendors to develop applications that will analyze the market data that CINDX provides. The team will develop CINDX.dao, a component that acts as a system for the platform’s revenue distribution to its token holders.       ',
      'At this stage, the CINDX.market and CINDX.trade  components will be added. Managers can create index-based products, and the trading terminal is integrated with a flexible setting of risk management. An SDK for developers will be released. This should simplify application and implementation development for CINDX.  ',
      'CINDX.talk will have public and private channels. At this stage the content can be separated. CINDX.hub will integrate Github which will simplify application development even more.',
      'There will be a big update for the platform at this stage: users will be able to store and exchange cryptocurrencies and fiat. CINDX.trade will be an extremely flexible system of order execution and risk management. CINDX.hub has a full-scale editor for trading strategies with a testing system based on historical market data. CINDX.dao will receive a voting system for token holders. ',
      'A tokenized rating system CINDX.talk will be added in the final version of CINDX.talk. This will provide a system of assessment for CINDX community trading experts. “Algorithmic trading” will also be added. We will also add an automatic arbitrage function that will operate between exchanges and multi-exchange orders. A high-grade platform for a code audit will be created. ',
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