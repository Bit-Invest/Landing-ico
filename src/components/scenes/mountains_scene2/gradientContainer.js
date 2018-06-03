import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import Plx from 'react-plx';
import {
  prlxMoun2Scene,
  prlxMoun2ScenePeople,
  prlxMoun2ScenePeople2
} from '../prlxData/';
import imageMouns2 from '@assets/export_mountain_v2/Mountain_right_side.svg';
import Three_men from '@assets/export_mountain_v2/Three_men.svg';
import Wink_gif from '@assets/export_mountain_v2/Wink_gif.gif';

class GradientContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadCanvasSvg } = this;
    loadCanvasSvg();
  }

  loadCanvasSvg = () => {
    let h = global.HEIGHT,
      w = h;

    const ctx = this.canvasMoun2.getContext('2d');

    const image = new window.Image();
    image.src = imageMouns2;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, w, h);
    };
  };

  render() {
    const { w, h } = this.props;

    return (
      <Plx
        className="scene fixedScene Moun2Scene"
        style={{ zIndex: 99 }}
        parallaxData={prlxMoun2Scene}>
        <canvas
          ref={c => (this.canvasMoun2 = c)}
          className="M2"
          height={global.HEIGHT}
          width={global.HEIGHT}
        />
        <Plx parallaxData={prlxMoun2ScenePeople}>
          <img
            className="M23"
            src={Three_men}
            width={w / 100 * 17}
            height={h / 100 * 17}
            style={{
              right: w / 100 * 5,
              bottom: h / 100 * 3
            }}
          />
        </Plx>
        <Plx parallaxData={prlxMoun2ScenePeople2}>
          <img
            className="M23"
            src={Wink_gif}
            height={h / 100 * 35}
            style={{
              right: w / 100 * 5,
              bottom: h / 100 * 3
            }}
          />
        </Plx>
      </Plx>
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
