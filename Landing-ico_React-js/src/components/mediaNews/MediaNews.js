import * as React from 'react';
import Slider from "react-slick";
import block_7_ava_bg from '../../images/block_7_ava_bg.png';
import Medium from '../../media/news/Medium.png'
import MediaMedium from '../../media/media/medium-logo.png'
import MediaForbes from '../../media/media/forbes-logo.png'
import MediaAmbcrypto from '../../media/media/AMBcrypto.png'
import MediaBitcoinist from '../../media/media/Bitcoinist.png'
import MediaTokendesk from '../../media/media/tokendesk.png'
import MediaBtcmanager from '../../media/media/BTCManager.png'
import MediaBlockonomi from '../../media/media/blockonomi-logo.png'
<<<<<<< HEAD

// NEWS
import Airat_Shayhulov from '../../news/Airat_Shayhulov.jpeg';
import Amarpreet_Singh from '../../news/Amarpreet_Singh.jpeg';
import Artur_Shamalov from '../../news/Artur_Shamalov.jpeg';
import Austin_Kimm from '../../news/Austin_Kimm.jpeg';
import Bogdan_Fiedur from '../../news/Bogdan_Fiedur.jpeg';
import CINDX_Key_points_to_observe from '../../news/CINDX_Key_points_to_observe.jpeg';
import CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit from '../../news/CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit.png';
import CINDX_continues_the_roadshow_in_China from '../../news/CINDX_continues_the_roadshow_in_China.jpeg';
import CINDX_crypto_currency_exchange_license from '../../news/CINDX_crypto_currency_exchange_license.jpeg';
import CINDX_gets_5_0_rating_on_TrackICO from '../../news/CINDX_gets_5.0_rating_on_TrackICO.png';
import CINDX_license_of_the_financial_consultant from '../../news/CINDX_license_of_the_financial_consultant.png';
import CINDX_meets_9coin_Digital_Asses_Exchange from '../../news/CINDX_meets_9coin_Digital_Asses_Exchange.png';
import CINDX_meets_Ian_Balina from '../../news/CINDX_meets_Ian_Balina.jpg';
import CINDX_meets_Vangoo_Capital_Partners_Fund from '../../news/CINDX_meets_Vangoo_Capital_Partners_Fund.png';
import CINDX_Presents_the_project_during_RICLUB_private_investors_meeting from '../../news/CINDX_Presents_the_project_during_RICLUB_private_investors_meeting.jpg';
import CINDX_took_part_in_Moscow_ICO_Summit_2018 from '../../news/CINDX_took_part_in_Moscow_ICO_Summit_2018.png';
import CINDX_Weekly_digest_06_08_18_12_08_18 from '../../news/CINDX_Weekly_digest_(06.08.18 - 12.08.18).jpeg';
import CINDX_WEEKLY_DIGEST_30_July_5_August from '../../news/CINDX_WEEKLY_DIGEST_30_July—5_August.jpeg';
import CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions from '../../news/CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions.jpeg';
import David_Gutierrez from '../../news/David_Gutierrez.jpeg';
import Denis_Eskenazi from '../../news/Denis_Eskenazi.jpeg';
import Graham_Doggart from '../../news/Graham_Doggart.jpeg';
import How_CINDX_ensures_safety_for_its_users_KYC from '../../news/How_CINDX_ensures_safety_for_its_users-KYC.jpeg';
import How_CINDX_Influences_Crypto_Trading from '../../news/How_CINDX_Influences_Crypto_Trading.jpeg';
import How_CINDX_is_ensuring_legal_compliance from '../../news/How_CINDX_is_ensuring_legal_compliance.jpeg';
import Ibraghim_Haniev from '../../news/Ibraghim_Haniev.jpeg';
import ICObench_gives_4_8_to_CINDX from '../../news/ICObench_gives_4_8_to_CINDX.png';
import Jason_King from '../../news/Jason_King.jpeg';
import Keith_Teare from '../../news/Keith_Teare.jpeg';
import Meet_worlds_first_financial_crypto_social_network from '../../news/Meet_worlds_first_financial_crypto_social_network.jpeg';
import Mofassair_Hossain from '../../news/Mofassair_Hossain.jpeg';
import Philip_Staehelin from '../../news/Philip_Staehelin.jpeg';
import Sadie_Hutton from '../../news/Sadie_Hutton.jpeg';
import Sofja_Pevzner from '../../news/Sofja_Pevzner.jpeg';
import The_issuance_of_CINX_tokens from '../../news/The_issuance_of_CINX_tokens.jpeg';
import The_strategic_meeting_of_the_international_CINDX_team from '../../news/The_strategic_meeting_of_the_international_CINDX_team.png';
import Tyler_Sanford from '../../news/Tyler_Sanford.jpeg';
import Val_Jerdes from '../../news/Val_Jerdes.jpeg';
import Virtual_Currency_Wallet_Services from '../../news/Virtual_Currency_Wallet_Services.jpeg';
import Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO from '../../news/Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO.jpeg';
=======
import MediaBitcoingarden from '../../media/media/bitcoingarden_logo.png'
import MediaDigitaljournal from '../../media/media/digital_journal_transp.png'
import MediaCoinfox from '../../media/media/CoinFox.png'
>>>>>>> 671d2db6e973de3a0fc79fd508618f10fd2febe6
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
    screen: CINDX_meets_Ian_Balina,
    name: 'CINDX meets Ian Balina',
    text: 'CINDX pitch to the one of the TOP10 crypto gurus in the world in the Cryptobazar event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: CINDX_took_part_in_Moscow_ICO_Summit_2018,
    name: 'CINDX took part in Moscow ICO Summit 2018',
    text: 'CINDX team introduced the project to the Russian crypto community during ICO Summit event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642',
    screen: How_CINDX_is_ensuring_legal_compliance,
    name: 'How CINDX is ensuring legal compliance',
    text: 'Our company is registered in Estonia. Why? The answer is simple — the authorities of Estonia have created a strong and innovative legal infrastructure...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    screen: Keith_Teare,
    name: 'Keith Teare Co-founder of Accelerated Digital Ventures and Founding Shareholder in TechCrunch',
    text: 'We continue to introduce CINDX advisers, find out what they...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/meet-worlds-first-financial-crypto-social-network-connect-with-people-as-you-grow-your-wealth-76a3cea9a06c',
    screen: Meet_worlds_first_financial_crypto_social_network,
    name: "Meet world's first financial crypto social network",
    text: 'Every day our team takes one more step on the way to creation and start...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50',
    screen: Denis_Eskenazi,
    name: 'Denis Eskenazi CINDX Product Marketing Director',
    text: 'We continue to tell about the CINDX team and each team member’s professional experience. Please, read about Denis Eskenazi...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-4e075b5d34',
    screen: CINDX_crypto_currency_exchange_license,
    name: 'CINDX crypto currency exchange license',
    text: 'Our company in Estonia has received Crypto Currency Exchange License. This allows CINDX to provide fiat-to-crypto exchange services. This licence is issued...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    screen: Austin_Kimm,
    name: 'Austin Kimm Co-founder of Crypterium & CINDS Adviser',
    text: 'We continue to introduce CINDX advisers, find out what they are proud...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: The_strategic_meeting_of_the_international_CINDX_team,
    name: 'The strategic meeting of the international CINDX team',
    text: 'Every day our team takes one more step on the way to creation and start of the CINDX platform. Our work...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9',
    screen: Artur_Shamalov,
    name: 'Artur Shamalov CINDX Investment Director',
    text: 'We continue to introduce the CINDX team. Our next article is about Artur Shamalov, a skilled...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d',
    screen: The_issuance_of_CINX_tokens,
    name: 'The issuance of CINX tokens',
    text: 'The issuance of CINX tokens will be carried out according to the license of The Estonian Financial Supervisory Authority (EFSA). What is a token...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    screen: Amarpreet_Singh,
    name: '"Amarpreet Singh Co-Founding Member of Malta Blockchain Association & CINDX adviser"',
    text: 'We at CINDX are incredibly proud to present our advisers, tell the world about their achievements and why they have decided to become a part of the CINDX...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: CINDX_meets_Vangoo_Capital_Partners_Fund,
    name: 'CINDX meets Vangoo Capital Partners Fund',
    text: 'Today we have welcomed Kevin Shang from Vangoo Capital Partners and his colleagues in our office. We have discussed business partnership opportunities in order to attract investors from the Asian region.',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e',
    screen: Mofassair_Hossain,
    name: '"Mofassair Hossain CINDX Chief Marketing Officer."',
    text: 'We continue to introduce the CINDX team, explore each team member’s point of view, find out what our team members are particularly excited about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-legal-kyc-procedure-2bbfe073511d',
    screen: How_CINDX_ensures_safety_for_its_users_KYC,
    name: 'How CINDX ensures safety for its users - KYC',
    text: 'Every crypto enthusiast knows that a KYC procedure is necessary in order to protect investors against fraudulent actions of the third...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    screen: Philip_Staehelin,
    name: 'Philip Staehelin 25 Years of Consulting and Entrepreneurial Experience',
    text: 'We continue our regular series of articles dedicated to introducing CINDX advisers. The next item is about Philip Staehelin. ',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: CINDX_meets_9coin_Digital_Asses_Exchange,
    name: 'CINDX meets 9coin Digital Asses Exchange ',
    text: 'The CINDX team continues active work on building relationships with various international companies. One of the most important directions of business...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    screen: Jason_King,
    name: 'Jason King Interim Chief Commercial Officer',
    text: 'The core of any great project is always people who make the unique idea come true. We would like to tell about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-presents-the-project-during-private-investors-meeting-c886660a8387',
    screen: CINDX_Presents_the_project_during_RICLUB_private_investors_meeting,
    name: 'CINDX Presents the project during RICLUB private investors meeting',
    text: 'CINDX has successfully passed the due diligence procedure requested by RICLub and was one of the few projects...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407',
    screen: Sofja_Pevzner,
    name: 'Sofja Pevzner CINDX Personal Data Officer',
    text: 'We continue to introduce our team and tell about what inspires our colleagues to work with CINDX. Please read about...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
    screen: Tyler_Sanford,
    name: 'Tyler Sanford 8+ years digital marketing in Yelp, Zenefits',
    text: 'We continue to introduce CINDX advisers, find out what they are proud of and why they have decided to become a part of the CINDX team. In this...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-project-some-key-points-to-observe-b82ce2bccb79',
    screen: CINDX_Key_points_to_observe,
    name: 'CINDX - Key points to observe',
    text: 'The CINDX project is a valuable business venture with the features that are critically relevant for its participants. In this article we talk about Strengths...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f',
    screen: Airat_Shayhulov,
    name: 'Airat Shayhulov CINDX Head of Quantitative Research.',
    text: 'In “TEAM” series of the articles, we tell about people who every day participates in the creation...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-operating-licence-f401cb580e7b',
    screen: CINDX_license_of_the_financial_consultant,
    name: 'CINDX license of the financial consultant',
    text: 'CINDX has obtained a termless operating licence (the FFA 000254 license) that gives the right to operate as a financial institution...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    screen: Graham_Doggart,
    name: '"Graham Doggart 20 Years of Enterprise Development and Fintech Marketing Compliance"',
    text: 'We continue our regular series of articles dedicated to introducing CINDX advisers. The next item...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-continues-the-roadshow-in-china-79d451184c63',
    screen: CINDX_continues_the_roadshow_in_China,
    name: 'CINDX continues the roadshow in China!',
    text: ' The CINDX team is glad to announce participation as a Golden Sponsor of Borderless Blockchain Technology Summit 2018, which...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba',
    screen: Ibraghim_Haniev,
    name: 'Ibraghim Haniev CINDX Tech Lead',
    text: 'Get to know more about the CINDX team! The core of any great project is always people who make the unique ideas come true...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    screen: Sadie_Hutton,
    name: 'Sadie Hutton 25 Years in Senior Management and Management Consulting',
    text: 'Like any global project, we understand the importance of professional help and advice. We continue to tell the stories of...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-talk-lots-of-features-to-take-you-on-a-new-journey-a4a0553eedb8',
    screen: CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions,
    name: 'CINDX.talk - a service that will help people become wiser in taking financial decisions',
    text: 'The current digital-world related to the crypto industry is getting crowded with mind-charming digital solutions...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61',
    screen: Val_Jerdes,
    name: '"Val Jerdes CINDX Product Director"',
    text: 'We continue to introduce the CINDX team, explore each team member’s point of view, find out what our team members are particularly...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    screen: Bogdan_Fiedur,
    name: 'Bogdan Fiedur Blockchain and cryptocurrency expert, investor, entrepreneur',
    text: 'We continue to introduce CINDX advisers, find out what they are proud of and why they have decided to become...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-know-more-about-the-cinx-token-a-security-token-for-numerous-reasons-488ff75a8202',
    screen: Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO,
    name: 'Welcome to CINX Token Distribution – it’s not an ICO; it’s an STO',
    text: 'In this article, we want to make it clear why CINDX chose to hold a Security Token Offering (STO) instead of an Initial...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-celebrates-the-aa-rating-ec5532f29d5d',
    screen: CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit,
    name: 'CINDX celebrates the “AA” Rating from Top ICO List Audit!',
    text: 'The results of CINDX’s sincerity to make meaningful changes in people’s ambitions via a unique business model just got appreciated...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-30-july-5-august-1159f1cd8d28',
    screen: CINDX_WEEKLY_DIGEST_30_July_5_August,
    name: 'CINDX Weekly digest (30.07.18 - 05.08.18)',
    text: 'The CINDX team is very excited to share the results of our work for the last week 30.07.18 - 05.08.18!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-virtual-currency-wallet-services-8978410e3172',
    screen: Virtual_Currency_Wallet_Services,
    name: 'Virtual Currency Wallet Services',
    text: 'CINDX believes that being fluent in legal issues and having a clean, confident and clear legal status is of utmost importance. At the moment, CINDX is going...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/how-cindx-influences-crypto-trading-7501619904de',
    screen: How_CINDX_Influences_Crypto_Trading,
    name: 'How CINDX Influences Crypto Trading',
    text: 'How to master the crypto market movements and turn them in one’s favor? This is where CINDX’s effective business model comes into play. Learn more about CINDX on our Medium!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-6-august-12-august-7e12e324eb1f',
    screen: CINDX_Weekly_digest_06_08_18_12_08_18,
    name: 'CINDX Weekly digest (06.08.18 - 12.08.18)',
    text: 'CINDX continues its regular column - Weekly Digest. We are excited to share the recent achievements of our project! Enjoy your time reading!',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-gets-the-highest-5-0-rating-from-trackico-781a0a31971e',
    screen: CINDX_gets_5_0_rating_on_TrackICO,
    name: 'CINDX gets 5.0 rating on TrackICO!',
    text: 'CINDX continues getting approval from the largest and the most credible rating services. The week has hardly passed after...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-david-gutierrez-deeeaf66c992',
    screen: David_Gutierrez,
    name: '"David Gutierrez Investment Relations Officer"',
    text: 'CINDX is very serious about taking people on crew and proud to introduce them. This article is dedicated to David Gutierrez, CINDX Investment Relations Officer',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/icobench-gives-4-8-to-cindx-70aa244ca7c4',
    screen: ICObench_gives_4_8_to_CINDX,
    name: 'ICObench gives 4.8 to CINDX',
    text: 'The CINDX project has already gained the highest mark of  ‘AA’ from Top ICO List and got a 5.0 rating from TrackICO. Now, we are proud to share...',
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
            <h3>{el.name.substr(0, 45)} ...</h3>
            <p>{el.text.substr(0, 85)} ...</p>
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
