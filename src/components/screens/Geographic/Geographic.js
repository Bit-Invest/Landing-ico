import React from 'react';
import { Screen } from '@common/Screen';
import Aircraft from '@assets/export_mountain_v2/Samolet.svg';

const ROOT_CLASS = 'Geographic';

export const Geographic = props => (
  <Screen currentItem={0}>
    <div className="app flex Geographic" root-class={ROOT_CLASS}>
      <div className="container flex">
        <div className="left-side flex">
          <h1>Geographic scope</h1>
          <span className="nav flex">
            <a>25m potential blockchain wallets</a>
            <a>200,000 potential transactions daily</a>
            <a>>225 potential partners with $3-5bn each</a>
          </span>
        </div>
        <div className="right-side">
          {/*<div className="tooltip">
            <span>London</span>
            <span> ETH - > BTC</span>
          </div>*/}
        </div>
      </div>
    </div>
  </Screen>
);
