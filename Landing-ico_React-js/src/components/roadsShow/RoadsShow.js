import React, { Component } from 'react'
import Slider from 'react-slick'
import './RoadsShow.css'

const dataRoadShow = [
    {
        place: 'Shanghai',
        date: '30.08',
        data: 'Borderless Blockchain Technology Summit',
        video: {
            img: '',
            src: ''
        },
        text: '30 min ICO pitch'
    },
    {
        place: 'Shanghai',
        date: '7–8.09',
        data: 'Slush',
        video: {
            img: '',
            src: ''
        },
        text: 'Slush offers a unique opportunity to showcase your company to a global audience and to the who’s who in the tech community. Our only job is to help the next generation of world-conquering founders forward.'
    },
    {
        place: 'HONG KONG',
        date: '9-10.09',
        data: 'UNBLOCK COMMUNITY CONFERENCE',
        video: {
            img: '',
            src: ''
        },
        text: 'Stand 20 min meet up with investors'
    },
    {
        place: 'Shanghai',
        date: '11-12.09',
        data: 'SHANGHAI INTERNATIONAL BLOCKCHAIN WEEK 2018 4th Global Blockchain Summit',
        video: {
            img: '',
            src: ''
        },
        text: 'Vitalik Buterin'
    },
    {
        place: 'Shanghai, Běijīng',
        date: '9-16.09',
        data: 'China Roadshow',
        video: {
            img: '',
            src: ''
        },
        text: '1. Fee includes: All the transportation, meals, accommodation, all events and overseas assurance in China. 2. We will arrange translators during the whole tour. 3. Fee not includes round flights to China. 4. We will stay in 5 star hotels for double rooms, let us know if you want to upgrade for king size room. □Upgrade(Extra $160/person per day)'
    },
    {
        place: 'Singapore',
        date: '14.09',
        data: 'Slush',
        video: {
            img: '',
            src: ''
        },
        text: 'At Slush Singapore 2018, 60 top-class startups will have an opportunity to showcase their businesses to investors, media and potential clients at the Demo Area. Being at the heart of the conference, Demo Stands are a fantastic platform to capture the interest of over 3,000 attendees.'
    },
    {
        place: 'Seoul',
        date: '16-19.09',
        data: 'Blockseoul',
        video: {
            img: '',
            src: ''
        },
        text: '"10min pitch, booth, 3 tickets stand"'
    },
    {
        place: 'Shanghai',
        date: '18.09',
        data: 'Blockchain Practitioner Conference China ',
        video: {
            img: '',
            src: ''
        },
        text: '//Booth 2m*2m Panel speech 1/2 Ad 12000 Booth 2m*2m Keynote speech 1/2 Ad 14000'
    },
    {
        place: 'Stockholm',
        date: '19.09 ',
        data: 'Blockchain & Bitcoin Conference',
        video: {
            img: '',
            src: ''
        },
        text: '//'
    },
    {
        place: 'Singapore',
        date: '19.09',
        data: 'CONSENSUS Coindesk',
        video: {
            img: '',
            src: ''
        },
        text: '"SPONSORED NEWSLETTER @ $10,000 Take advantage of our branded newsletter by starting the narrative leading up to the Conference and reaching our 170,000+ subscriber base"'
    },
    {
        place: 'Beijing China',
        date: '19-20.09',
        data: '5th Annual Block Chain Finance & Fin-tech China',
        video: {
            img: '',
            src: ''
        },
        text: '"Moderator of panel, 8 tickets, 2m*2m stand, 2 diner passes 2 tickets 2m*2m stand + 2 stuff tickets"'
    },
    {
        place: 'Moscow',
        date: '25.09',
        data: 'INTERNATIONAL BLOCKCHAIN SUMMIT',
        video: {
            img: '',
            src: ''
        },
        text: '"Stand 2meter+roll up + 2 tickets 1550 Stand 3 meter + roll up + 4 tickets VIP 2300"'
    },
    {
        place: 'Banghok',
        date: '25-26.09',
        data: 'Digital economy. Think Asia',
        video: {
            img: '',
            src: ''
        },
        text: '"5 Minutes Stage Time 2 VIP Event Pass 2 B2B Networking Cruise Dinner Wristband 1 Networking Table"'
    },
    {
        place: 'Kuala Lumpur',
        date: '27-28.09',
        data: 'Blockchain Project Showcases',
        video: {
            img: '',
            src: ''
        },
        text: '"in Malaysia Kuala lumpur at September 27,28 this year,you will see 100+ investors from VC/PE,Family office etc. Exhibition Sponsor: 8000USD Customized exhibit Space (3MX2M) One on one meeting with investors from VC,Capital Speech Sponsor:10000USD Keynote Speech (30 Minutes) One on one meeting with investors from VC,Capital"'
    },
    {
        place: 'Tokyo',
        date: '28-29.09',
        data: 'TEAMZ Blockchain Summit.',
        video: {
            img: '',
            src: ''
        },
        text: '"Investors, guest speakers kick-off party on Sep 27th (2 people/project) Booth (3m×2m) for Day 1 Lunch with investors, guest speakers for Day 1 (2 people/project) Summit pass for Day 1 & Day 2"'
    },
    {
        place: 'Malta',
        date: '03-05.10',
        data: 'Delta Summit',
        video: {
            img: '',
            src: ''
        },
        text: '"30 min Masterclass / Demo / Sponsor Presentation on MAIN STAGE  50 words company profile in event brochure  Social media post for Speaker + for company promo as official sponsor"'
    },
    {
        place: 'London',
        date: '9-10.10',
        data: 'PayExpo',
        video: {
            img: '',
            src: ''
        },
        text: '"As the UK’s largest payments event, PayExpo is essential for anyone involved and interested in making payments faster, easier and more secure. //Stand 6 aq m only 2 tickets"'
    },
    {
        place: 'Shanghai',
        date: '15-16.10',
        data: 'IFPI2018: FinTech Future',
        video: {
            img: '',
            src: ''
        },
        text: '// Lottery machine for investors cards'
    },
    {
        place: 'Barselona',
        date: '16-18.10',
        data: 'ICO 2018',
        video: {
            img: '',
            src: ''
        },
        text: '// special event for ICO investors'
    },
    {
        place: 'Las Vegas',
        date: '21-24.10',
        data: 'Money20/20',
        video: {
            img: '',
            src: ''
        },
        text: '"Money20/20 is the anchor event on the industry calendar where C-Level Executives, renowned speakers, innovators and disruptors from across the world unite to drive change in the future of money. // 70% of booths are booked."'
    },
    {
        place: 'Dubai',
        date: '24-25.10',
        data: 'WORLD blockchain summit',
        video: {
            img: '',
            src: ''
        },
        text: '"ICO Grand Slam is a great platform for those companies who are prepared to launch their ICO and the ones who are still planning on their ICO. They can pitch in ront of global investors including VCs, angel investors and key government authorities – and stand a chance to raise funds of upto US$ 2 million. Pitch only 6000 Pitch+table 10000"'
    },
    {
        place: 'Beijing China',
        date: '24-25.10',
        data: 'BlockChain World Forum',
        video: {
            img: '',
            src: ''
        },
        text: '//'
    },
    {
        place: 'Austin USA',
        date: '26-27.10',
        data: 'Texas Bitcoin Conference 2018',
        video: {
            img: '',
            src: ''
        },
        text: '//'
    },
    {
        place: 'Malta',
        date: '1-2.11',
        data: 'MALTA BLOCKCHAIN SUMMIT',
        video: {
            img: '',
            src: ''
        },
        text: '"includes 3 min Pitch on stage in front of savvy investors 2 metre booth (2*2 wall + table + 2 chairs) October 20 – Deadline for applications. October 21 – Top applicants will be invited to pitch. November 1-2 – ICO Pitch Competition (winners will be announced at the end of the conference). $100k PRIZE"'
    },
    {
        place: 'Dubai',
        date: '14-15.11',
        data: 'Dubai Decentralized 2.0',
        video: {
            img: '',
            src: ''
        },
        text: '10 min speech'
    },
    {
        place: 'Moscow',
        date: '20.11',
        data: 'Blockchain Conference Russia',
        video: {
            img: '',
            src: ''
        },
        text: '//'
    },
    {
        place: 'Tokyo',
        date: '8.12',
        data: 'Blockchain & Criptocurrency',
        video: {
            img: '',
            src: ''
        },
        text: '"ACCESS Makuhari Messe International Exhibition Hall 1 https://www.m-messe.co.jp/en/access/ Address: 2-1, Nakase, Mihama-ku, Chiba-city, 261-8550 Japan"'
    }
]

class RoadsShow extends Component {
    state = {
        valuePopUp: dataRoadShow[2]
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
        let i = 0
        let filterEl
        if (window.innerWidth >= 801) {
            i = 2
            filterEl = dataRoadShow.filter((filEl, fillI) => fillI === i)
        } else if (window.innerWidth < 801)  {
            i = 1
            filterEl = dataRoadShow.filter((filEl, fillI) => fillI === i)
        }
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
            this.slider.slickGoTo(i - 2)
        if (window.innerWidth >= 1001)
            this.slider1.slickGoTo(i - 2)
        if (window.innerWidth >= 801)
            this.slider2.slickGoTo(i - 2)
        if (window.innerWidth >= 601)
            this.slider3.slickGoTo(i - 1)
        if (window.innerWidth >= 451)
            this.slider4.slickGoTo(i - 1)
        if (window.innerWidth < 451)
            this.slider5.slickGoTo(i - 1)
        this.setState({
            valuePopUp: filterEl[0]
        })
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 11,
            slidesToScroll: 1
        }

        const settings2 = {
            infinite: true,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 1
        }

        const settings3 = {
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1
        }

        const settings4 = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        }

        const settings5 = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        const settings6 = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        return (
            <div className="road-show-block">
                <div className="header_blocks">RoadsShow</div>
                <div className='road__circles'>
                    <div className="road-show-popup">
                        <div className="road-popup-video">
                            <img src={this.state.valuePopUp.video.img} />
                        </div>
                        <div className="road-popup-text">{this.state.valuePopUp.text}</div>
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
                    <div className="road__settings road__setting5">
                        <Slider ref={slider => (this.slider4 = slider)} {...settings5}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                    <div className="road__settings road__setting6">
                        <Slider ref={slider => (this.slider5 = slider)} {...settings6}>
                            { this.renderRoadShow() }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoadsShow
