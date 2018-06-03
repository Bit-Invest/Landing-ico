import React from 'react';
import imageMouns from '@assets/export_mountain_v2/mountain_new23.svg';
import imageFunicular from '@assets/export_mountain_v2/kabinka_2.svg';
import imageMoon from '@assets/export_mountain_v2/moon.svg';
import imagePlay_button from '@assets/export_mountain_v2/play_button.svg';
import Guy from '@assets/gifs/Guy.gif';
import Plx from "react-plx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { set_wh_mountain } from '../../../modules/counter';
import { Gradient2 } from '../mountains_scene2/';

class RearDt {
  constructor(props) {
    Object.assign(this,{
      ...props,

      ParallaxFilter: [
        {
          start: 0,
          end:  300,
          properties: [
            {
              startValue: 0,
              endValue: 0,
              property: "translateY"
            },
          ]
        }
      ],

      ParallaxUpperBg: [
        {
          start: 0,
          end:  300,
          properties: [
            {
              nopx: false,
              startValue: 1,
              endValue: .5,
              property: "opacityFilter"
            },
          ]
        },
        {
          start: 14000,
          end: 15000,
          ratioHeight: window.innerHeight,
          properties: [
            {
              startValue: .5,
              endValue: .0,
              property: 'opacityFilter'
            }
          ]
        }
      ],

      ParallaxData1: [
        {
          start: 0,
          end:  1000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 0,
              endValue: -4.6,
              property: "translateX"
            },
            {
              startValue: 0,
              endValue: 1.6,
              property: "translateY"
            }
          ]
        },
        {
          start: 1000,
          end:  2000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -4.6,
              endValue: -9.3,
              property: "translateX"
            },
            {
              startValue: 1.6,
              endValue: 3.3,
              property: "translateY"
            }
          ]
        },
        {
          start: 2000,
          end:  3000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -9.3,
              endValue: -14,
              property: "translateX"
            },
            {
              startValue: 3.3,
              endValue: 5,
              property: "translateY"
            }
          ]
        },
        {
          start: 2000,
          end:  3000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -14,
              endValue: -29,
              property: "translateX"
            },
            {
              startValue: 5,
              endValue: 10,
              property: "translateY"
            },
          ]
        },
        {
          start: 15000,
          end:  15500,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -29,
              endValue: -19,
              property: "translateX"
            },
            {
              startValue: 10,
              endValue: 6,
              property: "translateY"
            },
          ]
        },
      ],
      ParallaxData2: [
        {
          start: 0,
          end:  1000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 0,
              endValue: -1.3,
              property: "translateX"
            },
            {
              startValue: 0,
              endValue: -2.9,
              property: "translateY"
            },
          ]
        },
        {
          start: 1000,
          end:  2000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -1.3,
              endValue: -0.8,
              property: "translateX"
            },
            {
              startValue: -2.9,
              endValue: -1.45,
              property: "translateY"
            },
          ]
        },
        {
          start: 2000,
          end:  3000,
          ratio: 3,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -0.8,
              endValue: -3.0,
              property: "translateX"
            },
            {
              startValue: -1.45,
              endValue: -3.5,
              property: "translateY"
            },
          ]
        },
        {
          start: 2000,
          end:  3000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -3.0,
              endValue: 10.2,
              property: "translateX"
            },
            {
              startValue: -3.5,
              endValue: -13.7,
              property: "translateY"
            },
          ]
        },
        {
          start: 15000,
          end:  15500,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 10.2,
              endValue: -8.6,
              property: "translateX"
            },
            {
              startValue: -13.7,
              endValue: -1.3,
              property: "translateY"
            },
          ]
        },
        {
          start: 17000,
          end:  17500,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -8.6,
              endValue: -7.6,
              property: "translateX"
            },
            {
              startValue: -1.3,
              endValue: -2.5,
              property: "translateY"
            },
          ]
        },
        {
          start: 17500,
          end:  18000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -7.6,
              endValue: -3.6,
              property: "translateX"
            },
            {
              startValue: -2.5,
              endValue: -2.8,
              property: "translateY"
            },
          ]
        },
        {
          start: 18500,
          end:  19000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -3.6,
              endValue: -1.1,
              property: "translateX"
            },
            {
              startValue: -2.8,
              endValue: -6.4,
              property: "translateY"
            },
          ]
        },
        {
          start: 19500,
          end:  20000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: -1.1,
              endValue: 3.3,
              property: "translateX"
            },
            {
              startValue: -6.4,
              endValue: -7.6,
              property: "translateY"
            },
          ]
        },
        {
          start: 20500,
          end:  21000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 3.3,
              endValue: 3.3,
              property: "translateX"
            },
            {
              startValue: -7.6,
              endValue: -10.6,
              property: "translateY"
            },
          ]
        },
      ],

      prlxMoon1: [
        {
          start: 0,
          end:  500,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              nopx: true,
              startValue: 1,
              endValue: 0,
              property: "opacityFilter"
            }
          ]
        },
        {
          start: 1500,
          end:  2000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              nopx: true,
              startValue: 0,
              endValue: 1,
              property: "opacityFilter"
            }
          ]
        },
      ],

      prlxMoon2: [
        {
          start: 0,
          end:  10,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 0,
              endValue: 0,
              property: "opacityFilter"
            }
          ]
        },
        {
          start: 500,
          end:  1000,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacityFilter"
            }
          ]
        },
        {
          start: 1000,
          end:  1500,
          ratioHeight: global.HEIGHT,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacityFilter"
            }
          ]
        },
      ]

    })
  }

  bgMounimage = (callBack) => {
    let img = new Image();

    img.src = imageMouns;
    img.onload = () => {
      const { sizes } = this;

      callBack({
        ...sizes()
      });
    };
  }

  sizes = () => {
    let wh = global.WIDTH > global.HEIGHT;
    let pr = 2.24184553931084;

    return {
      width: wh ? global.WIDTH * 2 : (global.HEIGHT * 2) * pr,
      height: wh ? (global.WIDTH * 2) / pr : global.HEIGHT * 2 
    }
  }
};

class RearLayout extends React.Component {
  constructor(props) {
    super(props);

    Object.assign(this,{
      className: props.className,
      RearCons: new RearDt({
        //options
      })
    })

    this.state = {
      w: 0,
      h: 0,
    };
  }

  componentWillMount() {
    const { updateDimensions, stateSizes } = this;

    stateSizes();
    window.addEventListener("resize", updateDimensions);
  }

  componentDidMount() {
    const { loadCanvasSvg } = this;

    //loadCanvasSvg();
  }

  updateDimensions = () => {
    const { stateSizes } = this;

    //stateSizes();
  }

  stateSizes = () => {
    const { RearCons, prToPixel, loadCanvasSvg } = this;
    const { ParallaxData1, ParallaxData2, ParallaxFilter, prlxMoon1, prlxMoon2 } = RearCons;
    const { set_wh_mountain } = this.props;

    RearCons.bgMounimage((args) => {
      this.setState({
        w: args.width,
        h: args.height
      })

      set_wh_mountain({
        w: args.width,
        h: args.height
      })

      loadCanvasSvg();

      prToPixel(
        ['i','properties','i'],
        ParallaxData1,
        args.width,
        ['startValue','endValue']
      );

      prToPixel(
        ['i','properties','i'],
        ParallaxData2,
        args.width,
        ['startValue','endValue']
      );

      prToPixel(
        ['i','properties','i'],
        ParallaxFilter,
        global.HEIGHT,
        ['startValue','endValue']
      );

      prToPixel(
        ['i','properties','i'],
        prlxMoon1,
        global.HEIGHT,
        ['startValue','endValue']
      );

      prToPixel(
        ['i','properties','i'],
        prlxMoon2,
        global.HEIGHT,
        ['startValue','endValue']
      );
    })
  }

  prToPixel = (path,arr,full,keys) => {
    for(let q in arr){


      if(arr[q].ratioHeight){
        arr[q].start = (arr[q].start/1000) * arr[q].ratioHeight;
        arr[q].end = (arr[q].end/1000) * arr[q].ratioHeight;
      }

      if(arr[q].ratio){
        arr[q].start /= arr[q].ratio;
        arr[q].end /= arr[q].ratio;
      }
      
      for(let w in arr[q].properties){
        if(!arr[q].properties[w].nopx){
          arr[q].properties[w].startValue *= (full / 100);
          arr[q].properties[w].endValue *= (full / 100);
        }
      } 
    }

    return arr;
  }

  loadCanvasSvg = () => {
    const { w, h, } = this.state;
    const ctx = this.canvasMoun.getContext('2d');

    const image = new window.Image();
    image.src = imageMouns;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, w, h);
    };
  }

  render() {
    const { className, RearCons } = this;
    const { ParallaxData1, ParallaxData2, ParallaxFilter, ParallaxUpperBg, prlxMoon1, prlxMoon2 } = RearCons;
    const {
      w,
      h,
      prlx1
    } = this.state;
    
    return (
      <div className={className}>
        <Plx parallaxData={ParallaxFilter} className="filterBg"></Plx>
        <Plx parallaxData={ParallaxUpperBg} className="upperBg"></Plx>
        <React.Fragment>
          <Plx parallaxData={ParallaxData1} className="bgMountains">
            <canvas 
              ref={(c) => this.canvasMoun = c}
              className="bgMountains-img"
              width={w}
              height={h}
              style={{
                bottom: -(h/100) * 10,
                left: ((global.WIDTH/100) * 20) + ((global.WIDTH/100)*global.LEFT)
              }}>
            </canvas>

            {/*<img src={imageMouns} className="bgMountains-img" style={{
              width: w,
              height: h,
              bottom: -(h/100) * 10,
              left: ((global.WIDTH/100) * 20) + ((global.WIDTH/100)*global.LEFT)
            }} />*/}
          </Plx>
          <Plx parallaxData={ParallaxData2} className="funicular" style={{
            left: ((w/100) * 29.95) + ((global.WIDTH/100)*global.LEFT),
            bottom: (h/100) * 8.2
          }}>
            <img src={imageFunicular} className="funicular-img" width={(w/100) * 2} height={((h/100) * 6)} />
          </Plx>

          <Plx  className="guy" style={{
            left: ((w/100) * 19.95) + ((global.WIDTH/100)*global.LEFT),
            bottom: (h/100) * 0
          }}>
            <img src={Guy} className="guy-img" width={(w/100) * 2} height={((h/100) * 6)} />
          </Plx>

          <Plx className="moon" parallaxData={prlxMoon1} style={{
            left: ((w/100) * 24.95) + ((global.WIDTH/100)*global.LEFT),
            top: (h/100) * 14.2
          }}>
            <img src={imageMoon} className="moon-img" width={(w/100) * 12} height={((h/100) * 12)} />
          </Plx>

          <Plx className="moon playMoon" parallaxData={prlxMoon2} style={{
            left: ((w/100) * 21.95) + ((global.WIDTH/100)*global.LEFT),
            top: (h/100) * 18.2
          }}>
            <img src={imagePlay_button} className="moon-img" width={(w/100) * 17} height={((h/100) * 17)} />
          </Plx>

        </React.Fragment>

        <Gradient2 
          w={w}
          h={h}
        />
      </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      set_wh_mountain
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  RearLayout
);

export { connectedContainer as RearLayout };