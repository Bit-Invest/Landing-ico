import React from 'react';
import { Screen } from '@common/Screen';
import Aircraft from '@assets/export_mountain_v2/Samolet.svg';

const ROOT_CLASS = 'Geographic';

export const Geographic = props => (
  <Screen currentItem={0}>
    <div class="app flex Geographic" root-class={ROOT_CLASS}>
      <div class="container flex">
        <div class="left-side flex">
          <h1>Geographic scope</h1>
          <span class="nav flex">
            <a href="#">Costumers potential …</a>
            <a href="#">Transactions potential …</a>
            <a href="#">Value added to average …</a>
          </span>
        </div>
        <div class="right-side">
          <div class="tooltip">
            <span>London</span>
            <span> ETH - > BTC</span>
          </div>
        </div>
      </div>
    </div>
  </Screen>
);
