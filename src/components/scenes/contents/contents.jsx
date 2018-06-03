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
import { ICODetailsScreen } from '@screens/ICODetailsScreen';
import { TokenDetailsScreen } from '@screens/TokenDetailsScreen';
import { DistributionScreen } from '@screens/DistributionScreen';
import { VideoPopUp } from '@common/VideoPopUp';

import CINDX_v_2_p_25 from '@assets/export_mountain_v2/CINDX_v_2_p_25.svg';
import CINDX_v_2_p_16 from '@assets/export_mountain_v2/CINDX_v_2_p_16.svg';
import CINDX_v_2_p_15 from '@assets/export_mountain_v2/Chart.svg';

class RearDt {
  constructor(props) {
    Object.assign(this,{
      ...props,
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

    const { fadeInOut } = this;

    this.state = {
    	prlx1: fadeInOut()
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

  fadeInOut = () => {
    const arrPrlxFade = [];

    for (let i = 0; i < 30; i++) {
      arrPrlxFade.push(
        {
          start: (i * global.HEIGHT) - 100,
          end:  (i * global.HEIGHT),
          properties: [
            {
              nopx: true,
              startValue: 0,
              endValue: 1,
              property: "opacityFilter"
            }
          ]
        },
        {
          start: (i * global.HEIGHT),
          end:  (i * global.HEIGHT) + 100,
          properties: [
            {
              nopx: true,
              startValue: 1,
              endValue: 0,
              property: "opacityFilter"
            }
          ]
        }
      );
    }

    return arrPrlxFade;
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
    const { data } = this.props;
    const { RearCons } = this;
    const { ParallaxData, ParallaxData1, ParallaxData2 } = RearCons;
    const {
      prlx1,
    } = this.state;

    console.log(prlx1)

    return (
      <div className="contents">
      	<Plx parallaxData={prlx1}>
      		<Plx parallaxData={ParallaxData1}>
  					<div className="containerContent containerBlocks">
              <HeadScreen
                data={data}
              />
    				</div>
    			</Plx>
    			<Plx parallaxData={ParallaxData2}>
  					<div className="containerContent containerBlocks">
    				  <VideoScreen />
            </div>
    			</Plx>
          <div className="containerContent containerBlocks">
            <TitleScreen
              header="So what problems do we solve?"
              title="CINDX is a one-stop solution for easy, secure and efficient crypto-assets trading"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 1"
              title="Cindx offers best of both worlds, thanks to their rating system"
              description="We offer a rating system using trading history that guarantees you find the right manager for you."
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 2"
              title="Here all your crypto assets to manage are kept in your wallet at all times"
              description="Decentralisation and smart contracts allow one to manage their wallets, without having to transfer funds to managers"
            />
          </div>
          <div className="containerContent containerBlocks">
            <LaptopScreen
              header="Feature 3"
              title="You earn following the best"
              description="Investors join to sync their transactions with the best players on the marketplace"
            />
          </div>
          <div className="containerContent containerBlocks">
            <HowDoesItScreen />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne
              text1="Investor"
              text2="Increase their crypto holdings through efficient trading by asset managers"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne
              text1="Trader"
              text2="Earn their success fees by building a following of investors using their deep understanding of market and trade strategy"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne
              text1="Vendor"
              text2="Sells advanced financial instruments and trading tools for traders"
            />
          </div>
          <div className="containerContent containerBlocks">
            <TextOne
              text1="CINDX"
              text2="Earns on success fee commissions and subscriptions to the terminal"
            />
          </div>
          <div className="containerContent containerBlocks">
            <MarketAnalytics
              header="Market Analytics"
              text1="Since the year 2000, the global trust management market has grown over 250%. This is as a result of constant innovations in the market and continuous updates to the market tools, as well as the general development of the market structure."
              text2="Despite the explosive growth of the cryptocurrency market in 2017, the industry is still in its infancy. The market capitalisation at the end of 2017 was at $600 billion, which still makes up only about 1% of the trust management industry."
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital
              title="Global Aum*"
              title2="$ Trillions"
              imageSrc={CINDX_v_2_p_15}
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital
              title="Investment"
              imageSrc={CINDX_v_2_p_16}
            />
          </div>
          <div className="containerContent containerBlocks">
            <RiseOfCapital
              title="Rise of crypto capital"
              imageSrc={CINDX_v_2_p_25}
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
            <ICODetailsScreen />
          </div>
          <div className="containerContent containerBlocks">
            <DistributionScreen />
          </div>
          <div className="containerContent containerBlocks">
            <TokenDetailsScreen />
          </div>
          <div className="containerContent containerBlocks">
            <JoinPresaleScreen />
          </div>
      	</Plx>
  		</div>
    );
  }
}
