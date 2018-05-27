import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { RearLayout } from './header';
import Plx from 'react-plx';

class HeaderContainer extends React.Component {
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
  HeaderContainer
);

export { connectedContainer as HeaderContainer };
