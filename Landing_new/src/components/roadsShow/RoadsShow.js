import React, { Component } from 'react'
import Slider from 'react-slick'
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
import './RoadsShow.css'

let dataRoadShow = [
    {
        place: 'Shanghai',
        date: '30.08',
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
        date: '7-8.09',
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
        date: '9-12.09',
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
        date: '13-16.09',
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
        date: '14.09',
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
        date: '15.09',
        data: 'CRYPTO EXPO MOSCOW',
        video: {
            img: Moscow15_09,
            src: 'https://cryptoexpo.moscow/'
        },
        text: 'Crypto EXPO Moscow is #1 space where the crypto world comes live. Worldwide сrypto markets, blockchains and ICO came all in one to Moscow to open the world of mysterious and at the same time trendy topic - crypto money. This huge expo-forum is not just about building a network between crypto companies and gurus from all over the world but more so about getting to know what crypto world is actually about.'
    },
    {
        place: 'Seoul',
        date: '16-19.09',
        data: 'BLOCKSEOUL',
        video: {
            img: Seoul16_19_09,
            src: 'https://www.blockseoul.com/'
        },
        text: 'Block Seoul, one of the largest blockchain conferences of its kind, a connection hub for a diverse range of ICOs, investors, financial institutions, and VCs.'
    },
    {
        place: 'Singapore',
        date: '19-20.09',
        data: 'CONSENSUS: SINGAPORE 2018',
        report: {
            text: 'Post-Event Report',
            link: 'https://medium.com/cindx/consensus-singapore-e8dcb319d530'
        },
        video: {
            img: Singapore19_09,
            src: 'https://www.coindesk.com/events/consensus-singapore-2018/'
        },
        text: 'Consensus: Singapore will feature 75+ speakers and 50+ sponsors across 2 days of powerful insights, industry announcements, and cross-industry networking opportunities.'
    },
    {
        place: 'Singapore',
        date: '21.09',
        data: 'TOKENMATCH',
        video: {
            img: Singapore21_09,
            src: 'https://tokenmatch.net/'
        },
        text: 'At Tokenmatch, an elite group of ICO teams present to small groups of investors that have the capacity and mandate to deploy capital. Investors come by invitation only and ICO teams are preselected through a rigorous process.'
    },
    {
        place: 'Singapore',
        date: '22.09',
        data: 'CINDX Meetup',
        video: {
            img: Singapore22_09,
            src: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35'
        },
        details: {
            text: 'Details',
            link: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35'
        },
        text: 'The CINDX Meetup in Singapore is a fantastic opportunity to shed some light on the most common issues that crypto investors come across, discover crypto asset management and how the CINDX platform helps all crypto market participants. Join top CINDX management team members in exploring unprecedented opportunities to maximize profit in the cryptocurrency markets.'
    },
    {
        place: 'Bangkok',
        date: '25-26.09',
        data: 'ASEAN DIGITAL 5.0 DIGITAL ECONOMY. THINK ASIA.',
        video: {
            img: Bangkok25_26_09,
            src: 'https://aseandigital.io/'
        },
        text: 'As economies worldwide have been transcending fast and to ensure our digital preparedness, Digital ASEAN which consists of consultants and enthusiasts step forward aiming to bridge the gap in digital transformations between businesses, community and government. Digital ASEAN visions to be the head organization to lead in promoting digital economy conferences, forums, summits and all sorts of events with the support of international organizations and individuals.'
    },
    {
        place: 'Tokyo',
        date: '28-29.09',
        data: 'TEAMZ BLOCKCHAIN SUMMIT',
        video: {
            img: Tokyo28_29_09,
            src: 'https://summit.teamz.co.jp/'
        },
        text: 'TEAMZ Blockchain Summit connects trusted investors, blockchain projects, exchanges, media, and influencers in all sectors to contribute to the emerging global blockchain ecosystem. With the aim of closing deals, creating business alliances and network expansion, over 2000 participants from more than 50 countries will the summit.'
    },
    {
        place: 'Las Vegas',
        date: '21-24.10',
        data: 'Money 20/20 ',
        video: {
            img: Las_Vegas21_24_10,
            src: 'https://us.money2020.com/'
        },
        text: 'The “Money Revolution” is underway at the Money 20/20 conference that will take place in Las Vegas from the 21st to the 24th of October. Participants will fearlessly tackle the mission of creating a simpler, fairer and more inclusive financial system for individuals, businesses, and society. Our team will represent CINDX platform, alongside a number of other leading blockchain projects.'
    },
]

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
              if (!el.report) {
                e.preventDefault()
              }
            }
          }>
            <div className="txtNews">
              <div className="img" style={{ backgroundImage: `url(${el.video.img})`, backgroundPosition: el.centered ? 'center center' : '0 0' }}></div>
              <div className="content">
                <h3>{(newName.length - 1) === el.data.length ? newName : newName + ' ...'}</h3>
                <div className="clear" />
                <p>{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
                {
                  el.report && (
                    <p className="details">Details</p>
                  ) 
                }
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
          <h2 className="header_blocks">Roadshow</h2>
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
