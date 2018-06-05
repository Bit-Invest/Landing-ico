import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Plx from 'react-plx';
import { push } from 'react-router-redux';
import { Screen } from '@common/Screen';
import { Button } from '@common/Button';
import { showVideo } from '@modules/popUps';

import imagePlay_button from '@assets/export_mountain_v2/play_button.svg';

const ROOT_CLASS = 'video-screen';

class VideoScreen extends React.Component {
  render() {
    const { showVideo } = this.props;

    const prlxMoon2 = [
      {
        start: global.HEIGHT - 200,
        end: global.HEIGHT,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: 'translateY'
          }
        ]
      }
    ];

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

          <Plx className="moon playMoon" parallaxData={prlxMoon2}>
            <img
              src={imagePlay_button}
              className="moon-img"
              onClick={() => {
                showVideo();
              }}
            />
          </Plx>
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
