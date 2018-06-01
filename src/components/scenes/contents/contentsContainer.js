import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { MountainContentPage } from './contents';
import { StickyContainer, Sticky } from 'react-sticky';

class ContentsContainer extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="sceneCnt fixedScene contentScene">
        <div className="layot">
          <MountainContentPage data={data} />
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
  ContentsContainer
);

export { connectedContainer as ContentsContainer };
