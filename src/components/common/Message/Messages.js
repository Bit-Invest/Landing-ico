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
          text="MY PROBLEM NO 1: Had some money to put in the game but couldn`t and check the rigth pro trader to manage them"
        />
        <Message
          prlxData={messagePrlx2}
          text="MY PROBLEM NO 2: I always felt uncomfortable with thee idea to give my money to somebody in order to have them back with profit"
        />
        <Message
          prlxData={messagePrlx3}
          text="MY PROBLEM NO 3: Not sure it works"
        />

        <Message
          prlxData={messagePrlx2_1}
          text="I join Cindex with crypto assets"
        />
        <Message
          prlxData={messagePrlx2_2}
          text="I join Cindex with expertise"
        />
        <Message
          prlxData={messagePrlx2_3}
          text="I join Cindex with Apps for traders"
        />
        <Message
          prlxData={messagePrlx2_4}
          text="Cindx We provide a one-stop solution for easy, secure and eddicient crypto-assets trading"
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
