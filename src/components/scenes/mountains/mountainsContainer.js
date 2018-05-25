import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { RearLayout } from './mountains';
import { StickyContainer, Sticky } from 'react-sticky';

class MountainsContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="scene" style={{ height: 8000 }}>
          <RearLayout className="layot" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ///state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ///
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  MountainsContainer
);

export { connectedContainer as MountainsContainer };
