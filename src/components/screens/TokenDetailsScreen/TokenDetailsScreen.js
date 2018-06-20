import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';
import { ProgressBar } from '@common/ProgressBar';

const ROOT_CLASS = 'token-details-screen';

export const TokenDetailsScreen = () => (
  <Screen>
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__header-wrap`}>
        <div className={`${ROOT_CLASS}__header`}>Token Deals</div>
        <div className={`${ROOT_CLASS}__bar-wrap`}>
          <ProgressBar percent={24} />
        </div>
      </div>
      <div className={`${ROOT_CLASS}__content-wrap`}>
        <div className={`${ROOT_CLASS}__info`}>
          Token Pre-Sale:<br />
          <span className={`${ROOT_CLASS}__bold-text`}>
            23.07.2018<br />
          </span>
          Join the Token Pre- Sale to receive a 25% bonus. Limited time offer.
        </div>
        <div className={`${ROOT_CLASS}__info`}>
          Token Sale starts:<br />
          <span className={`${ROOT_CLASS}__bold-text`}>
            27.08.2018<br />
          </span>
          Token sale bonuses will depend on number of tokens for sale
        </div>
        <div className={`${ROOT_CLASS}__info`}>
          <span className={`${ROOT_CLASS}__bold-text`}>
            Token Sale Bonuses:<br />
          </span>
          Week 1 - 15% Bonus<br />
          Week 2 - 10% Bonus<br />
          Week 3 - 7% Bonus
        </div>
        <div className={`${ROOT_CLASS}__info`}>
          Week 4 - 5% Bonus<br />
          Week 5 - 3% Bonus<br />
          Week 6 - 0% Bonus
        </div>
      </div>
    </div>
  </Screen>
);
