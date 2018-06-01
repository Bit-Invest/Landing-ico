import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';
import { Timer } from '@common/Timer';
import { Doc } from '@common/Doc';

import WhitepaperDoc from '@assets/docs/CINDX_new.pdf';

console.log('!!!', WhitepaperDoc);

const ROOT_CLASS = 'head-screen';

export class HeadScreen extends React.Component {
  render() {
    const { data } = this.props;
    const { setPopUp } = data;

    return (
      <Screen currentItem={0}>
        <div className={ROOT_CLASS}>
          <div className={`${ROOT_CLASS}__header`}>
            Reform how you sell and buy crypto.<br />
            Sync with the best traders automatically
          </div>
          <div className={`${ROOT_CLASS}__pre-sale-info`}>
            <div className={`${ROOT_CLASS}__list-wrap`}>
              <ul className={`${ROOT_CLASS}__list`}>
                <li className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    Decent passive earning on professional trading of the best
                    crypto traders
                  </span>
                </li>
                <li className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    All the crypto is kept in the wallet of investor at all time
                  </span>
                </li>
                <li className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    Success fees only
                  </span>
                </li>
              </ul>
            </div>
            <div className={`${ROOT_CLASS}__timer-wrap`}>
              <div className={`${ROOT_CLASS}__timer-title`}>
                Token Pre-Sale starts in
              </div>
              <Timer />
            </div>
          </div>
          <div className={`${ROOT_CLASS}__buttons`}>
            <a href="https://my.cindx.io" className="href_noUnder">
              <Button title="JOIN PRE-SALE" />
            </a>
            <a href="http://192.81.220.26" className="href_noUnder">
              <Button title="TEST MVP" />
            </a>
            <Button
              title="SUBSCRIBE"
              theme="filled"
              onClick={() => {
                setPopUp(true);
              }}
            />
          </div>
          <div className={`${ROOT_CLASS}__docs`}>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <a href={WhitepaperDoc} target="__blank">
                <Doc icon="paper" title="Whitepaper" />
              </a>
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <Doc icon="slides" title="Presentation" />
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <Doc icon="paper" title="One Paper" />
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <Doc icon="circles" title="Math Model" />
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}
