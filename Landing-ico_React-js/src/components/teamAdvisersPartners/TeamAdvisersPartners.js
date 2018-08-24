import * as React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import ava_1 from '../../images/ava_1.png';
import playButtonWhite from '../../images/play_button_white.png';
import linkedin_icon_social from '../../images/linkedin_icon_social.png';
import medium_icon_social from '../../images/medium_icon_social.png';
// Team icon
import Yuriy_Avdeev from '../../media/Yuriy_Avdeev.5aa55970.jpg';
import Jason_King from '../../media/Jason_King.jpg';
import Val_Jerdes from '../../media/Val_Jerdes.f8ab5be3.jpg';
import Mofassair_Hossain from '../../media/Mofassair_Hossain.11359d11.jpg';
import Artur_Shamalov from '../../media/Artur_Shamalov.4dc17f50.jpg';
import Denis_Eskenazi from '../../media/Denis_Eskenazi.e8b0d64b.jpg';
import Ibraghim_Haniev from '../../media/Ibraghim_Haniev.77b0aa4e.jpg';
import Airat from '../../media/Airat.jpg';
import Sofja_Pevzner from '../../media/Sofja_Pevzner.jpg';
import Dave_Gutierrez from '../../media/Dave_Gutierrez.jpg';
import Jelena_Karzetskaja from '../../media/Jelena_Karzetskaja.png';
import Wang_Dong from '../../media/Wang_Dong.png';
// Our Parners icon
import Progressor_logo from '../../media/Progressor_logo.png';
import ICO_PROMO from '../../media/ico_promo.png';
import sum_and_substance_1 from '../../media/sum_and_substance1.png';
import twigagroup from '../../media/twigagroup.png';
import Tradingview from '../../media/Tradingview.png';
import ICO_Rating from '../../media/ICO_Rating.png';
import Top_ICO from '../../media/Top_ICO_List.png';
import Yellow_Door from '../../media/Yellow Door.png';
import Innova8 from '../../media/Innova8.png';
// Advicer icon
import Keith_Teare from '../../media/Keith_Teare.1e7599ac.jpg';
import Austin_Kimm from '../../media/Austin_Kimm.caf37ff2.jpg';
import Philip_Staehelin from '../../media/Philip_Staehelin.49caf8a6.jpg';
import Amarpreet_Singh from '../../media/Amarpreet_Singh.afa7b4f8.jpg';
import Tyler_Sanford from '../../media/Tyler_Sanford.5d35cd71.jpg';
import Bogdan_Fiedur from '../../media/Bogdan_Fiedur.e36a757d.jpg';
import Graham_Doggart from '../../media/Graham_Doggart.fd8f9df5.jpg';
import Sadie_Hutton from '../../media/Sadie_Hutton.54ab2eaa.jpg';
import Motti_Peer from '../../media/Motti_Peer.png';
import Leonard_Grayver from '../../media/Leonard_Grayver.png';
import './TeamAdvisersPartners.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

const teamInfo = [
  {
    img: Yuriy_Avdeev,
    name: indexLngObj[lng]['teamAdvisersPartners#4'],
    position: indexLngObj[lng]['teamAdvisersPartners#5'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#6'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#7'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#8'],
    src: 'https://www.linkedin.com/in/yuriyavdeev/',
    m: ''
  },
  {
    img: Val_Jerdes,
    name: indexLngObj[lng]['teamAdvisersPartners#9'],
    position: indexLngObj[lng]['teamAdvisersPartners#10'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#11'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#12'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#13'],
    src: 'https://www.linkedin.com/in/valjerdes/',
    m: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61'
  },
  {
    img: Mofassair_Hossain,
    name: indexLngObj[lng]['teamAdvisersPartners#14'],
    position: indexLngObj[lng]['teamAdvisersPartners#15'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#16'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#17'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#18'],
    src: 'https://www.linkedin.com/in/md-mofassair-hossain-515a90148',
    m: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e'
  },
  {
    img: Artur_Shamalov,
    name: indexLngObj[lng]['teamAdvisersPartners#19'],
    position: indexLngObj[lng]['teamAdvisersPartners#20'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#21'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#22'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#23'],
    src: 'https://www.linkedin.com/in/artur-shamalov/',
    m: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9'

  },
  {
    img: Denis_Eskenazi,
    name: indexLngObj[lng]['teamAdvisersPartners#24'],
    position: indexLngObj[lng]['teamAdvisersPartners#25'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#26'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#27'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#28'],
    src: 'https://ru.linkedin.com/in/denis-eskenazi-03b81726',
    m: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50'
  },
  {
    img: Ibraghim_Haniev,
    name: indexLngObj[lng]['teamAdvisersPartners#29'],
    position: indexLngObj[lng]['teamAdvisersPartners#30'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#31'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#32'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#33'],
    src: 'https://www.linkedin.com/in/ibrahimhaniev/',
    m: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba'
  },
  {
    img: Airat,
    name: indexLngObj[lng]['teamAdvisersPartners#34'],
    position: indexLngObj[lng]['teamAdvisersPartners#35'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#36'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#37'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#38'],
    src: 'https://www.linkedin.com/in/airatshayhulov/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f'
  },
  {
    img: Sofja_Pevzner,
    name: indexLngObj[lng]['teamAdvisersPartners#39'],
    position: indexLngObj[lng]['teamAdvisersPartners#40'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#41'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#42'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#43'],
    src: 'https://www.linkedin.com/in/sofja-pevzner-70831963/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407'
  },
  {
    img: Dave_Gutierrez,
    name: indexLngObj[lng]['teamAdvisersPartners#44'],
    position: indexLngObj[lng]['teamAdvisersPartners#45'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#46'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#47'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#48'],
    src: 'https://www.linkedin.com/in/davidgutierrezcindx/',
    m: 'https://medium.com/cindx/cindx-team-david-gutierrez-deeeaf66c992'
  },
  {
    img: Jelena_Karzetskaja,
    name: indexLngObj[lng]['teamAdvisersPartners#49'],
    position: indexLngObj[lng]['teamAdvisersPartners#50'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#51'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#52'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#53'],
    src: 'https://www.linkedin.com/in/jelena-karzetskaja-28754727/',
    m: ''
  },
  {
    img: Wang_Dong,
    name: indexLngObj[lng]['teamAdvisersPartners#54'],
    position: indexLngObj[lng]['teamAdvisersPartners#55'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#56'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#57'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#58'],
    src: '',
    m: ''
  }
 ];

const ourPartners = [
 {
   img: Progressor_logo,
   name: 'Progressor',
   position: 'Legal support',
   href: 'https://progressor.ee/'
 },
 {
   img: ICO_PROMO,
   name: 'ICO Promo',
   position: 'Merchant services',
   href: 'https://icopromo.com/'
 },
 {
   img: sum_and_substance_1,
   name: 'Sum & Substance',
   position: 'Security & Compliance',
   href: 'https://sumsub.com/'
 },
 {
   img: twigagroup,
   name: 'Twiga Communication Group',
   position: 'Digital & PR',
   href: 'http://twiga.ru/'
 },
 {
   img: Tradingview,
   name: 'Tradingview',
   position: 'Market data',
   href: 'https://www.tradingview.com/'
 },
 {
   img: ICO_Rating,
   name: 'ICORating',
   position: 'Rating Agency',
   href: 'https://icorating.com/'
 },
 {
   img: Top_ICO,
   name: 'Topicolist',
   position: 'Rating Agency',
   href: 'https://topicolist.com/'
 },
 {
   img: Yellow_Door,
   name: 'Yellow Door',
   position: 'Silicon Valley Accelerator',
   href: 'http://yellowdoor.ru/'
 },
 {
   img: Innova8,
   name: 'Innov8 Global Advisory',
   position: 'Global Ventures',
   href: 'http://www.innov8globaladvisory.com/'
 },
];

const advisers = [
  {
    img: Keith_Teare,
    video: 'https://www.youtube.com/embed/qWpWbZUljdg',
    src: 'https://linkedin.com/in/kteare',
    m: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    name: indexLngObj[lng]['teamAdvisersPartners#59'],
    position: indexLngObj[lng]['teamAdvisersPartners#60'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#61'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#62'],
    linkedin: 'https://linkedin.com/in/kteare',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#63'],
      indexLngObj[lng]['teamAdvisersPartners#64'],
      indexLngObj[lng]['teamAdvisersPartners#65'],
      indexLngObj[lng]['teamAdvisersPartners#66']
    ]
  },
  {
    img: Austin_Kimm,
    video: 'https://www.youtube.com/embed/5X8isxq6S00',
    name: indexLngObj[lng]['teamAdvisersPartners#67'],
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    m: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    position: indexLngObj[lng]['teamAdvisersPartners#67'],
    fackt1: '30+ years of financial service experience',
    fackt2: 'Created companies with a worth of $500m',
    linkedin: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    text: [
      "Experienced results proven financial services CEO with a particular focus on building insurance businesses in developing markets where I have successfully built companies with a current valuation in excess $500m, most recently in Russia (10 years), as well as other non insurance senior management roles, including CEO of Russia's largest internet sales employment platform, Workle, and a wide range of fintech start up C level positions including Crypterium, the world's first digital cryptobank.",
      "Most recently in Russia (10 years), as well as other non insurance senior management roles, including CEO of Russia's largest internet sales employment platform, Workle, and a wide range of fintech start up C level positions including Crypterium, the world's first digital cryptobank.",
      "Career and projects: Aviva, Commercial Union UK, Reinaissance Insurance, Kimm Health & Leisure Ltd, Workle, Crypterium, CryptoIndex, CINDX"
    ]
  },
  {
    img: Philip_Staehelin,
    video: 'https://www.youtube.com/embed/gMYQzVyXHZI',
    name: 'Philip Staehelin',
    src: 'https://www.linkedin.com/in/staehelin/',
    m: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    position: '25 years of consulting and entrepreneurial experience',
    fackt1: '$500m alternative payments business under leadership',
    fackt2: '200+ startups from 20 countries mentored',
    linkedin: 'https://www.linkedin.com/in/staehelin/',
    text: [
      "I'm an innovator and a leader who blends contagious optimism with pragmatic realism. I find opportunity where others see none.",
      'I\'ve leveraged my ability to "see things differently" and "make things happen" in corporate, consulting and start-up environments - all giving me broad new perspectives that provide fodder for new transformative ideas. ',
      'Finding solutions to hard challenges is what gets me out of bed in the morning.',
      'Career and projects: BCG, Spectacler, Transparency International, StartupYard, Bethreum, Gjirafa Inc, Direct People, CINDX'
    ]
  },
  {
    img: Amarpreet_Singh,
    video: 'https://www.youtube.com/embed/vsjxNki18DY',
    name: 'Amarpreet Singh',
    src: 'https://www.linkedin.com/in/amarpreetsingh2/',
    m: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    position: 'Senior Adviser of Global Blockchain Foundation',
    fackt1: 'Experience in Microsoft, The World Bank and Airbus',
    fackt2: 'Advisery Board Member of Blockchain projects',
    linkedin: 'https://www.linkedin.com/in/amarpreetsingh2/',
    text: [
      "Technology/Digital enthusiast and a seasoned professional with years of experience in Tech industry – operations, consulting and innovation.",
      "He is a certified Cloud (Microsoft and AWS) specialist. Known for versatility and flexibility. Excellent analytic, strategic, leadership skills and a team player at its best.",
      "Specialties: Technology Consulting, Operations, Cloud Computing, Fintech, Innovation, ERP, Machine Learning, Account Management, Partner Development, Business Development and Strategy",
      "Amarpreet Singh has a very diversified work and educational background. He holds three Masters degrees and has lived/worked/studied in India, Singapore, France, China, South Africa, Korea, Canada.",
      "Career and projects: Microsoft, The World Bank, Airbus, TokenAsia Platform, GOeurika, CINDX "
    ]
  },
  {
    img: Tyler_Sanford,
    video: '',
    name: 'Tyler Sanford',
    src: 'https://www.linkedin.com/in/tylersanford/',
    m: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
    position: '8 Years Digital Marketing in Yelp and Zenefits',
    fackt1: '12 ICO’s over $225M raised',
    fackt2: 'Early adopter of blockchain',
    linkedin: 'https://www.linkedin.com/in/tylersanford/',
    text: [
      "Growing up as an Athlete has given me a skill set that I've been able to apply to my careers and personal life.",
      "I have been very fortunate to see the results of going that extra mile, while learning to deal with the highs and lows that go along with all professional careers.",
      "I'm an extremely self-motivated individual, always looking to continue my growth of knowledge and talents in all aspects of business.",
      "Always up for a challenge, my motivation comes from overcoming obstacles to reach my goals",
      "Career and projects: IPG Holdings, DataBlockChain, TraXion by Puma Technologies, ELYSIAN, Etherinc, FTEC Foundation,  CINDX"
    ]
  },
  {
    img: Bogdan_Fiedur,
    video: 'https://www.youtube.com/embed/oC-oTaBId7g',
    name: 'Bogdan Fiedur',
    src: 'https://www.linkedin.com/in/bogdanfiedur/',
    m: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    position: 'Blockchain and cryptocurrency expert, investor, entrepreneur',
    fackt1: 'Co-Founder of bitJob and President of Blockchainexperts.io',
    fackt2: 'ICO Adviser, ICOBench Expert',
    linkedin: 'https://www.linkedin.com/in/bogdanfiedur/',
    text: [
      "Bogdan Fiedur is a smart contract developer, crypto-investor, entrepreneur and President of http://blockchainexperts.io . He has over 20 years of IT experience in building e-commerce websites and has been involved in blockchain development during last 3 years.",
      "He is also an ICO adviser working with 20 successful ICOs to date and deeply involved in offering presentation and workshops on blockchain and smart contract programming in his local crypto community of Winnipeg.",
      "Bogdan now focuses on the Blockchain industry and offers advice, consulting services and connections to Blockchain experts. Most recently Bogdan has co-founded ‘Bitjob’, a freelancer blockchain platform for students and participated in several ICO projects as a team member. e.g. PayPie.com.",
      "Career and projects: US Blockchain Association, Tuurnt, Trends Project, BiNeuro, Zichain, Graphen Tech, CyClean, Swachhcoin, CINDX"
    ]
  },
  {
    img: Graham_Doggart,
    video: 'https://www.youtube.com/embed/HWV5Hv2R6vA',
    name: 'Graham Doggart',
    src: 'https://www.linkedin.com/in/grahamdoggart/',
    m: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    position: '20 years of enterprise development, fintech marketing compliance',
    fackt1: 'Executed campaigns with a worth of $100m',
    fackt2: 'Adviser for 10+ blockchain projects this year',
    linkedin: 'https://www.linkedin.com/in/grahamdoggart/',
    text: [
      "I am chairman of a Stealth Cryptocurrency Project and co-founder and lead strategist at Dynamic Abundance, a Blockchain and Fintech Advisery since 2012. ",
      "I specialise in the structuring and packaging of token offerings and have worked with numerous blockchain, cryptocurrency and ICO projects internationally. ",
      "For more than 20 years I have provided tech management consultation, legal and financial compliance advice, growth strategies, investor relations, as well as design and authorship of materials.",
      "Career and projects: Stealth Cryptocurrency Project, Dynamic Abundance, ELYSIAN, Fox Trading FX, Profede, Worltdopoly, CINDX"
    ]
  },
  {
    img: Sadie_Hutton,
    video: 'https://www.youtube.com/embed/iQhcMhT13hs',
    name: 'Sadie Hutton',
    src: 'https://www.linkedin.com/in/sadie-hutton/',
    m: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    position: '25 years in senior management and management consulting',
    fackt1: 'Multimillion-dollar fundraiser with campaigns with a worth of £75m',
    fackt2: 'ICO Adviser of 8 projects',
    linkedin: 'https://www.linkedin.com/in/sadie-hutton/',
    text: [
      'I am the founder of Dynamic Abundance, a blockchain advisery.',
      'Preferring a “hands-on” approach, I am a specialist in ICO analysis, project management, all key aspects of the ICO process. I am skilled in business management and growth, which enable me to see a project from inception through to delivery. I am a problem solver by nature, and I take any project I am involved with personally. I like to win!',
      'With over 20 years of management experience I built up a powerful network, I actively advise on finance, tech, sales, marketing and quality assurance for high-level blockchain projects.',
      'Career and projects: Dynamic Abundance, ELYSIAN, Worldopoly, Confidential ICO,  Fox Trading FX, Profede, Market Digital, CINDX'
    ]
  },
  {
    img: Jason_King,
    video: '',
    name: 'Jason King',
    src: 'https://www.linkedin.com/in/jasonking/',
    m: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    position: '20 years of excecutive experience',
    fackt1: 'Led businesses operations in 30 countries',
    fackt2: 'Responsible over $500m P&L',
    linkedin: 'https://www.linkedin.com/in/jasonking/',
    text: [
      'For almost 20 years, Jason has been a senior technology, media and telecoms executive involved in structuring and brokering commercial deals, negotiating wins, building markets and positioning organizations for success.',
      'The core theme in his career has been to successfully drive business restructuring, transformation and turnaround programs - by leading the right people and teams towards the most profitable goals.',
      'In addition to his interests in private equity and startup companies, Jason has worked in various groups including Deutsche Telekom, Telenor and UPC Liberty Global and Veon.',
      'Jason has either worked or has led business directly in over 30 countries and has previously held commercial P&L responsibilities in the $500M-$1B range.',
    ]
  },
  {
    img: Motti_Peer,
    video: '',
    name: 'Motti Peer',
    src: 'https://www.linkedin.com/in/jasonking/',
    m: '',
    position: 'Co-founder of Blonde 2.0, award-winning global PR agency',
    fackt1: 'Founder of various companies in the security and finance sectors',
    fackt2: 'Motti is one of the leading forces in PR for Blockchain and Crypto, startups, VCs.',
    linkedin: 'https://www.linkedin.com/in/mottipeer/',
    text: [
      'Motti founded various companies in the security and finance sectors. He has many years of experience as a money and hedge fund manager and holds an MBA in Finance and Marketing from Manchester University and a BA in Business Management from Fairleigh Dickinson University',
      'He is a Co-CEO of Blonde 2.0, an award-winning global PR agency also named as one the startup nation’s “Movers and Shakers” on Forbes. As Co-CEO of Blonde 2.0, he is responsible for handling the Public Relations aspects, along with strategy and crisis management.',
      'With a team of 35 professionals, Blonde 2.0 is one of the leading forces in PR for Blockchain and Crypto, startups, VCs.'
    ]
  },
  {
    img: Leonard_Grayver,
    video: '',
    name: 'Leonard Grayver',
    src: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    m: '',
    position: 'Сhair of Greenberg Whitcombe Takeuchi Gibson & Grayver LLP',
    fackt1: 'Represented and advised a number of successful ICOs',
    fackt2: 'Has substantial experience in venture capital fund formation',
    linkedin: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    text: [
      'Leonard Grayver was born in USSR, moved to US with his parents as a kid. While in Law school Leonard created a start-up and successfully raised more than 18 mln USD for financing.',
      'Start-up has not survived but since then Leonard has helped more than 400 start-ups',
      'Overall Leonard has more than 10 years of experience with VC financing, fund structuring, due diligence (representing both funds and LPs). His advise to all entrepreneurs - do not follow trends, follow your interests.'
    ]
  }
 ];

class TeamAdvisersPartners extends React.Component {
  mapTeam = () => {
    return teamInfo.map((el, i) => {
      return (
        <div key={i} className="item">
          <img className="img" src={el.img} alt="CINDX"/>
          <h3>{el.name}</h3>
          <p className="position">{el.position}</p>
          <hr />
          <p>{el.fackt1}</p>
          <p>{el.fackt2}</p>
          <p>{el.fackt3}</p>
          <div className="block-soc-icon">
            <a target="_blank" style={{ display: el.src ? 'block' : 'none' }} href={el.src}>
              <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
            </a>
            <a target="_blank" style={{ display : el.m ? 'block' : 'none' }} href={el.m}>
              <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
            </a>
          </div>
        </div>
      );
    })
  }

  mapTeam2 = () => {
    return teamInfo.map((el, i) => {
      return (
        <div key={i} className="item">
          <img className="img" src={el.img} alt="CINDX"/>
          <h3>{el.name}</h3>
          <p className="position">{el.position}</p>
          <hr />
          <p>{el.fackt1}</p>
          <p>{el.fackt2}</p>
          <p>{el.fackt3}</p>
          <div className="block-soc-icon">
            <a target="_blank" style={{ display: el.src ? 'block' : 'none' }} href={el.src}>
              <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
            </a>
            <a target="_blank" style={{ display : el.m ? 'block' : 'none' }} href={el.m}>
              <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
            </a>
          </div>
        </div>
      );
    })
  }

  mapOurPartners = () => {
    return ourPartners.map((el, i) => {
      return (
        <div key={i}>
          <img className={`img ${(el.img === ICO_PROMO) ? 'ico-promo' : ''}`} src={el.img} alt="CINDX"/>
        </div>
      );
    })
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  mapAdvisers = () => {
    return advisers.map((el, i) => {
      return (
        <div key={i}>
          <div className="left_content">
            <div className="icon_content">
              <img className="icon-face" src={el.img} alt={"CINDX"}/>
              <div onClick={() => this.showVideoInPopUp(el.video)}>
                <img
                  className="playButtonWhite"
                  style={{display: el.video ? 'block' : 'none'}}
                  src={playButtonWhite}
                  alt={"CINDX"}
                />
              </div>
            </div>
            <div className="name_content">{el.name}</div>
            <hr/>
            <div className="text_content">
              <p>{el.position}</p>
              <p>{el.fackt1}</p>
              <p>{el.fackt2}</p>
            </div>
            <div className="block-soc-icon">
              <a target="_blank"  style={{ display : el.linkedin ? 'block' : 'none' }} href={el.linkedin}>
                <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
              </a>
              <a target="_blank"  style={{ display : el.m ? 'block' : 'none' }} href={el.m}>
                <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
              </a>
            </div>
          </div>
          <div className="right_content">
            {el.text.map((el, i)=><p key={i} className="right_content-text">{el}</p>)}
          </div>
        </div>
      );
    })
  }

  render() {
    const settings = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsTeam2 = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsTeam3 = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsAdvisers = {
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingsOurParners = {
      arrows: false,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    const settingsOurParners3 = {
      arrows: false,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    return (
      <div className="block_8" id="team">
        <div className="size">
          <div className="team">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#1'] }</h2>
            <div className="block_arrow_relative">
              <div className="settings">
                <Slider {...settings}>
                  {this.mapTeam()}
                </Slider>
              </div>
            </div>
            <div className="block_arrow_relative">
              <div className="settings2">
                <Slider {...settingsTeam2}>
                  {this.mapTeam2()}
                </Slider>
              </div>
            </div>
            <div className="block_arrow_relative">
              <div className="settings3">
                <Slider {...settingsTeam3}>
                  {this.mapTeam2()}
                </Slider>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="advisers">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#2'] }</h2>
            <div className="block_arrow_relative">
              <div className="settings2_1">
                <Slider {...settingsAdvisers}>
                  {this.mapAdvisers()}
                </Slider>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="ourPartners">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#3'] }</h2>
            <div className="container2">
                <Slider {...settingsOurParners}>
                  {this.mapOurPartners()}
                </Slider>
            </div>
            <div className="container3">
              <div className="slick-list">
                {this.mapOurPartners()}
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(TeamAdvisersPartners)

export {connectedContainer as TeamAdvisersPartners}
