import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import Plx from 'react-plx';
import { prlxLeftScene } from '../prlxData/';

class GradientContainer extends React.Component {
  render() {
    return (
      <Plx
        className="scene fixedScene gradientScene"
        style={{ zIndex: 99 }}
        parallaxData={prlxLeftScene}>
        XXX
      </Plx>
    );
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
  GradientContainer
);

export { connectedContainer as GradientContainer };
