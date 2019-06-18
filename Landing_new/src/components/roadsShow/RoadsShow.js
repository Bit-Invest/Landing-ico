import React, { Component } from 'react'
import Slider from 'react-slick'
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

import Beijing13_16_09 from '../../images/RoadShowImg/Beijing13-16-09.png'
import Shanghai30_08 from '../../images/RoadShowImg/Shanghai30-08.jpg'
import Shanghai7_8_09 from '../../images/RoadShowImg/Shanghai7-8-09.jpg'
import Shanghai9_12_09 from '../../images/RoadShowImg/Shanghai9-12-09.jpg'
import Singapore14_09 from '../../images/RoadShowImg/Singapore14-09.jpg'
import Moscow15_09 from '../../images/RoadShowImg/Moscow15-09.jpg'
import Seoul16_19_09 from '../../images/RoadShowImg/Seoul16-19-09.jpg'
import Singapore19_09 from '../../images/RoadShowImg/Singapore19-09.jpg'
import Singapore21_09 from '../../images/RoadShowImg/Singapore21-09.jpg'
import Bangkok25_26_09 from '../../images/RoadShowImg/Bangkok25-26-09.jpg'
import Tokyo28_29_09 from '../../images/RoadShowImg/Tokyo28-29-09.jpg'
import Singapore22_09 from '../../images/RoadShowImg/Singapore22-09.jpg'
import Las_Vegas21_24_10 from '../../images/RoadShowImg/Las-Vegas21-24-10.jpg'
import road1 from '../../images/road1.PNG'
import road2 from '../../images/road2.PNG'

import IMG_1084 from '../../media/IMG_1084.PNG';
import IMG_1085 from '../../media/IMG_1085.PNG';
import IMG_1086 from '../../media/IMG_1086.PNG';
import IMG_1074 from '../../media/IMG_1074.PNG';

import './RoadsShow.css'

let dataRoadShow = [{
  place: 'Moscow',
  date: '06.04.2019',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'CINDX Attends The Binance Meetup Moscow Event',
  report: {
    text: 'Details',
    link: 'https://medium.com/cindx/cindx-attends-the-binance-meetup-moscow-event-81f41e8c4814'
  },
  video: {
    img: road1,
    src: 'https://www.facebook.com/events/300747407477692/'
  },
  text: 'The CINDX development team attended the prominent Binance Meetup Moscow Event, which played host to a large number of presentations organized by the Binance Exchange. The event started off with Diego Gonzalez, Binance Development Manager, talking about the future plans of Binance. He noted that the company is striving to become not only an exchange, but an ecosystem providing a broader range of services.'
}, 
{
  place: 'Malaysia',
  date: '06.15.2019',
  status: indexLngObj[lng]['mediaNews#2_93'],
  data: 'CINDX Team Headed To Bloconomic Expo 2019',
  report: {
    text: 'Details',
    link: 'https://medium.com/cindx/cindx-team-headed-to-bloconomic-expo-2019-fc81d570eada'
  },
  video: {
    img: road2,
    src: 'https://bloconomic.com'
  },
  text: 'The CINDX platform development team will be participating in the Bloconomic Expo 2019 event on the 15–16 of August in Malaysia, presenting the revolutionary trading platform before an audience consisting of some of the leading industry professionals. The event will be attended by the representatives of some of the biggest IT companies and the CEOs of a variety of industry branches.'
}, 
{
  place: 'Shanghai',
  date: '08.30.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'Borderless Blockchain Technology Summit 2018',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/borderless-blockchain-technology-summit-924a40a1f43e'
  },
  video: {
    img: Shanghai30_08,
    src: 'http://bc.bbzgroup.cn/'
  },
  text: 'CINDX has signed a participation contract as a Gold Sponsor for the Borderless Blockchain Technology Summit 2018. The Summit has invited the blockchain industry’s best speakers and entrepreneurs from all over the world.'
}, 
{
  place: 'Shanghai',
  date: '09.08.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'SLUSH SHANGHAI',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da'
  },
  video: {
    img: Shanghai7_8_09,
    src: 'http://shanghai.slush.org/'
  },
  text: 'Slush Shanghai 2018 will attract 15,000 attendees, including 1,000 startups, 500 investors, as well as 500 domestic and foreign media all gathered in one of the most iconic cities in the world.'
}, 
{
  place: 'Shanghai',
  date: '09.12.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'Blockchainer China Tour',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da'
  },
  video: {
    img: Shanghai9_12_09,
    src: 'http://www.blockchainer.vip/'
  },
  text: 'CINDX has made meeting arrangements with a number of private investors and representatives of well-known investment funds such as JRR Crypto Fund, LD Capital, J One Capital, Consensus Investment. Additionally, CINDX will attend Wanxiang Blockchain Summit. The Summit will invite representatives from various industries to share their insight regarding the solutions empowered by blockchain technology, envisioning the true value of blockchain technology in future industrial application.'
}, 
{
  place: 'Beijing',
  date: '09.13.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'Blockchainer China Tour',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da'
  },
  video: {
    img: Beijing13_16_09,
    src: 'http://www.blockchainer.vip/'
  },
  text: 'CINDX is going to Beijing for a series of meetings with private investors, large investment funds and exchanges such as BlockVC, FBG, Node Capital, Huobi Exchange, Roots Capital, DFund.'
}, 
{
  place: 'Singapore',
  date: '09.14.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'SLUSH SINGAPORE',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da'
  },
  video: {
    img: Singapore14_09,
    src: 'http://singapore.slush.org/'
  },
  text: 'Slush is the world’s leading startup event where founders and tech talent meet with top-tier international investors, executives, and media.'
}, 
{
  place: 'Moscow',
  date: '09.15.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'CRYPTO EXPO MOSCOW',
  video: {
    img: Moscow15_09,
    src: 'https://cryptoexpo.moscow/'
  },
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/consensus-singapore-e8dcb319d530'
  },
  text: 'Crypto EXPO Moscow is #1 space where the crypto world comes live. Worldwide сrypto markets, blockchains and ICO came all in one to Moscow to open the world of mysterious and at the same time trendy topic - crypto money. This huge expo-forum is not just about building a network between crypto companies and gurus from all over the world but more so about getting to know what crypto world is actually about.'
}, 
{
  place: 'Seoul',
  date: '09.16.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'BLOCKSEOUL',
  video: {
    img: Seoul16_19_09,
    src: 'https://www.blockseoul.com/'
  },
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/consensus-singapore-e8dcb319d530'
  },
  text: 'Block Seoul, one of the largest blockchain conferences of its kind, a connection hub for a diverse range of ICOs, investors, financial institutions, and VCs.'
}, 
{
  place: 'Singapore',
  date: '09.20.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'CONSENSUS: SINGAPORE 2018',
  report: {
    text: 'Post-Event Report',
    link: 'https://medium.com/cindx/consensus-singapore-e8dcb319d530'
  },
  video: {
    img: Singapore19_09,
    src: 'https://www.coindesk.com/events/consensus-singapore-2018/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'Consensus: Singapore will feature 75+ speakers and 50+ sponsors across 2 days of powerful insights, industry announcements, and cross-industry networking opportunities.'
}, 
{
  place: 'Singapore',
  date: '09.21.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'TOKENMATCH',
  video: {
    img: Singapore21_09,
    src: 'https://tokenmatch.net/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'At Tokenmatch, an elite group of ICO teams present to small groups of investors that have the capacity and mandate to deploy capital. Investors come by invitation only and ICO teams are preselected through a rigorous process.'
}, 
{
  place: 'Singapore',
  date: '09.22.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'CINDX Meetup',
  video: {
    img: Singapore22_09,
    src: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35'
  },
  report: {
    text: 'Details',
    link: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35'
  },
  text: 'The CINDX Meetup in Singapore is a fantastic opportunity to shed some light on the most common issues that crypto investors come across, discover crypto asset management and how the CINDX platform helps all crypto market participants. Join top CINDX management team members in exploring unprecedented opportunities to maximize profit in the cryptocurrency markets.'
}, 
{
  place: 'Bangkok',
  date: '09.26.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'ASEAN DIGITAL 5.0 DIGITAL ECONOMY. THINK ASIA.',
  video: {
    img: Bangkok25_26_09,
    src: 'https://aseandigital.io/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'As economies worldwide have been transcending fast and to ensure our digital preparedness, Digital ASEAN which consists of consultants and enthusiasts step forward aiming to bridge the gap in digital transformations between businesses, community and government. Digital ASEAN visions to be the head organization to lead in promoting digital economy conferences, forums, summits and all sorts of events with the support of international organizations and individuals.'
}, 
{
  place: 'Tokyo',
  date: '09.28.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'TEAMZ BLOCKCHAIN SUMMIT',
  video: {
    img: Tokyo28_29_09,
    src: 'https://summit.teamz.co.jp/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'TEAMZ Blockchain Summit connects trusted investors, blockchain projects, exchanges, media, and influencers in all sectors to contribute to the emerging global blockchain ecosystem. With the aim of closing deals, creating business alliances and network expansion, over 2000 participants from more than 50 countries will the summit.'
}, 
{
  place: 'Las Vegas',
  date: '10.24.2018',
  status: indexLngObj[lng]['mediaNews#2_94'],
  data: 'Money 20/20 ',
  video: {
    img: Las_Vegas21_24_10,
    src: 'https://us.money2020.com/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'The “Money Revolution” is underway at the Money 20/20 conference that will take place in Las Vegas from the 21st to the 24th of October. Participants will fearlessly tackle the mission of creating a simpler, fairer and more inclusive financial system for individuals, businesses, and society. Our team will represent CINDX platform, alongside a number of other leading blockchain projects.'
}, 
{
  place: 'Las Vegas',
  date: '12.11.2019',
  status: indexLngObj[lng]['mediaNews#2_93'],
  data: 'CINDX Heading For ELEV8 In Las Vegas',
  video: {
    img: IMG_1086,
    src: 'https://www.elev8con.com/las-vegas-december-2019/'
  },
  text: 'The CINDX platform development team will be heading to Las Vegas in December of 2019 to attend the exclusive ELEV8 event, which promises to attract the leading names in the industry. The event will be an excellent opportunity for the team to present its product before a host of world-class speakers and industry players.'
}, 
{
  place: 'Singapore',
  date: '10.15.2019',
  status: indexLngObj[lng]['mediaNews#2_93'],
  data: 'CINDX To Attend Blockshow Asia 2019',
  video: {
    img: IMG_1085,
    src: 'https://blockshow.com'
  },
  text: 'The CINDX platform development team will be participating the Blockshow Asia 2019 event on the 14-15 of November, presenting the groundbreaking trading platform before a host of blockchain industry leaders. The event will be attended by two hundred industry experts and will cover a variety of topics, such as regulation, investments, technological developments, trading and many other aspects of the industry.'
}, 
{
  place: 'Malta',
  date: '11.04.2019',
  status: indexLngObj[lng]['mediaNews#2_93'],
  data: 'CINDX To Attend The Malta AI and Blockchain Summit 2019',
  video: {
    img: IMG_1084,
    src: 'https://maltablockchainsummit.com/'
  },
  report: {
    text: '',
    link: ''
  },
  text: 'The CINDX project team will be heading to Malta to attend the Malta AI and Blockchain Summit 2019 on the 4-8 of November. The event will feature a variety of venues that will be attended by a large number of crypto industry opinion leaders and investors.'
}, 
{
  place: 'London',
  date: '09.25.2019',
  status: indexLngObj[lng]['mediaNews#2_93'],
  data: 'CINDX Project Headed To Blockchain Live Event',
  video: {
    img: IMG_1074,
    src: 'https://maltablockchainsummit.com/'
  },
  report: {
    text: '',
    link: 'https://medium.com/cindx/cindx-project-headed-to-blockchain-live-event-7ae76b0bf4c8'
  },
  text: 'The CINDX project development team will be attending the Blockchain Live Event, which is set to take place on the 25th of September, 2019, at Olympia, London. The CINDX project team will be presenting the groundbreaking platform at the Blockchain Live event before a vast audience of some of the most renowned and prominent names in the blockchain industry. Among the attendees will be such industry experts as Don Tapscott, Co-Founder and Executive Chairman of the Blockchain Research Institute, Adi Ben-Ari, Founder and CEO of Applied Blockchain, and many other representatives of funds and capital management companies.'
}, 
];

const getBeautifulDate = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const $date = new Date(date);
  const monthIndex = $date.getMonth();
  const monthStr = monthNames[monthIndex];
  const day = $date.getUTCDate();
  const year = $date.getUTCFullYear();
  const yearStr = (`${year}`).substr(2, 2);

  return `${monthStr} ${day}, ${yearStr}`;
};

dataRoadShow = dataRoadShow
  .sort((curObjShow1, curObjShow2) => {
    return (new Date(curObjShow2.date).getTime()) - (new Date(curObjShow1.date).getTime())
  })
  .map((curRoadshow) => ({
    ...curRoadshow,
    date: getBeautifulDate(curRoadshow.date),
  }))

export class RoadsShow extends React.Component {
  state = {
    isLinkAccess: true,
    slideIndex: 0,
    updateCount: 0
  }

  mapMedia = () => {
    return dataRoadShow.map((el, i) => {
      const arrName = el.data.split(' ')
      const arrText = el.text.split(' ')
      let newName = ''
      let newText = ''

      arrName.forEach(nameEl => {
        if (newName.length < 70) {
          newName += nameEl + ' '
        }
      })
      arrText.forEach(textEl => {
        if (newText.length < 106) {
          newText += textEl + ' '
        }
      })

      return (
        <div key={i} className="item">
          <a target="_blank" href={(el.report || {link: '/'}).link} onClick={
            (e)=>{
              if (!el.report || !el.report.link) {
                e.preventDefault()
              }
            }
          }>
            <div className="txtNews">
              <div className="img" style={{ backgroundImage: `url(${el.video.img})`, backgroundPosition: el.centered ? 'center center' : '0 0' }}></div>
              <div className="content">
                <h3>{(newName.length - 1) === el.data.length ? newName : newName + ' ...'}</h3>
                <div className="clear" />
                <p className="textContent">{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
                {
                  (el.report && el.report.link) ? (
                    <p className="details">Details</p>
                  ) : (
                    <p className="noClickDetails">Details</p>
                  )
                }
                <p className="dateInfo">Date: {el.date}</p>
                <div className={`statusEvent ${el.status.toUpperCase()}`}>{el.status}</div>
              </div>
            </div>
          </a>
        </div>
      );
    })
  }

  openLink = (src) => {
    if (this.state.isLinkAccess) {
      window.open(src)
    }
  }

  render() {
    const settings = {
      arrows: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: (i) => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settingsNews = {
      arrows: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings2 = {
      arrows: true,
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settingsNews2 = {
      arrows: true,
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
    };
    return (
      <div className="block_7">
        <div className="size">
          <h2 className="header_blocks">{indexLngObj[lng]['mediaNews#2_95']}</h2>
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
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default RoadsShow
