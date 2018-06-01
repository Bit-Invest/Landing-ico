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

import CINDX_v_2_p_25 from '@assets/export_mountain_v2/CINDX_v_2_p_25.svg';
import CINDX_v_2_p_16 from '@assets/export_mountain_v2/CINDX_v_2_p_16.svg';
import CINDX_v_2_p_15 from '@assets/export_mountain_v2/CINDX_v_2_p_15.svg';

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
    const { data } = this.props;
    const { RearCons } = this;
    const { ParallaxData, ParallaxData1, ParallaxData2 } = RearCons;
    const {
      prlx1
    } = this.state;

    console.log(777, this.props);

    return (
      <div className="contents">
      	<Plx parallaxData={[]}>
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
