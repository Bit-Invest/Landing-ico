import React from 'react';
import imageMouns from '@assets/export_mountain_v2/mountain_new2.svg';
import imageFunicular from '@assets/export_mountain_v2/kabinka.svg';
import { Content_c1 } from '../';
import Plx from "react-plx";

class RearDt {
  constructor(props) {
    Object.assign(this,{
      ...props,
      ParallaxData1: [
        {
          start: 0,
          end:  1000,
          properties: [
            {
              startValue: 0,
              endValue: -14,
              property: "translateX"
            },
            {
              startValue: 0,
              endValue: 5,
              property: "translateY"
            }
          ]
        }
      ],
      ParallaxData2: [
        {
          start: 0,
          end:  1000,
          properties: [
            {
              startValue: 0,
              endValue: -10.7,
              property: "translateX"
            },
            {
              startValue: 0,
              endValue: 0.5,
              property: "translateY"
            },
          ]
        },
        {
          start: 1000,
          end:  2000,
          properties: [
            {
              startValue: -10.7,
              endValue: -5.3,
              property: "translateX"
            },
            {
              startValue: 0.5,
              endValue: -.2,
              property: "translateY"
            },
          ]
        },
      ],
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
    let wh = window.innerWidth > window.innerHeight;
    let pr = 2.24184553931084;

    return {
      width: wh ? window.innerWidth * 2 : (window.innerHeight * 2) * pr,
      height: wh ? (window.innerWidth * 2) / pr : window.innerHeight * 2 
    }
  }
};

export class RearLayout extends React.Component {
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

  updateDimensions = () => {
    const { stateSizes } = this;

    stateSizes();
  }

  stateSizes = () => {
    const { RearCons, prToPixel } = this;
    const { ParallaxData1, ParallaxData2 } = RearCons;

    RearCons.bgMounimage((args) => {
      this.setState({
        w: args.width,
        h: args.height
      })

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
    })
  }

  prToPixel = (path,arr,full,keys) => {
    console.log('2',arr)
    for(let q in arr){
      for(let w in arr[q].properties){
        arr[q].properties[w].startValue *= (full / 100);
        arr[q].properties[w].endValue *= (full / 100);
      } 
    }

    return arr;
  }

  render() {
    const { className, RearCons } = this;
    const { ParallaxData1, ParallaxData2 } = RearCons;
    const {
      w,
      h,
      prlx1
    } = this.state;

    console.log(ParallaxData2)

    return (
      <div className={className}>
        <React.Fragment>
          <Plx parallaxData={ParallaxData1} className="bgMountains">
            <img src={imageMouns} className="bgMountains-img" style={{
              width: w,
              height: h,
              bottom: -(h/100) * 10
            }} />
          </Plx>
          <Plx parallaxData={ParallaxData2} className="funicular" style={{
              left: (w/100) * 29.95,
              bottom: (h/100) * 8.2, //(((w/100) * 2)*(1.121626831148805))
            }}>
            <img src={imageFunicular} className="funicular-img" width={(w/100) * 2} height={((h/100) * 6)} />
          </Plx>
        </React.Fragment>
        <Content_c1 />
      </div>    
    );
  }
}
