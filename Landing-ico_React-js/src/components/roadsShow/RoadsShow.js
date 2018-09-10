import React, { Component } from 'react'
import Slider from 'react-slick'
import Beijing13_16_09 from '../../images/RoadShowImg/Beijing13-16-09.jpg'
import Shanghai30_08 from '../../images/RoadShowImg/Shanghai30-08.jpg'
import Shanghai7_8_09 from '../../images/RoadShowImg/Shanghai7-8-09.jpg'
import Shanghai9_12_09 from '../../images/RoadShowImg/Shanghai9-12-09.jpg'
import Singapore14_09 from '../../images/RoadShowImg/Singapore14-09.jpg'
import Moscow15_09 from '../../images/RoadShowImg/Moscow15-09.jpg'
import Seoul16_19_09 from '../../images/RoadShowImg/Seoul16-19-09.jpg'
import Shanghai18_09 from '../../images/RoadShowImg/Shanghai18-09.jpg'
import Singapore19_09 from '../../images/RoadShowImg/Singapore19-09.jpg'
import Singapore21_09 from '../../images/RoadShowImg/Singapore21-09.jpg'
import Bangkok25_26_09 from '../../images/RoadShowImg/Bangkok25-26-09.jpg'
import Tokyo28_29_09 from '../../images/RoadShowImg/Tokyo28-29-09.jpg'
import Kuala_Lumpur27_28_09 from '../../images/RoadShowImg/Kuala-Lumpur27-28-09.jpg'
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
        video: {
            img: Shanghai9_12_09,
            src: 'http://www.blockchainer.vip/'
        },
        text: 'CINDX has made meeting arrangements with a number of private investors and representatives of well-known investment funds such as JRR Crypto Fund, LD Capital, J One Capital, Consensus Investment. Additionally, CINDX will attend Wanxiang Blockchain Summit. The Summit will invite representatives from various industries to share their insight regarding the solutions empowered by blockchain technology, envisioning the true value of blockchain technology in future industrial application.'
    },
    {
        place: 'Bejing',
        date: '13-16.09',
        data: 'Blockchainer China Tour',
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
        place: 'Shanghai',
        date: '18.09',
        data: 'BLOCKCHAIN PRACTITIONER CHINA SUMMIT 2018',
        video: {
            img: Shanghai18_09,
            src: 'http://sh.bpc-events.com/'
        },
        text: 'Blockchain Practitioner China Summit 2018 will gather blockchain elite across the globe, including blockchain industrial associations, institutes, Fintech companies, blockchain technology innovators from more than 20 countries'
    },
    {
        place: 'Singapore',
        date: '19.09',
        data: 'CONSENSUS: SINGAPORE 2018',
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
        place: 'Kuala Lumpur',
        date: '27-28.09',
        data: 'DAIBC: INVESTMENTS & PROJECT SHOWCASES',
        video: {
            img: Kuala_Lumpur27_28_09,
            src: 'http://www.szwgroup.com/ibdac-kuala-lumpur/index.aspx'
        },
        text: 'In 2018, new blockchain initiatives are launched every day. With many projects set to release a working product or application, and a likely flood of newly converted institutional money. However, this exponentially growing market will continue to strongly highlight whether Blockchains can or could support a decentralised world. DAIBC: Investments & Project Showcases will help to select a project to invest.'
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

class RoadsShow extends Component {
    state = {
        valuePopUp: dataRoadShow[1]
    }

    renderRoadShow = () => {
        return dataRoadShow.map((el, i) => {
            return (
                <div key={i}>
                    <div className="wrapper-road">
                        <div className="road__circle" onClick={() => this.renderRoadShowPopup(i)}></div>
                        <div className="road__class road__place">{el.place}</div>
                        <div className="road__date">{el.date}</div>
                        <div className="road__class road__data">{el.data}</div>
                    </div>
                </div>
            )
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    }

    handleResize = () => {
        let i = 1
        let filterEl = dataRoadShow.filter((filEl, fillI) => fillI === i)
        this.setState({
            valuePopUp: filterEl[0]
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize)
    }

    renderRoadShowPopup = (i) => {
        const filterEl = dataRoadShow.filter((filEl, fillI) => fillI === i)
        if (window.innerWidth >= 1201)
            (i === 0) ?
                this.slider.slickGoTo(dataRoadShow.length - 1) :
                this.slider.slickGoTo(i - 1)
        if (window.innerWidth >= 1001)
            (i === 0) ?
                this.slider1.slickGoTo(dataRoadShow.length - 1) :
                this.slider1.slickGoTo(i - 1)
        if (window.innerWidth >= 768)
            (i === 0) ?
                this.slider2.slickGoTo(dataRoadShow.length - 1) :
                this.slider2.slickGoTo(i - 1)
        if (window.innerWidth < 768)
            (i === 0) ?
                this.slider3.slickGoTo(dataRoadShow.length - 1) :
                this.slider3.slickGoTo(i - 1)
        this.setState({
            valuePopUp: filterEl[0]
        })
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            afterChange: (i) => {
                if (i + 1 === dataRoadShow.length) {
                    i = 0
                    this.renderRoadShowPopup(i)
                } else {
                    this.renderRoadShowPopup(i + 1)
                }
                
            }
        }

        const settings2 = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            afterChange: (i) => {
                if (i + 1 === dataRoadShow.length) {
                    i = 0
                    this.renderRoadShowPopup(i)
                } else {
                    this.renderRoadShowPopup(i + 1)
                }
            }
        }

        const settings3 = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            afterChange: (i) => {
                if (i + 1 === dataRoadShow.length) {
                    i = 0
                    this.renderRoadShowPopup(i)
                } else {
                    this.renderRoadShowPopup(i + 1)
                }
            }
        }

        const settings4 = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            afterChange: (i) => {
                if (i + 1 === dataRoadShow.length) {
                    i = 0
                    this.renderRoadShowPopup(i)
                } else {
                    this.renderRoadShowPopup(i + 1)
                }
            }
        }

        // const settings5 = {
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 1
        // }

        // const settings6 = {
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 1
        // }

        return (
            <div className="road-show-block">
                <div className="header_blocks">Roadshow</div>
                <div className='road__circles'>
                    <div className="road-show-popup">
                        <a className="road-show-a" href={this.state.valuePopUp.video.src} target="_blank">
                            <div className="road-popup-video">
                                <div className="img" style={{ backgroundImage: `url(${this.state.valuePopUp.video.img})` }}></div>
                            </div>
                        </a>
                        <div className="road-popup-text">
                            <div>{this.state.valuePopUp.text}</div>
                            { this.state.valuePopUp.report ? <a target="_blank" href={this.state.valuePopUp.report.link}>{this.state.valuePopUp.report.text}</a> : null }
                        </div>
                        <div className="road-popup-triangle"></div>
                    </div>
                    <div className='road__line' />
                    <div className="road__settings road__setting">
                        <Slider ref={slider => (this.slider = slider)} {...settings}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                    <div className="road__settings road__setting2">
                        <Slider ref={slider => (this.slider1 = slider)} {...settings2}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                    <div className="road__settings road__setting3">
                        <Slider ref={slider => (this.slider2 = slider)} {...settings3}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                    <div className="road__settings road__setting4">
                        <Slider ref={slider => (this.slider3 = slider)} {...settings4}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoadsShow
