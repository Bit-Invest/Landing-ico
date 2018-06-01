import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';
import { showVideo } from '@modules/popUps';

const ROOT_CLASS = 'video-screen';

class VideoScreen extends React.Component {
  render() {
    const { showVideo } = this.props;

    return (
      <Screen currentItem={0}>
        <div className={ROOT_CLASS}>
          <div className={`${ROOT_CLASS}__content-wrap`}>
            <div className={`${ROOT_CLASS}__header`}>
              How the technology works for our investor
            </div>
            <div className={`${ROOT_CLASS}__video`} />
          </div>
          <div className={`${ROOT_CLASS}__button`}>
            <Button
              theme="filled"
              title="WATCH VIDEO"
              onClick={() => {
                showVideo();
              }}
            />
          </div>
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {
    //...state.popUps
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showVideo
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  VideoScreen
);

export { connectedContainer as VideoScreen };
