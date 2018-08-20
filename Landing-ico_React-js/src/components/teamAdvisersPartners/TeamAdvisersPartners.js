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

const teamInfo = [
  {
    img: Yuriy_Avdeev,
    name: 'Yuriy Avdeev',
    position: 'Chief Executive Officer',
    fackt1: '13 years in entrepreneurship',
    fackt2: '9 ventures',
    fackt3: '$2m for crypto management',
    src: 'https://www.linkedin.com/in/yuriyavdeev/',
    m: ''
  },
  {
    img: Val_Jerdes,
    name: 'Val Jerdes',
    position: 'Product Director',
    fackt1: '20 years in entrepreneurship',
    fackt2: '3 successful exits',
    fackt3: '4x returns for portfolios',
    src: 'https://www.linkedin.com/in/valjerdes/',
    m: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61'
  },
  {
    img: Mofassair_Hossain,
    name: 'Mofassair Hossain',
    position: 'Chief Marketing Officer',
    fackt1: 'Investor and Adviser of 15+ ICOs',
    fackt2: 'Top Adviser at ICO Bench',
    fackt3: 'GBAP Member',
    src: 'https://www.linkedin.com/in/md-mofassair-hossain-515a90148',
    m: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e'
  },
  {
    img: Artur_Shamalov,
    name: 'Artur Shamalov',
    position: 'Investment Director',
    fackt1: '15 years in entrepreneurship',
    fackt2: '5000 clients of mixcart.ru',
    fackt3: 'mail.ru invested in dc-daily.ru',
    src: 'https://www.linkedin.com/in/artur-shamalov/',
    m: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9'

  },
  {
    img: Denis_Eskenazi,
    name: 'Denis Eskenazi',
    position: 'Product Marketing Director',
    fackt1: '7 years in entrepreneurship',
    fackt2: '$2m attracted for clients',
    fackt3: '10 years in branding',
    src: 'https://ru.linkedin.com/in/denis-eskenazi-03b81726',
    m: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50'
  },
  {
    img: Ibraghim_Haniev,
    name: 'Ibraghim Haniev',
    position: 'Tech Lead',
    fackt1: '6 years in entrepreneurship',
    fackt2: '200+ developed site',
    fackt3: 'Information Security focus',
    src: 'https://www.linkedin.com/in/ibrahimhaniev/',
    m: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba'
  },
  {
    img: Airat,
    name: 'Airat Shaikhulov',
    position: 'Head of Quantitative Research',
    fackt1: 'Dr of science at MSU',
    fackt2: 'Aton-line navigator developer',
    fackt3: 'Head of algorithmic trading',
    src: 'https://www.linkedin.com/in/airatshayhulov/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f'
  },
  {
    img: Sofja_Pevzner,
    name: 'Sofja Pevzner',
    position: 'Personal Data Officer',
    fackt1: '5 years in entrepreneurship',
    fackt2: 'Permisson of estonian AML office for working',
    fackt3: '8 years of legal work expirience',
    src: 'https://www.linkedin.com/in/sofja-pevzner-70831963/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407'
  },
  {
    img: Dave_Gutierrez,
    name: 'Dave Gutierrez',
    position: 'Investment Relations Officer',
    fackt1: '5 years in aircraft leasing',
    fackt2: '3 years in investment promotion',
    fackt3: '2 years in russian deals abroad',
    src: 'https://www.linkedin.com/in/davidgutierrezcindx/',
    m: 'https://medium.com/cindx/cindx-team-david-gutierrez-deeeaf66c992'
  },
  {
    img: Jelena_Karzetskaja,
    name: 'Jelena Karzetskaja',
    position: 'Compliance Officer',
    fackt1: 'holds several degrees in law',
    fackt2: 'judicial practice since 1997',
    fackt3: 'legal spheres: international law',
    src: 'https://www.linkedin.com/in/jelena-karzetskaja-28754727/',
    m: ''
  },
  {
    img: Wang_Dong,
    name: 'Wang Dong',
    position: 'Specialist in Chinese Blockchain market ',
    fackt1: '3 years in php/ JavaScript',
    fackt2: '5 years in SEO/SMM/media buyer',
    fackt3: '2 years in Blockchain development and token sale in China',
    src: 'https://www.linkedin.com/in/jelena-karzetskaja-28754727/',
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
    name: 'Keith Teare',
    position: 'Founder and Executive Chairman at Accelerated Digital Ventures',
    fackt1: 'Adviser to ICOBox, Crypterium, EnergiMine, etc.',
    fackt2: 'Founding shareholder of TechCrunch',
    linkedin: 'https://linkedin.com/in/kteare',
    text: [
      "I am Executive Chairman and Chair of the Investment Committee at Accelerated Digital Ventures - a UK Venture Company. I was born and raised in the UK. ",
      "Previously I was founder and a partner at Archimedes Labs in Palo Alto, California. I love working with founders, teams, designers and engineers to create products, tell stories, and turn them into reality. I have founded or co-founded many companies myself since the early 1980s. Some were successfully sold, others IPO'd.",
      "Two of my companies were Unicorns - valued by others at more than $1 billion. I have always focused on the point at which change is happening. In the 1980's networking and databases. In the 1994-1998 period, Internet Access. From 1998-2010 - Web Services and Content, Mobile Consumer Applications and since 2017 Blockchain.", 
      "Career and projects: Tech Crunch, Accelerated Digital Ventures, cScape, EasyNet, Cyberia,  RealNames, Venture Network, ICOBox, Crypterium,  R/Block, Fluz, EnergiMine, Archimedes Labs  and CINDX" 
    ]
  },
  {
    img: Austin_Kimm,
    video: 'https://www.youtube.com/embed/5X8isxq6S00',
    name: 'Austin Kimm',
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    m: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    position: 'International Financial Services CEO',
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
    linkedin: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    text: [
      "I'm an innovator and a leader who blends contagious optimism with pragmatic realism. I find opportunity where others see none.",
      `I've leveraged my ability to "see things differently" and "make things happen" in corporate, consulting and start-up environments - all giving me broad new perspectives that provide fodder for new transformative ideas. `,
      `Finding solutions to hard challenges is what gets me out of bed in the morning.`,
      `Career and projects: BCG, Spectacler, Transparency International, StartupYard, Bethreum, Gjirafa Inc, Direct People, CINDX`
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
    video: 'https://www.youtube.com/embed/RfW8fkvpbTo',
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
    video: 'https://www.youtube.com/embed/RfW8fkvpbTo',
    name: 'Motti Peer',
    src: 'https://www.linkedin.com/in/jasonking/',
    m: '',
    position: 'Co-founder of Blonde 2.0, award-winning global PR agency',
    fackt1: 'Founder of various companies in the security and finance sectors',
    fackt2: 'Motti is one of the leading forces in PR for Blockchain and Crypto, startups, VCs.',
    linkedin: 'https://www.linkedin.com/in/mottipeer/',
    text: [
      'Motti founded various companies in the security and finance sectors. He has many years of experience as a money and hedge fund manager and holds an MBA in Finance and Marketing from Manchester University and a BA in Business Management from Fairleigh Dickinson University. He is a Co-CEO of Blonde 2.0, an award-winning global PR agency also named as one the startup nation’s “Movers and Shakers” on Forbes. As Co-CEO of Blonde 2.0, he is responsible for handling the Public Relations aspects, along with strategy and crisis management. With a team of 35 professionals, Blonde 2.0 is one of the leading forces in PR for Blockchain and Crypto, startups, VCs.',
    ]
  },
  {
    img: Leonard_Grayver,
    video: 'https://www.youtube.com/embed/RfW8fkvpbTo',
    name: 'Leonard Grayver',
    src: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    m: '',
    position: 'Сhair of Greenberg Whitcombe Takeuchi Gibson & Grayver LLP',
    fackt1: 'Represented and advised a number of successful ICOs',
    fackt2: 'Has substantial experience in venture capital fund formation',
    linkedin: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    text: [
      'Leonard Grayver is an experienced corporate attorney based in Silicon Valley, California. He is the chair of the corporate law group at Greenberg, LLP, a boutique law firm with offices in Southern and Northern California. He has represented venture capital funds, entrepreneurs, and startup companies in diverse industries, including medical devices, software, health care, electronics, IT, and alternative energy, for almost twenty years. In the last several years, Leonard also developed a robust practice focusing on cryptocurrency law and has served as counsel in a number of token sales offerings. Leonard earned a B.A. from University of California, Los Angeles, and a Juris Doctorate from UCLA School of Law.',
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
              <div onClick={() => this.showVideoInPopUp(el.video)}><img className="playButtonWhite" src={playButtonWhite} alt={"CINDX"}/></div>
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsTeam2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsTeam3 = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsAdvisers = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingsOurParners = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    const settingsOurParners3 = {
      arrows: false,
      infinite: true,
      speed: 500,
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
            <h2 className="header_blocks">Team of 50+ Members</h2>
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
            <h2 className="header_blocks">Advisers</h2>
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
            <h2 className="header_blocks">Our Partners</h2>
            <div className="container2">
                <Slider {...settingsOurParners}>
                  {this.mapOurPartners()}
                </Slider>
            </div>
            <div className="container3">
                <Slider {...settingsOurParners3}>
                  {this.mapOurPartners()}
                </Slider>
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
