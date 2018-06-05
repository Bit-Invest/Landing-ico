import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Message } from './';
import Plx from 'react-plx';
import {
  messagePrlx1,
  messagePrlx2,
  messagePrlx3,
  messagePrlx2_1,
  messagePrlx2_2,
  messagePrlx2_3,
  messagePrlx2_4
} from '@components/scenes/prlxData/';
import { RearMethods } from '@components/scenes/prlxData/methods';

let newMeth = new RearMethods();

class Messages extends React.Component {
  render() {
    const { mountain, text } = this.props;
    const { w, h } = mountain;

    if (!w) return null;

    return (
      <React.Fragment>
        <Message
          prlxData={messagePrlx1}
          text={
            <span className="messageSpan">
              MY PROBLEM NO 1:{' '}
              <p>
                Had some money to invest in the game, but couldn’t find the best
                trader to manage it
              </p>
            </span>
          }
        />
        <Message
          prlxData={messagePrlx2}
          text={
            <span className="messageSpan">
              MY PROBLEM NO 2:{' '}
              <p>
                I never felt comfortable letting others handle my investment
              </p>
            </span>
          }
        />
        <Message
          prlxData={messagePrlx3}
          text={
            <span className="messageSpan">
              MY PROBLEM NO 3: <p>Not sure how it works</p>
            </span>
          }
        />

        <Message
          prlxData={messagePrlx2_1}
          text="I’m joining CINDX with my crypto assets"
        />
        <Message
          prlxData={messagePrlx2_2}
          text="I'm joining CINDX with my expertise"
        />
        <Message
          prlxData={messagePrlx2_3}
          text="I joined CINDX with instruments for traders"
        />
        <Message
          prlxData={messagePrlx2_4}
          text="We provide a one-stop solution for easy, secure and efficient cryptoassets trading"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mountain: state.counter.mountain
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  Messages
);

export { connectedContainer as Messages };
