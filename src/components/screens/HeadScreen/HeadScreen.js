import React from 'react';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';
import { Timer } from '@common/Timer';
import { Doc } from '@common/Doc';
import { docs } from '@common/Links';

const ROOT_CLASS = 'head-screen';

export class HeadScreen extends React.Component {
  render() {
    const { data } = this.props;
    const { setPopUp } = data;

    return (
      <Screen currentItem={0}>
        <div className={ROOT_CLASS}>
          <div className={`${ROOT_CLASS}__header`}>
            Reform how you buy<br />
            and sell crypto.<br />
            Sync with the best<br />
            traders automatically
          </div>
          <div className={`${ROOT_CLASS}__pre-sale-info`}>
            <div className={`${ROOT_CLASS}__list-wrap`}>
              <div className={`${ROOT_CLASS}__list`}>
                <div className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    Passive earning on professional trading with the best crypto
                    traders
                  </span>
                </div>
                <div className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    All the crypto is kept in the wallet of investor at all time
                  </span>
                </div>
                <div className={`${ROOT_CLASS}__list-item`}>
                  <span className={`${ROOT_CLASS}__list-item-title`}>
                    Success fees only
                  </span>
                </div>
              </div>
            </div>
            <div className={`${ROOT_CLASS}__timer-wrap`}>
              <div className={`${ROOT_CLASS}__timer-title`}>
                Token Pre-Sale starts in
              </div>
              <Timer />
            </div>
          </div>
          <div className={`${ROOT_CLASS}__buttons`}>
            <a
              href="https://my.cindx.io/user/login?landing=1"
              className="href_noUnder"
              target="__blank">
              <Button title="JOIN PRE-SALE" />
            </a>
            <a
              href="http://192.81.220.26"
              className="href_noUnder"
              target="__blank">
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
              <a
                href={docs.wp}
                target="__blank"
                onClick={() => {
                  if (typeof window.yaCounter49156897 !== 'undefined') {
                    window.yaCounter49156897.reachGoal('Download_WP_Main_Site');
                  }
                }}>
                <Doc icon="paper" title="Whitepaper" />
              </a>
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <a
                href={docs.presentation}
                target="__blank"
                onClick={() => {
                  if (typeof window.yaCounter49156897 !== 'undefined') {
                    window.yaCounter49156897.reachGoal(
                      'Download_Presentation_Main_Site'
                    );
                  }
                }}>
                <Doc icon="slides" title="Presentation" />
              </a>
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <a
                href={docs.one_pager}
                target="__blank"
                onClick={() => {
                  if (typeof window.yaCounter49156897 !== 'undefined') {
                    window.yaCounter49156897.reachGoal('Download_OP_Main_Site');
                  }
                }}>
                <Doc icon="paper" title="One Pager" />
              </a>
            </div>
            <div className={`${ROOT_CLASS}__doc-wrap`}>
              <a
                href={docs.math_model}
                target="__blank"
                onClick={() => {
                  if (typeof window.yaCounter49156897 !== 'undefined') {
                    window.yaCounter49156897.reachGoal('Download_MM_Main_Site');
                  }
                }}>
                <Doc icon="circles" title="Math Model" />
              </a>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}
