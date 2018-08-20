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
    videoSrc: 'https://www.youtube.com/watch?v=c4ruJPvo5sI',
    screen: IB,
    name: 'CINDX meets Ian Balina',
    text: 'CINDX pitch to the one of the TOP10 crypto gurus in the world in the Cryptobazar event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: IS,
    name: 'CINDX took part in Moscow ICO Summit 2018',
    text: 'CINDX team introduced the project to the Russian crypto community during ICO Summit event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642',
    screen: Medium,
    name: 'How CINDX is ensuring legal compliance',
    text: 'Our company is registered in Estonia. Why? The answer is simple — the authorities of Estonia have created a strong and innovative legal infrastructure...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    screen: Medium,
    name: '"Keith Teare Co-founder of Accelerated Digital Ventures and Founding Shareholder in TechCrunch"',
    text: 'We continue to introduce CINDX advisers, find out what they...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/meet-worlds-first-financial-crypto-social-network-connect-with-people-as-you-grow-your-wealth-76a3cea9a06c',
    screen: Medium,
    name: "Meet world's first financial crypto social network",
    text: 'Every day our team takes one more step on the way to creation and start...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50',
    screen: Medium,
    name: 'Denis Eskenazi CINDX Product Marketing Director',
    text: 'We continue to tell about the CINDX team and each team member’s professional experience. Please, read about Denis Eskenazi...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-4e075b5d34',
    screen: Medium,
    name: 'CINDX crypto currency exchange license',
    text: 'Our company in Estonia has received Crypto Currency Exchange License. This allows CINDX to provide fiat-to-crypto exchange services. This licence is issued...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    screen: Medium,
    name: 'Austin Kimm Co-founder of Crypterium & CINDS Adviser',
    text: 'We continue to introduce CINDX advisers, find out what they are proud...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: Medium,
    name: 'The strategic meeting of the international CINDX team',
    text: 'Every day our team takes one more step on the way to creation and start of the CINDX platform. Our work...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9',
    screen: Medium,
    name: 'Artur Shamalov CINDX Investment Director',
    text: 'We continue to introduce the CINDX team. Our next article is about Artur Shamalov, a skilled...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d',
    screen: Medium,
    name: 'The issuance of CINX tokens',
    text: 'The issuance of CINX tokens will be carried out according to the license of The Estonian Financial Supervisory Authority (EFSA). What is a token...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    screen: Medium,
    name: '"Amarpreet Singh Co-Founding Member of Malta Blockchain Association & CINDX adviser"',
    text: 'We at CINDX are incredibly proud to present our advisers, tell the world about their achievements and why they have decided to become a part of the CINDX...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: Medium,
    name: 'CINDX meets Vangoo Capital Partners Fund',
    text: 'Today we have welcomed Kevin Shang from Vangoo Capital Partners and his colleagues in our office. We have discussed business partnership opportunities in order to attract investors from the Asian region.',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e',
    screen: Medium,
    name: '"Mofassair Hossain CINDX Chief Marketing Officer."',
    text: 'We continue to introduce the CINDX team, explore each team member’s point of view, find out what our team members are particularly excited about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-legal-kyc-procedure-2bbfe073511d',
    screen: Medium,
    name: 'How CINDX ensures safety for its users - KYC',
    text: 'Every crypto enthusiast knows that a KYC procedure is necessary in order to protect investors against fraudulent actions of the third...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    screen: Medium,
    name: 'Philip Staehelin 25 Years of Consulting and Entrepreneurial Experience',
    text: 'We continue our regular series of articles dedicated to introducing CINDX advisers. The next item is about Philip Staehelin. ',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: Medium,
    name: 'CINDX meets 9coin Digital Asses Exchange ',
    text: 'The CINDX team continues active work on building relationships with various international companies. One of the most important directions of business...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    screen: Medium,
    name: 'Jason King Interim Chief Commercial Officer',
    text: 'The core of any great project is always people who make the unique idea come true. We would like to tell about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-presents-the-project-during-private-investors-meeting-c886660a8387',
    screen: Medium,
    name: 'CINDX Presents the project during RICLUB private investors meeting',
    text: 'CINDX has successfully passed the due diligence procedure requested by RICLub and was one of the few projects...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407',
    screen: Medium,
    name: 'Sofja Pevzner CINDX Personal Data Officer',
    text: 'We continue to introduce our team and tell about what inspires our colleagues to work with CINDX. Please read about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
    screen: Medium,
    name: 'Tyler Sanford 8+ years digital marketing in Yelp, Zenefits',
    text: 'We continue to introduce CINDX advisers, find out what they are proud of and why they have decided to become a part of the CINDX team. In this...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-project-some-key-points-to-observe-b82ce2bccb79',
    screen: Medium,
    name: 'CINDX - Key points to observe',
    text: 'The CINDX project is a valuable business venture with the features that are critically relevant for its participants. In this article we talk about Strengths...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f',
    screen: Medium,
    name: 'Airat Shayhulov CINDX Head of Quantitative Research.',
    text: 'In “TEAM” series of the articles, we tell about people who every day participates in the creation...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-operating-licence-f401cb580e7b',
    screen: Medium,
    name: 'CINDX license of the financial consultant',
    text: 'CINDX has obtained a termless operating licence (the FFA 000254 license) that gives the right to operate as a financial institution...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    screen: Medium,
    name: '"Graham Doggart 20 Years of Enterprise Development and Fintech Marketing Compliance"',
    text: 'We continue our regular series of articles dedicated to introducing CINDX advisers. The next item...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-continues-the-roadshow-in-china-79d451184c63',
    screen: Medium,
    name: 'CINDX continues the roadshow in China!',
    text: ' The CINDX team is glad to announce participation as a Golden Sponsor of Borderless Blockchain Technology Summit 2018, which...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba',
    screen: Medium,
    name: 'Ibraghim Haniev CINDX Tech Lead',
    text: 'Get to know more about the CINDX team! The core of any great project is always people who make the unique ideas come true...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    screen: Medium,
    name: 'Sadie Hutton 25 Years in Senior Management and Management Consulting',
    text: 'Like any global project, we understand the importance of professional help and advice. We continue to tell the stories of...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-talk-lots-of-features-to-take-you-on-a-new-journey-a4a0553eedb8',
    screen: Medium,
    name: 'CINDX.talk - a service that will help people become wiser in taking financial decisions',
    text: 'The current digital-world related to the crypto industry is getting crowded with mind-charming digital solutions...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61',
    screen: Medium,
    name: '"Val Jerdes CINDX Product Director"',
    text: 'We continue to introduce the CINDX team, explore each team member’s point of view, find out what our team members are particularly...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    screen: Medium,
    name: 'Bogdan Fiedur Blockchain and cryptocurrency expert, investor, entrepreneur',
    text: 'We continue to introduce CINDX advisers, find out what they are proud of and why they have decided to become...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-know-more-about-the-cinx-token-a-security-token-for-numerous-reasons-488ff75a8202',
    screen: Medium,
    name: 'Welcome to CINX Token Distribution – it’s not an ICO; it’s an STO',
    text: 'In this article, we want to make it clear why CINDX chose to hold a Security Token Offering (STO) instead of an Initial...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-celebrates-the-aa-rating-ec5532f29d5d',
    screen: Medium,
    name: 'CINDX celebrates the “AA” Rating from Top ICO List Audit!',
    text: 'The results of CINDX’s sincerity to make meaningful changes in people’s ambitions via a unique business model just got appreciated...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-30-july-5-august-1159f1cd8d28',
    screen: Medium,
    name: 'CINDX Weekly digest (30.07.18 - 05.08.18)',
    text: 'The CINDX team is very excited to share the results of our work for the last week 30.07.18 - 05.08.18!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-virtual-currency-wallet-services-8978410e3172',
    screen: Medium,
    name: 'Virtual Currency Wallet Services',
    text: 'CINDX believes that being fluent in legal issues and having a clean, confident and clear legal status is of utmost importance. At the moment, CINDX is going...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/how-cindx-influences-crypto-trading-7501619904de',
    screen: Medium,
    name: 'How CINDX Influences Crypto Trading',
    text: 'How to master the crypto market movements and turn them in one’s favor? This is where CINDX’s effective business model comes into play. Learn more about CINDX on our Medium!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-6-august-12-august-7e12e324eb1f',
    screen: Medium,
    name: 'CINDX Weekly digest (06.08.18 - 12.08.18)',
    text: 'CINDX continues its regular column - Weekly Digest. We are excited to share the recent achievements of our project! Enjoy your time reading!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-gets-the-highest-5-0-rating-from-trackico-781a0a31971e',
    screen: Medium,
    name: 'CINDX gets 5.0 rating on TrackICO!',
    text: 'CINDX continues getting approval from the largest and the most credible rating services. The week has hardly passed after...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-david-gutierrez-deeeaf66c992',
    screen: Medium,
    name: '"David Gutierrez Investment Relations Officer"',
    text: 'CINDX is very serious about taking people on crew and proud to introduce them. This article is dedicated to David Gutierrez, CINDX Investment Relations Officer',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/icobench-gives-4-8-to-cindx-70aa244ca7c4',
    screen: Medium,
    name: 'ICObench gives 4.8 to CINDX',
    text: 'The CINDX project has already gained the highest mark of  ‘AA’ from Top ICO List and got a 5.0 rating from TrackICO. Now, we are proud to share...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https-medium-com-cindx-dip-your-toe-in-crypto-3c8f54650e06',
    screen: Medium,
    name: 'Dip your Toe in Crypto',
    text: 'It is never late to change your mind. It’s no surprise that Wall Street bankers change their minds in favour of crypto.',
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
              <h3>{el.name.substr(0, 35)} ...</h3>
              <div className="clear" />
              <p>{el.text.substr(0, 65)} ...</p>
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
