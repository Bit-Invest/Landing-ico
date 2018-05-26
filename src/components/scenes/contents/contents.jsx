import React from 'react';
import Plx from "react-plx";
import { HeadScreen } from '@screens/HeadScreen';
import { VideoScreen } from '@screens/VideoScreen';

class RearDt {
  constructor(props) {
    Object.assign(this,{
      ...props,
      ParallaxData:[
      	{
          start: 3100,
          end:  3500,
          properties: [
          	{
              startValue: 0,
              endValue: -100,
              property: "translateY"
            }
          ]
        },
      ],
      ParallaxData1:[
      	{
          start: 3100,
          end:  3200,
          properties: [
          	{
          		nopx: true,
              startValue: 1,
              endValue: 0,
              property: "opacityFilter"
            }
          ]
        },
      ],
      ParallaxData2:[
      	{
      		start: 0,
          end:  10,
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
          start: 3400,
          end:  3600,
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
    })
  }
};

export class MountainContentPage extends React.Component {
  constructor(props) {
    super(props);

    Object.assign(this,{
      RearCons: new RearDt({
        //options
      })
    })

    this.state = {
    	prlx1: {}
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
    const { ParallaxData } = RearCons;

    prToPixel(
      ['i','properties','i'],
      ParallaxData,
      window.innerHeight,
      ['startValue','endValue']
    );
  }

  prToPixel = (path,arr,full,keys) => {
    for(let q in arr){
      for(let w in arr[q].properties){
      	if(!arr[q].properties[w].nopx){
        	arr[q].properties[w].startValue *= (full / 100);
        	arr[q].properties[w].endValue *= (full / 100);
      	}
      }
    }

    return arr;
  }

  render() {
    const { RearCons } = this;
    const { ParallaxData, ParallaxData1, ParallaxData2 } = RearCons;
    const {
      prlx1
    } = this.state;

    return (
      <div className="contents">
      	<Plx parallaxData={ParallaxData}>
      		<Plx parallaxData={ParallaxData1}>
  					<div className="containerContent">
              <HeadScreen />
    				</div>
    			</Plx>
    			<Plx parallaxData={ParallaxData2}>
  					<div className="containerContent">
    				  <VideoScreen />
    				</div>
    			</Plx>
      	</Plx>
  		</div>
    );
  }
}
