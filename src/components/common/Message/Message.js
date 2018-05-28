import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Plx from 'react-plx';
import { RearMethods } from '@components/scenes/prlxData/methods';

let newMeth = new RearMethods();

class Message extends React.Component {
  render() {
    const { mountain, text, prlxData } = this.props;
    const { w, h } = mountain;

    if (!w) return null;

    newMeth.prToPixel(['i', 'properties', 'i'], prlxData, w, [
      'startValue',
      'endValue'
    ]);

    console.log('width of message', w);
    console.log('height of message', h);
    console.log('l & b', {
      left: w / 100 * 29.95,
      bottom: h / 100 * 8.2
    });

    return (
      <Plx
        className="messages-prlx"
        parallaxData={prlxData}
        style={{
          left: w / 100 * 29.95 - 400 + global.WIDTH / 100 * global.LEFT,
          bottom: h / 100 * 8.2 + h / 100 * 6 //(((w/100) * 2)*(1.121626831148805))

          // width={(w/100) * 2} height={((h/100) * 6)}
        }}>
        {text}
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
  Message
);

export { connectedContainer as Message };
