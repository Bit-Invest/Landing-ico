import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Message } from './';
import Plx from 'react-plx';
import { messagePrlx1 } from '@components/scenes/prlxData/';
import { RearMethods } from '@components/scenes/prlxData/methods';

let newMeth = new RearMethods();

class Messages extends React.Component {
  render() {
    const { mountain, text } = this.props;
    const { w, h } = mountain;

    if (!w) return null;

    return (
      <Message
        prlxData={messagePrlx1}
        text="MY PROBLEM NO 1: I always felt uncomfortable with thee idea to give my money to somebody in order to have them back with profit"
      />
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
