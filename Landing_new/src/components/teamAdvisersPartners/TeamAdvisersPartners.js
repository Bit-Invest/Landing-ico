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
import Jelena_Karzetskaja from '../../media/Jelena_Karzetskaja.png';

// Our Parners icon
import Progressor_logo from '../../media/Progressor_logo.png';
import ICO_PROMO from '../../media/ico_promo.png';
import sum_and_substance_1 from '../../media/sum_and_substance1.png';
import twigagroup from '../../media/twigagroup.png';
import Tradingview from '../../media/Tradingview.png';
import Yellow_Door from '../../media/Yellow Door.png';
import Innova8 from '../../media/Innova8.png';
import BtcBit from '../../media/BtcBit.jpg';
import civic_logo_horz_BIG from '../../media/civic_logo_horz_BIG.png';
import Greenberg from '../../media/Greenberg.png';
import intel_Wise from '../../media/intel_Wise.png';
import Credits from '../../media/Credits.jpg';
import WP_Pecunio from '../../media/WP_Pecunio.png';
import Logo_Zeus from '../../media/logo.7508f04a.png';
import Pentaglobal from '../../media/pentaglobal.png';
import Aerum from '../../media/AerumLogo.png';



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
import William_Zhu from '../../media/William_Zhu.png';

import Lincoln from '../../news/Lincoln.png';
import Reinhard_Berger from '../../news/Reinhard_Berger.png';

import Gen_Image from '@images/Collage_partners.png';

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
    m: 'https://medium.com/cindx/cindx-team-yuriy-avdeev-e7a747d4c2e3'
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
    img: Jelena_Karzetskaja,
    name: indexLngObj[lng]['teamAdvisersPartners#49'],
    position: indexLngObj[lng]['teamAdvisersPartners#50'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#51'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#52'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#53'],
    src: 'https://www.linkedin.com/in/jelena-karzetskaja-28754727/',
    m: 'https://medium.com/cindx/team-jelena-karzetskaja-94e8c4286924'
  },
 ];

const ourPartners = [
   {
     img: Progressor_logo,
     name: 'Progressor',
     position: 'Legal support',
     href: 'https://progressor.ee/'
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
  {
    img: BtcBit,
  },
  {
    img: civic_logo_horz_BIG,
  },
  {
    img: Greenberg,
  },
  {
    img: intel_Wise
  },
  {
    img: Credits
  },
  {
    img: Logo_Zeus,
    height: 50
  },
  {
    img: WP_Pecunio,
    height: 30
  },
  {
    img: Pentaglobal,
    height: 30
  },
  {
    img: Aerum,
    height: 30,
  }
].reverse();

const advisers = [
  {
    img: Keith_Teare,
    video: 'https://www.youtube.com/embed/1JaUqtqCQ5w',
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
    video: 'https://www.youtube.com/embed/pkBoVl7Brds',
    name: indexLngObj[lng]['teamAdvisersPartners#67'],
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    m: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    position: indexLngObj[lng]['teamAdvisersPartners#68'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#69'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#70'],
    linkedin: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#71'],
      indexLngObj[lng]['teamAdvisersPartners#72'],
      indexLngObj[lng]['teamAdvisersPartners#73']
    ]
  },
  {
    img: Philip_Staehelin,
    video: 'https://www.youtube.com/embed/nN76RkbejGc',
    name: indexLngObj[lng]['teamAdvisersPartners#74'],
    src: 'https://www.linkedin.com/in/staehelin/',
    m: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    position: indexLngObj[lng]['teamAdvisersPartners#75'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#76'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#77'],
    linkedin: 'https://www.linkedin.com/in/staehelin/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#78'],
      indexLngObj[lng]['teamAdvisersPartners#79'],
      indexLngObj[lng]['teamAdvisersPartners#80'],
      indexLngObj[lng]['teamAdvisersPartners#81']
    ]
  },
  {
    img: Amarpreet_Singh,
    video: 'https://www.youtube.com/embed/VKNEfob9sGA',
    name: indexLngObj[lng]['teamAdvisersPartners#82'],
    src: 'https://www.linkedin.com/in/amarpreetsingh2/',
    m: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    position: indexLngObj[lng]['teamAdvisersPartners#83'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#84'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#85'],
    linkedin: 'https://www.linkedin.com/in/amarpreetsingh2/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#86'],
      indexLngObj[lng]['teamAdvisersPartners#87'],
      indexLngObj[lng]['teamAdvisersPartners#88'],
      indexLngObj[lng]['teamAdvisersPartners#89'],
      indexLngObj[lng]['teamAdvisersPartners#90']
    ]
  },
  // {
  //   img: Tyler_Sanford,
  //   video: '',
  //   name: indexLngObj[lng]['teamAdvisersPartners#91'],
  //   src: 'https://www.linkedin.com/in/tylersanford/',
  //   m: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
  //   position: indexLngObj[lng]['teamAdvisersPartners#92'],
  //   fackt1: indexLngObj[lng]['teamAdvisersPartners#93'],
  //   fackt2: indexLngObj[lng]['teamAdvisersPartners#94'],
  //   linkedin: 'https://www.linkedin.com/in/tylersanford/',
  //   text: [
  //     indexLngObj[lng]['teamAdvisersPartners#95'],
  //     indexLngObj[lng]['teamAdvisersPartners#96'],
  //     indexLngObj[lng]['teamAdvisersPartners#97'],
  //     indexLngObj[lng]['teamAdvisersPartners#98'],
  //     indexLngObj[lng]['teamAdvisersPartners#99']
  //   ]
  // },
  {
    img: Bogdan_Fiedur,
    video: 'https://www.youtube.com/embed/4kXgu60guic',
    name: indexLngObj[lng]['teamAdvisersPartners#125'],
    src: 'https://www.linkedin.com/in/bogdanfiedur/',
    m: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    position: indexLngObj[lng]['teamAdvisersPartners#126'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#127'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#128'],
    linkedin: 'https://www.linkedin.com/in/bogdanfiedur/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#129'],
      indexLngObj[lng]['teamAdvisersPartners#130'],
      indexLngObj[lng]['teamAdvisersPartners#131'],
      indexLngObj[lng]['teamAdvisersPartners#132']
    ]
  },
  {
    img: Graham_Doggart,
    video: 'https://www.youtube.com/embed/uXTA_QLympE',
    name: indexLngObj[lng]['teamAdvisersPartners#133'],
    src: 'https://www.linkedin.com/in/grahamdoggart/',
    m: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    position: indexLngObj[lng]['teamAdvisersPartners#134'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#135'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#136'],
    linkedin: 'https://www.linkedin.com/in/grahamdoggart/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#137'],
      indexLngObj[lng]['teamAdvisersPartners#138'],
      indexLngObj[lng]['teamAdvisersPartners#139'],
      indexLngObj[lng]['teamAdvisersPartners#140'],
    ]
  },
  {
    img: Sadie_Hutton,
    video: 'https://www.youtube.com/embed/D4ln5WpZh-Y',
    name: indexLngObj[lng]['teamAdvisersPartners#141'],
    src: 'https://www.linkedin.com/in/sadie-hutton/',
    m: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    position: indexLngObj[lng]['teamAdvisersPartners#142'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#143'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#144'],
    linkedin: 'https://www.linkedin.com/in/sadie-hutton/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#145'],
      indexLngObj[lng]['teamAdvisersPartners#146'],
      indexLngObj[lng]['teamAdvisersPartners#147'],
      indexLngObj[lng]['teamAdvisersPartners#148']
    ]
  },
  {
    img: Jason_King,
    video: 'https://www.youtube.com/embed/MHQzECP7izc',
    name: indexLngObj[lng]['teamAdvisersPartners#149'],
    src: 'https://www.linkedin.com/in/jasonking/',
    m: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    position: indexLngObj[lng]['teamAdvisersPartners#150'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#151'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#152'],
    linkedin: 'https://www.linkedin.com/in/jasonking/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#153'],
      indexLngObj[lng]['teamAdvisersPartners#154'],
      indexLngObj[lng]['teamAdvisersPartners#155'],
      indexLngObj[lng]['teamAdvisersPartners#156']
    ]
  },
  // {
  //   img: Motti_Peer,
  //   video: '',
  //   name: indexLngObj[lng]['teamAdvisersPartners#157'],
  //   src: 'https://www.linkedin.com/in/jasonking/',
  //   m: 'https://medium.com/cindx/advisers-motti-peer-f2c1d72008e9',
  //   position: indexLngObj[lng]['teamAdvisersPartners#158'],
  //   fackt1: indexLngObj[lng]['teamAdvisersPartners#159'],
  //   fackt2: indexLngObj[lng]['teamAdvisersPartners#160'],
  //   linkedin: 'https://www.linkedin.com/in/mottipeer/',
  //   text: [
  //     indexLngObj[lng]['teamAdvisersPartners#161'],
  //     indexLngObj[lng]['teamAdvisersPartners#162'],
  //     indexLngObj[lng]['teamAdvisersPartners#163']
  //   ]
  // },
  {
    img: Leonard_Grayver,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#164'],
    src: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    m: 'https://medium.com/cindx/advisers-leonard-grayver-4eb7657268b8',
    position: indexLngObj[lng]['teamAdvisersPartners#165'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#166'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#167'],
    linkedin: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#168'],
      indexLngObj[lng]['teamAdvisersPartners#169'],
      indexLngObj[lng]['teamAdvisersPartners#170']
    ]
  },
  {
    img: Lincoln,
    video: '',
    name: 'Teo Lincoln',
    src: 'https://www.linkedin.com/in/lincolnteo/',
    m: '',
    position: 'Founder and CEO of Intel Wise Group',
    fackt1: 'Former Managing Director of DP Information Group',
    fackt2: 'Advisor to Brunei’s central bank Authority Monetary Brunei Darussalam (AMBD)',
    linkedin: 'https://www.linkedin.com/in/lincolnteo/',
    text: [
      `Lincoln is Founder and CEO of Intel Wise Group. `,
      `Prior to this, he was Chief Operating Officer and Managing Director of DP Information Group – a subsidiary of Experian plc and managed multiple data repositories in South-East Asia (including Singapore, Malaysia, Indonesia, Vietnam and Brunei).`,
      `Lincoln’s experience includes risk management and IT infrastructures with United Overseas Bank Group and Standard Chartered Bank.  As a statistician, he introduced credit scoring to multiple banks in Asia-Pacific and also found time to serve on project teams of the World Bank Group and the Asian Development Bank. Intel`,
      `Under the umbrella of the Chongqing Connectivity Initiative, a Singapore and China Governments’ bilateral project, Intel Wise has curated data on more than 100+ million companies in China and helped companies globally with their compliance and due diligence needs.  More recently, the company has embarked on blockchain technology and developed platforms for alternative financial services and the trading of digital assets.`,
      `In addition, Lincoln is also an Advisor to Brunei’s central bank Autoriti Monetary Brunei Darussalam (AMBD).`
    ]
  },
  {
    img: Reinhard_Berger,
    video: '',
    name: 'Reinhard Berger',
    src: 'https://www.linkedin.com/in/reinhard-berger-90810613/',
    m: '',
    position: 'Reinhard Berger is the CEO of Pecunio Blockchain Technologies, a Dubai VC Firm focussed on innovative DLT technologies.',
    fackt1: 'Consulted Credit Suisse, UBS and Invesco as a business architect at Accenture. Was a principal for Capgemini',
    fackt2: 'Managed $250M in alternative assets via Invest Finance AG since 2003',
    linkedin: 'https://www.linkedin.com/in/reinhard-berger-90810613/',
    text: [
      `He holds an MSc in Computer Science, an M.A in law, as well as an MBA from Danube University. `,
      `Prior to Pecunio, Reinhard’s career began as a business architect for global consulting firm Accenture, with clients such as Credit Suisse, UBS and Invesco.`,
      `He then served as a principal for French tech giant Capgemini. In 2003, Reinhard co-founded Alternative Invest Finance AG, an independent hedge fund operator, where he managed alternative assets in excess of $250M. `,
      `An intuitive leader, natural mentor and true strategist at Pecuino’s helm.`,
      ``,
      ``
    ]
  },
  {
    img: William_Zhu,
    video: '',
    name: 'William Zhu',
    src: 'https://www.linkedin.com/in/高峰-朱-196741173',
    m: '',
    position: 'Founder of The Blockchainer & J&C Capital',
    fackt1: 'Guest Professor of Zhejiang University',
    fackt2: 'Former Chairman of OTC Database (Shanghai)',
    linkedin: 'https://www.linkedin.com/in/高峰-朱-196741173',
    text: [
      `Mr. Zhu is finance doctoral student, holds Bachelor of law & Master of Marketing. Now he is Executive Secretary General of Emerging Industries Institute (Shanghai), Guest Professor of Zhejiang University, and Expert Lecturer of Shanghai Municipal Tourism Administration.`,
      `Previously, he was Chairman of OTC Database (Shanghai) Information Technology Co., Ltd.), General Manager of China UnionPay Smart Big Data and Internet Finance Research Institute, and CEO of CDMC.`,
      `The Blockchainer provides to its customers comprehensive services such as: summit organization, global business tours, meetup host and customization, media & social media casting, VIP resource connection, localisation service.
These six business segments provide core chain services around the head blockchain enterprise, building blockchain enterprises to expand the service ecosystem. The Blockchainer accelerates the network development of the business sector in the three dimensions of talent, organization and information.`,
      `The Blockchainer has more than 10 years of experience in the science and technology finance team, is the earliest blockchain proponent and practitioner in China; is the earliest blockchain ecosystem core player in China; focusing on the blockchain field, providing in-depth and vertical global professional services; one of the industry’s most comprehensive network in blockchain industry upstream and downstream.`,
    ]
  }
].reverse();


/*
Lincoln
Reinhard_Berger
*/


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
      const promo = (el.img === ICO_PROMO || el.img === civic_logo_horz_BIG || el.img === Greenberg) ? 'ico-promo' : ''
      const newPromo = (el.img === BtcBit) ? 'btcbit-promo' : ''
      return (
        <div key={i} data-msg={el.height}>
          <img
            className={`img ${promo} ${newPromo}`} 
            src={el.img} 
            alt="CINDX"
            style={{
              maxHeight: el.height || null
            }}
          />
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
            <div className="ts_content">
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
          </div>
          <div className="right_content">
            <div className="ts_content">
              {el.text.map((el, i)=><p key={i} className="right_content-text">{el}</p>)}
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    const settings = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsTeam2 = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsTeam3 = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsAdvisers = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingsOurParners = {
      arrows: false,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    const settingsOurParners2 = {
      arrows: false,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000
    };
    const settingsOurParners3 = {
      arrows: false,
      swipeToSlide: true,
      lazyLoad: true,
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
            <div className="teamArrayRelative block_arrow_relative">
              <div className="teamArray settings">
                {this.mapTeam()}
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
            <div className="imageForPartners_parent">
              <img src={Gen_Image} className="imageForPartners" />
            </div>
            {
              // <div className="container2">
              //   <Slider {...settingsOurParners}>
              //     {this.mapOurPartners()}
              //   </Slider>
              // </div>
              // <div className="container3">
              //   {<div className="slick-list">
              //     {this.mapOurPartners()}
              //   </div>}
              //   <Slider {...settingsOurParners2}>
              //     {this.mapOurPartners()}
              //   </Slider>
              // </div>
            }
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
