import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import Plx from 'react-plx';
import { prlxLeftScene } from '../prlxData/';
import { PopUp } from '@common/PopUp/';

class GradientContainer extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div
        className="scene fixedScene popUpScene"
        style={{
          display: data.popup ? null : 'none'
        }}>
        <PopUp data={data} />
      </div>
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
  GradientContainer
);

export { connectedContainer as GradientContainer };
