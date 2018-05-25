import React from 'react';
import { Menu } from '@common/Menu';

const ROOT_CLASS = 'header';

export const Header = props => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__promo-info`}>
      <div className={`${ROOT_CLASS}__logo-wrap`}>
        <div className={`${ROOT_CLASS}__logo`} />
      </div>
      <div className={`${ROOT_CLASS}__promo-title-wrap`}>
        <div className={`${ROOT_CLASS}__promo-title`}>
          Win or winners<br />
          Automatically<br />
          <span className={`${ROOT_CLASS}__security`}>
            Security Token Pre-sale
          </span>
        </div>
      </div>
    </div>
    <Menu currentItem={props.currentItem} />
  </div>
);
