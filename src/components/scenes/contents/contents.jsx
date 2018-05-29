import React from 'react';
import Plx from "react-plx";
import { HeadScreen } from '@screens/HeadScreen';
import { VideoScreen } from '@screens/VideoScreen';
import { LaptopScreen } from '@screens/LaptopScreen';
import { TitleScreen } from '@screens/TitleScreen';
import { HowDoesItScreen } from '@screens/HowDoesItScreen';
import { JoinPresaleScreen } from '@screens/JoinPresaleScreen';
import { TextOne } from '@screens/TextOne';
import { MarketAnalytics } from '@screens/MarketAnalytics';
import { RiseOfCapital } from '@screens/RiseOfCapital';
import { KeyDocs } from '@screens/KeyDocs';
import { Geographic } from '@screens/Geographic';

import Graph_01 from '@assets/export_mountain_v2/Graph_01.svg';
import Graph_02 from '@assets/export_mountain_v2/Graph_02.svg';
import Graph_03 from '@assets/export_mountain_v2/Graph_03.svg';

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
        {
          start: 800,
          end:  900,
          properties: [
            {
              startValue: -600,
              endValue: -700,
              property: "translateY"
            }
          ]
        },
        {
          start: 900,
          end:  1000,
          properties: [
            {
              startValue: -700,
              endValue: -800,
              property: "translateY"
            }
          ]
        },
        {
          start: 1000,
          end:  1100,
          properties: [
            {
              startValue: -800,
              endValue: -900,
              property: "translateY"
            }
          ]
        },
        {
          start: 1100,
          end:  1200,
          properties: [
            {
              startValue: -900,
              endValue: -1000,
              property: "translateY"
            }
          ]
        },
        {
          start: 1200,
          end:  1300,
          properties: [
            {
              startValue: -1000,
              endValue: -1100,
              property: "translateY"
            }
          ]
        },
        {
          start: 1300,
          end:  1400,
          properties: [
            {
              startValue: -1100,
              endValue: -1200,
              property: "translateY"
            }
          ]
        },
        {
          start: 1400,
          end:  1500,
          properties: [
            {
              startValue: -1200,
              endValue: -1300,
              property: "translateY"
            }
          ]
        },
        {
          start: 1500,
          end:  1600,
          properties: [
            {
              startValue: -1300,
              endValue: -1400,
              property: "translateY"
            }
          ]
        },
        {
          start: 1600,
          end:  1700,
          properties: [
            {
              startValue: -1400,
              endValue: -1500,
              property: "translateY"
            }
          ]
        },
        {
          start: 1700,
          end:  1800,
          properties: [
            {
              startValue: -1500,
              endValue: -1600,
              property: "translateY"
            }
          ]
        },
        {
          start: 1800,
          end:  1900,
          properties: [
            {
              startValue: -1600,
              endValue: -1700,
              property: "translateY"
            }
          ]
        },
        {
          start: 2000,
          end:  2100,
          properties: [
            {
              startValue: -1700,
              endValue: -1800,
              property: "translateY"
            }
          ]
        },
        {
          start: 2100,
          end:  2200,
          properties: [
            {
              startValue: -1800,
              endValue: -1900,
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
              title="Via Cindex you can do both the best. Thanks to the rating system."
              description="We provide the pull of traders and their rating us formed according to the history of trading through terminal on our platform."
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 2" 
              title="Here all your crypto assets to manage are kept in your wallet all the time"
              description="Decentralisation and smart contracts allow to manage cryptocurrencies on other wallets with no necessity to transfer any funds to trader"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 3" 
              title="You earn on a professional trading of the best crypto traders"
              description="Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market"
            />
          </div>
          <div className="containerContent containerBlocks">
            <HowDoesItScreen />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne 
              text1="Investor"
              text2="increases his crypto capital by the efficient management of his assets by a professional trader"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne 
              text1="Trader"
              text2="earns his success fees building a pull of investors on the deep understanding of the market and trade strategy"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne 
              text1="Vendor"
              text2="sells advanced tools for traders e.g. trade robots and news feeds"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne 
              text1="CINDX"
              text2="earnes on success fees commission and subscription for terminal"
            />
          </div>
          <div className="containerContent containerBlocks">
            <MarketAnalytics 
              header="Market Analytics"
              text1="The traditional trust management market. Since 2000 the global trust management market has grown by over 250%. This is a result of constant improvements in market tools and the general development of market structuring"
              text2="Despite the explosive growth of the cryptocurrency market in 2017, the industry is still in its infancy. The market capitalisation was $600 billion at the end of 2017, which is still only 1% of the trust management industry"
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital 
              title="Global Aum"
              title2="$ Trillions"
              imageSrc={Graph_03}
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital 
              title="Investment"
              imageSrc={Graph_02}
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital 
              title="Rise of crypto capital"
              imageSrc={Graph_01}
            />
          </div>
          <div className="containerContent containerBlocks">
            <Geographic />
          </div>
          <div className="containerContent containerBlocks">
            <KeyDocs 
              text1="CINDX"
              text2="earnes on success fees commission and subscription for terminal"
            />
          </div>
          <div className="containerContent containerBlocks">
            <JoinPresaleScreen />
          </div>
      	</Plx>
  		</div>
    );
  }
}
