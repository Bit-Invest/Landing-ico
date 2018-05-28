import React from 'react';
import Plx from "react-plx";
import { HeadScreen } from '@screens/HeadScreen';
import { VideoScreen } from '@screens/VideoScreen';
import { LaptopScreen } from '@screens/LaptopScreen';
import { TitleScreen } from '@screens/TitleScreen';
import { HowDoesItScreen } from '@screens/HowDoesItScreen';

class RearDt {
  constructor(props) {
    Object.assign(this,{
      ...props,
      ParallaxData:[
      	{
          start: 0,
          end:  300,
          properties: [
          	{
              startValue: 0,
              endValue: -100,
              property: "translateY"
            }
          ]
        },
        {
          start: 300,
          end:  400,
          properties: [
            {
              startValue: -100,
              endValue: -200,
              property: "translateY"
            }
          ]
        },
        {
          start: 400,
          end:  500,
          properties: [
            {
              startValue: -200,
              endValue: -300,
              property: "translateY"
            }
          ]
        },
        {
          start: 500,
          end:  600,
          properties: [
            {
              startValue: -300,
              endValue: -400,
              property: "translateY"
            }
          ]
        },
        {
          start: 600,
          end:  700,
          properties: [
            {
              startValue: -400,
              endValue: -500,
              property: "translateY"
            }
          ]
        },
        {
          start: 700,
          end:  800,
          properties: [
            {
              startValue: -500,
              endValue: -600,
              property: "translateY"
            }
          ]
        },
      ],
      /*ParallaxData1:[
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
      ],*/
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
  					<div className="containerContent containerBlocks">
              <HeadScreen />
    				</div>
    			</Plx>
    			<Plx parallaxData={ParallaxData2}>
  					<div className="containerContent containerBlocks">
    				  <VideoScreen />
            </div>
    			</Plx>
          <div className="containerContent containerBlocks">
            <TitleScreen 
              header="So what`s the main issues do we manage:"
              title="CINDX is a one-stop solution for easy, secure and effcient crypto-assets trading"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 1" 
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus congue gravida. Sed non feugiat velit, sit amet suscipit metus."
              description="Pellentesque rutrum condimentum felis, sed imperdiet lectus bibendum id. Suspendisse lobortis enim justo"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 2" 
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus congue gravida. Sed non feugiat velit, sit amet suscipit metus."
              description="Pellentesque rutrum condimentum felis, sed imperdiet lectus bibendum id. Suspendisse lobortis enim justo"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 3" 
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus congue gravida. Sed non feugiat velit, sit amet suscipit metus."
              description="Pellentesque rutrum condimentum felis, sed imperdiet lectus bibendum id. Suspendisse lobortis enim justo"
            />
          </div>
          <div className="containerContent containerBlocks">
            <HowDoesItScreen />
          </div>
      	</Plx>
  		</div>
    );
  }
}
