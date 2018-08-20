import * as React from 'react';
import Slider from "react-slick";
import block_7_ava_bg from '../../images/block_7_ava_bg.png';
import IB from '../../media/news/IB.png';
import IS from '../../media/news/IS.png';
import Medium from '../../media/news/Medium.png'
import MediaMedium from '../../media/media/medium-logo.png'
import MediaForbes from '../../media/media/forbes-logo.png'
import MediaAmbcrypto from '../../media/media/AMBcrypto.png'
import MediaBitcoinist from '../../media/media/Bitcoinist.png'
import MediaTokendesk from '../../media/media/tokendesk.png'
import MediaBtcmanager from '../../media/media/BTCManager.png'
import MediaBlockonomi from '../../media/media/blockonomi-logo.png'
import MediaBitcoingarden from '../../media/media/bitcoingarden_logo.png'
import MediaDigitaljournal from '../../media/media/digital_journal_transp.png'
import MediaCoinfox from '../../media/media/CoinFox.png'
import './MediaNews.css';

const media = [
  {
    screen: MediaAmbcrypto,
    type: 'ambcrypto',
    name: 'CINDX Aims to Democratize the Modern Financial System',
    text: 'Even as investors in the cryptocurrency space recognize that they are at the forefront of a new financial revolution, adoption by the general populace is yet to occur. While 3rd parties are slowly entering the space in the form of hedge funds and other investors, very few individuals seem to have taken the step to invest in cryptocurrencies on their own.',
    src: 'https://ambcrypto.com/how-cindx-is-democratizing-the-modern-financial-system-2/'
  },
  {
    screen: MediaBitcoinist,
    type: 'bitcoinist',
    name: 'CINDX Announces Plans For ICO Pre-Sale Amidst Release Of Revolutionary Crypto Trading Hub That Allows Users To Follow Expert Traders',
    text: 'CINDX takes its business seriously with particular attention and cares to legal matters and has taken great pains to ensure that CINDX is as compliant as possible with global regulations.',
    src: 'https://bitcoinist.com/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaTokendesk,
    type: 'tokendesk',
    name: 'How CINDX is Democratizing the Modern Financial System',
    text: 'CINDX is a new platform that is making crypto trading easier, more secure, and more accessible. With this platform, it’s possible to have your funds traded without high fees or minimum investments, with the added security and transparency of blockchain technology.',
    src: 'https://www.tokendesk.io/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBtcmanager,
    type: 'btcmanager',
    name: 'CINDX is making crypto trading easier, more secure, and more accessible.',
    text: 'Cryptocurrency and blockchain technology have been slated as powerful tools capable of fueling a global financial revolution. There are myriad opportunities to invest in the crypto space, and yet, very few individuals have undertaken the steps necessary to invest.',
    src: 'https://btcmanager.com/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBlockonomi,
    type: 'blockonomi',
    name: 'CINDX Announces Plans Release Of Revolutionary Crypto Trading Hub',
    text: 'The CINDX platform creates a complete ecosystem for cryptocurrency trading that is favorable to all the participants of the market and offers solutions to existing pain points.',
    src: 'https://blockonomi.com/cindxico-pre-sale/'
  },
  {
    screen: MediaBitcoingarden,
    type: 'bitcoingarden',
    name: 'CINDX Announces Plans For ICO Pre-Sale',
    text: 'CINDX made headlines this week with the announcement that they will be opening their ICO Pre-Sale in late August after investors interest in the ICO peaks to new levels.',
    src: 'https://bitcoingarden.org/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaDigitaljournal,
    type: 'digitaljournal',
    name: 'CINDX Will Be Opening ICO Pre-Sale in late August',
    text: 'The CINDX Crypto trading platform has a myriad of features and benefits that haven’t been seen in other platforms to date.',
    src: 'http://www.digitaljournal.com/pr/3881157'
  },
  {
    screen: MediaCoinfox,
    type: 'coinfox',
    name: '5 Tips from CINDX Crypto Assets Management Hub: How to Avoid Being Cheated',
    text: 'The team behind the CINDX crypto assets management hub has created a helpful set of guidelines on how not to become victims of unfair play, so you can learn what should be primarily taken into account when evaluating ICOs before investing in them.',
    src: 'http://www.coinfox.info/news/10108-cryptocurrencies-and-private-capital-management-cindx-platform-allows-easy-and-profitable-investment-in-cryptocurrencies'
  }
]

const news = [
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: IB,
    name: 'CINDX took part in Moscow ICO Summit 2018',
    text: 'CINDX team introdused the project to the Russian crypto community during ICO Summit event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: IS,
    name: 'CINDX took part in Moscow ICO Summit 2018',
    text: 'CINDX team introdused the project to the Russian crypto community during ICO Summit event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642',
    screen: Medium,
    name: 'How CINDX is ensuring legal compliance',
    text: 'Our company is registered in Estonia.',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: Medium,
    name: 'The strategic meeting of the international CINDX team',
    text: 'Every day our team takes one more step on the way to creation and start of the CINDX...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: Medium,
    name: 'CINDX meets Vangoo Capital Partners Fund ',
    text: 'Today we have welcomed Kevin Shang from Vangoo Capital Partners and his colleagues...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: Medium,
    name: 'CINDX meets 9coin Digital Asses Exchange',
    text: 'The CINDX team continues active work on building relationships with various international...',
    source: 'www.medium.com'
  },
];

export class MediaNews extends React.Component {
  mapNews = () => {
    return news.map((el, i) => {
      return (
        <div key={i}  className="item">
          <div className="txtNews">
            <img className="img" src={el.screen} alt="CINDEX"/>
            <div className="content">
              <h3>{el.name}</h3>
              <div className="clear" />
              <p>{el.text}</p>
              <a target="_blank" href={el.videoSrc}>{el.source}</a>
            </div>
          </div>
        </div>
      );
    })
  }
  mapMedia = () => {
    return media.map((el, i) => {
      return (
        <div key={i} className="txt">
          <div className="bg">
            <a href={el.src} target="_blank">
              <img className={"media-img " + el.type} src={el.screen} alt="CINDEX"/>
            </a>
            <h3>{el.name}</h3>
            <p>{el.text}</p>
          </div>
        </div>
      );
    })
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsNews = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsNews2 = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settings3 = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="block_7">
        <div className="size">
          <h2 className="header_blocks">Media</h2>
          <div className="block_arrow_relative">
            <div className="settings">
              <Slider {...settings}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settings2">
              <Slider {...settings2}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settings3">
              <Slider {...settings3}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <hr/>
          <h2 className="header_blocks">News</h2>
          <div className="block_arrow_relative">
            <div className="settingsNews">
              <Slider {...settingsNews}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews2">
              <Slider {...settingsNews2}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews3">
              <Slider {...settingsNews3}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
