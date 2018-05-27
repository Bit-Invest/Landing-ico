import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { RearLayout } from './footer';
import Plx from 'react-plx';

class FooterContainer extends React.Component {
  render() {
    return <RearLayout />;
  }
}

const mapStateToProps = state => {
  return {
    //state
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
  FooterContainer
);

export { connectedContainer as FooterContainer };
