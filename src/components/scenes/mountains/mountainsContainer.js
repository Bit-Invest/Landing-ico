import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class MountainsContainer extends React.Component {
  render() {
    return <div>PAGE</div>;
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
