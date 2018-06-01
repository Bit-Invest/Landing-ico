import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { hideVideo } from '@modules/popUps';

const ROOT_CLASS = 'video-pop-up';

class VideoPopUp extends React.Component {
  render() {
    const { popUpShown, videoShown } = this.props;

    const { hideVideo } = this.props;

    return (
      <div
        className={ROOT_CLASS}
        style={{
          display: videoShown ? '' : 'none'
        }}>
        <div className={`${ROOT_CLASS}__undercover`} />
        <div className={`${ROOT_CLASS}__video-wrap`}>
          <div
            className={`${ROOT_CLASS}__check`}
            onClick={() => {
              hideVideo();
            }}
          />
          <div className={`${ROOT_CLASS}__video`}>
            <iframe
              src="https://player.vimeo.com/video/272995021"
              width="640"
              height="360"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.popUps
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideVideo
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  VideoPopUp
);

export { connectedContainer as VideoPopUp };
