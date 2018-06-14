import React from 'react';
import { Button } from '@common/Button';
import { Checkbox } from '@common/Checkbox';

import Mailchimp from '@common/react-mailchimp-form/src';

const ROOT_CLASS = 'pop-up';

const AgreeClass = props => (
  <div className={`${ROOT_CLASS}__checkbox-wrap`}>
    <Checkbox
      title="I agree with the processing of my personal data"
      isChecked={true}
    />
  </div>
);

export class PopUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };
  }

  successSend = () => {
    console.log('dataLayer', window.dataLayer);

    if (typeof window.yaCounter49156897 !== 'undefined') {
      window.yaCounter49156897.reachGoal('Subscribe_Mail_Button_Main_Site');
    }

    if (typeof window.dataLayer !== 'undefined') {
      console.log('dataLayer send');
      window.dataLayer.push({
        event: 'Sent-Form-Ok_Main_site'
      });

      window.open('/thank_you_mail_2.html');

      var iframe = document.createElement('iframe');

      iframe.src = '/thank_you_mail_2.html';
      iframe.width = '0';
      iframe.height = '0';
      document.body.appendChild(iframe);
    } else {
      console.log('dataLayer undefined');
    }
  };

  render() {
    const { data } = this.props;
    const { setPopUp } = data;

    return (
      <div className={`${ROOT_CLASS}`}>
        <div className={`${ROOT_CLASS}__content-wrap`}>
          <div className={`${ROOT_CLASS}__header`}>
            <div className={`${ROOT_CLASS}__logo`} />
            <div
              className={`${ROOT_CLASS}__check`}
              onClick={() => {
                setPopUp(false);
              }}
            />
          </div>
          <div className={`${ROOT_CLASS}__title`}>
            Subscribe <br /> to stay tuned
          </div>
          <Mailchimp
            className="FormMailchimp"
            successSend={this.successSend}
            AgreeClass={AgreeClass}
            action="https://cindx.us18.list-manage.com/subscribe/post?u=db1d36c6102f48b114c4c032b&amp;id=2185faf8f0"
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Enter your e-mail',
                type: 'email',
                required: true
              }
            ]}
          />

          <div style={{ display: 'none' }}>
            <input
              className={`${ROOT_CLASS}__input`}
              placeholder="Enter your e-mail"
              onChange={e => {
                console.log(this.form);
                this.setState({
                  email: e.target.value
                });
              }}
            />
            <div className={`${ROOT_CLASS}__checkbox-wrap`}>
              <Checkbox title="I agree with the processing of my personal data" />
            </div>
            <div className={`${ROOT_CLASS}__button-wrap`}>
              <Button
                title="SUBSCRIBE"
                onClick={() => {
                  fetch(
                    `https://cindx.us18.list-manage.com/subscribe/post?u=db1d36c6102f48b114c4c032b&id=2185faf8f0&c=jQuery1900180206665517201_1527882953663&FNAME=%D0%98%D0%B1%D1%80%D0%B0%D0%B3%D0%B8%D0%BC2&PHONE=79888174400&EMAIL=${
                      this.state.email
                    }&_=1527882953664`
                  ).then(function(response) {
                    console.log(response);
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
