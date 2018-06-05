import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';

const ROOT_CLASS = 'ico-details-screen';

export const ICODetailsScreen = () => (
  <Screen>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__content-wrap`}>
        <div className={`${ROOT_CLASS}__header`}>
          ICO<br />details
        </div>
        <div className={`${ROOT_CLASS}__details`}>
          <div className={`${ROOT_CLASS}__detail`}>
            <div className={`${ROOT_CLASS}__detail-title`}>Token name: </div>
            <div className={`${ROOT_CLASS}__detail-info`}>CINX</div>
          </div>
          <div className={`${ROOT_CLASS}__detail`}>
            <div className={`${ROOT_CLASS}__detail-title`}>ICO: </div>
            <div className={`${ROOT_CLASS}__detail-info`}>
              27.06.2018 – 27.09.2018
            </div>
          </div>
          <div className={`${ROOT_CLASS}__detail`}>
            <div className={`${ROOT_CLASS}__detail-title`}>Public supply: </div>
            <div className={`${ROOT_CLASS}__detail-info`}>58.000.000</div>
          </div>
          <div className={`${ROOT_CLASS}__detail`}>
            <div className={`${ROOT_CLASS}__detail-title`}>
              Price per token:&nbsp;
            </div>
            <div className={`${ROOT_CLASS}__detail-info`}>$ 1.00</div>
          </div>
          <div className={`${ROOT_CLASS}__detail`}>
            <div className={`${ROOT_CLASS}__detail-title`}>Minimal Goal: </div>
            <div className={`${ROOT_CLASS}__detail-info`}>$ 6.000.000</div>
          </div>
        </div>
      </div>
      <a
        href="https://my.cindx.io/user/login?landing=1"
        target="__blank"
        className="href_noUnder"
        target="__blank">
        <Button title="BUY TOKENS" theme="filled" />
      </a>
    </div>
  </Screen>
);
