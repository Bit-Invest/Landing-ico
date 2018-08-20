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
import Stefano_Fursman from '../../media/Stefano_Fursman.ea34a9d1.jpg';
import Ibraghim_Haniev from '../../media/Ibraghim_Haniev.77b0aa4e.jpg';
import Airat from '../../media/Airat.jpg';
import Sofja_Pevzner from '../../media/Sofja_Pevzner.jpg';
import Dave_Gutierrez from '../../media/Dave_Gutierrez.jpg';
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
import './TeamAdvisersPartners.css';

const teamInfo = [
  {
    img: Yuriy_Avdeev,
    name: 'Yuriy Avdeev',
    position: 'Chief Executive Officer',
    fackt1: '13 years in entrepreneurship',
    fackt2: '9 ventures',
    fackt3: '$2m for crypto management',
    src: 'https://www.linkedin.com/in/yuriyavdeev/'
  },
  {
    img: Jason_King,
    name: 'Jason King',
    position: 'Chief Commercial Officer',
    fackt1: '20 years of excecutive experience',
    fackt2: 'Led operations in 30 countries',
    fackt3: 'Responsible over $500m P&L',
    src: 'https://www.linkedin.com/in/jasonking/'
  },
  {
    img: Val_Jerdes,
    name: 'Val Jerdes',
    position: 'Product Director',
    fackt1: '20 years in entrepreneurship',
    fackt2: '3 successful exits',
    fackt3: '4x returns for portfolios',
    src: 'https://www.linkedin.com/in/valjerdes/'
  },
  {
    img: Mofassair_Hossain,
    name: 'Mofassair Hossain',
    position: 'Chief Marketing Officer',
    fackt1: 'Investor and Adviser of 15+ ICOs',
    fackt2: 'Top Adviser at ICO Bench',
    fackt3: 'GBAP Member',
    src: 'https://www.linkedin.com/in/md-mofassair-hossain-515a90148'
  },
  {
    img: Artur_Shamalov,
    name: 'Artur Shamalov',
    position: 'Investment Director',
    fackt1: '15 years in entrepreneurship',
    fackt2: '5000 clients of mixcart.ru',
    fackt3: 'mail.ru invested in dc-daily.ru',
    src: 'https://www.linkedin.com/in/artur-shamalov/'

  },
  {
    img: Denis_Eskenazi,
    name: 'Denis Eskenazi',
    position: 'Product Marketing Director',
    fackt1: '7 years in entrepreneurship',
    fackt2: '$2m attracted for clients',
    fackt3: '10 years in branding',
    src: 'https://ru.linkedin.com/in/denis-eskenazi-03b81726'
  },
  {
    img: Stefano_Fursman,
    name: 'Stefano Frumson',
    position: 'Compliance Officer',
    fackt1: '5 years of legal experience',
    fackt2: 'Commercial & private law',
    fackt3: 'Experience in KYC procedure',
    src: 'https://www.linkedin.com/in/stefan-frumson-60957071/'
  },
  {
    img: Ibraghim_Haniev,
    name: 'Ibraghim Haniev',
    position: 'Tech Lead',
    fackt1: '6 years in entrepreneurship',
    fackt2: '200+ developed site',
    fackt3: 'Information Security focus',
    src: 'https://www.linkedin.com/in/ibrahimhaniev/'
  },
  {
    img: Airat,
    name: 'Airat Shaikhulov',
    position: 'Head of Quantitative Research',
    fackt1: 'Dr of science at MSU',
    fackt2: 'Aton-line navigator developer',
    fackt3: 'Head of algorithmic trading',
    src: 'https://www.linkedin.com/in/airatshayhulov/'
  },
  {
    img: Sofja_Pevzner,
    name: 'Sofja Pevzner',
    position: 'Personal Data Officer',
    fackt1: '5 years in entrepreneurship',
    fackt2: 'Permisson of estonian AML office for working',
    fackt3: '8 years of legal work expirience',
    src: 'https://www.linkedin.com/in/sofja-pevzner-70831963/'
  },
  {
    img: Dave_Gutierrez,
    name: 'Dave Gutierrez',
    position: 'Investment Relations Officer',
    fackt1: '5 years in aircraft leasing',
    fackt2: '3 years in investment promotion',
    fackt3: '2 years in russian deals abroad',
    src: 'https://www.linkedin.com/in/davidgutierrezcindx/'
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
    name: 'Keith Teare',
    position: 'Founder and Executive Chairman at Accelerated Digital Ventures',
    fackt1: 'Adviser to ICOBox, Crypterium, EnergiMine, etc.',
    fackt2: 'Founding shareholder of TechCrunch',
    linkedin: 'https://linkedin.com/in/kteare',
    text: [
      "I am Executive Chairman and Chair of the Investment Committee at Accelerated Digital Ventures - a UK Venture Company. I was born and raised in the UK. ",
      "Previously I was founder and a partner at Archimedes Labs in Palo Alto, California. I love working with founders, teams, designers and engineers to create products, tell stories, and turn them into reality. I have founded or co-founded many companies myself since the early 1980s. Some were successfully sold, others IPO'd.",
      `Two of my companies were Unicorns - valued by others at more than $1 billion. I have always focused on the point at which change is happening. In the 1980's networking and databases. In the 1994-1998 period, Internet Access. From 1998-2010 - Web Services and Content, Mobile Consumer Applications and since 2017 Blockchain.`,
      "Career and projects: Tech Crunch, Accelerated Digital Ventures, cScape, EasyNet, Cyberia,  RealNames, Venture Network, ICOBox, Crypterium,  R/Block, Fluz, EnergiMine, Archimedes Labs  and CINDX"
    ]
  },
  {
    img: Austin_Kimm,
    video: 'https://www.youtube.com/embed/5X8isxq6S00',
    name: 'Austin Kimm',
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
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
          <p><span>5</span>{el.fackt1}</p>
          <p><span>7</span>{el.fackt2}</p>
          <p><span>10</span>{el.fackt3}</p>
          <div className="block-soc-icon">
            <a target="_blank" href={el.src}>
              <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
            </a>
            <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
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
          <p><span>5</span>{el.fackt1}</p>
          <p><span>7</span>{el.fackt2}</p>
          <p><span>10</span>{el.fackt3}</p>
          <div className="block-soc-icon">
            <a target="_blank" href={el.src}>
              <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
            </a>
            <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
          </div>
        </div>
      );
    })
  }

  mapOurPartners = () => {
    return ourPartners.map((el, i) => {
      return (
        <div key={i}>
          <img className="img" src={el.img} alt="CINDX"/>
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
              <a target="_blank" href={el.linkedin}>
                <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
              </a>
              <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
            </div>
          </div>
          <div className="right_content">
            <p>
              {el.text}
            </p>
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
      slidesToScroll: 1
    };
    const settingsOurParners3 = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="block_8" id="team">
        <div className="size">
          <div className="team">
            <h2 className="header_blocks">Team of 40+ Members</h2>
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