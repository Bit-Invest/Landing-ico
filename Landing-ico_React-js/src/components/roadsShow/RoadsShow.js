import React, { Component } from 'react'
import Slider from 'react-slick'
import './RoadsShow.css'

const dataRoadShow = [
    {
        place: 'San Francisco',
        date: '1232-21',
        data: 'chnage djskd',
        video: {
            img: '',
            src: ''
        },
        text: 'iowepqipoqwjdklsa nfmnvckdsanfjdsb vcjkdlfc dvndndlcmdf,vnmc,v nmsal;czxkvn asld;vzk nslvdnzf adklnsfjknldvmb'
    },
    {
        place: 'San djasl',
        date: '909-21',
        data: 'chnage djskd',
        video: {
            img: '',
            src: ''
        },
        text: ' mcvklxcjvxz vlnkjxczmv,cmv,cmzx.,mcz,.xmc dvndndl cmdf,vnmc,vnmsal;vncmxvnm,zxkdsad ioasd;vzk nslvdnzfa klnsfjknldvmb'
    },
    {
        place: 'Sadsakldmn Francisco',
        date: '1232-21',
        data: 'chnage tioriterop',
        video: {
            img: '',
            src: ''
        },
        text: 'ifewour91i2e 09deijkjfwoefijdsivojdflvsk fmvcx,nfewjopn fioqnpunreov'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: 'chnage jvncmx,',
        video: {
            img: '',
            src: ''
        },
        text: 'vnxmc,nvkldfj sjfpoewjfosdfjp[qeo jfdlkj[rejlfgj lks;jrgklfjd]]'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: 'chnage djsnvcm,xkd',
        video: {
            img: '',
            src: ''
        },
        text: 'iroepi3029p ofjdnmdje0iojfknvj rkfeopwls;fks;jgk ljerigfkjgo i30jerlgjo-jfkd lj2[ojsdkgje2lcl,'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: 'chnage jvncmx,',
        video: {
            img: '',
            src: ''
        },
        text: 'vnxmc,nvkldfj sjfpoewjfosdfjp[qeo jfdlkj[rejlfgj lks;jrgklfjd]]'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: 'chnage djsnvcm,xkd',
        video: {
            img: '',
            src: ''
        },
        text: 'iroepi3029p ofjdnmdje0iojfknvj rkfeopwls;fks;jgk ljerigfkjgo i30jerlgjo-jfkd lj2[ojsdkgje2lcl,'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: 'chnage jvncmx,',
        video: {
            img: '',
            src: ''
        },
        text: 'vnxmc,nvkldfj sjfpoewjfosdfjp[qeo jfdlkj[rejlfgj lks;jrgklfjd]]'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: 'chnage djsnvcm,xkd',
        video: {
            img: '',
            src: ''
        },
        text: 'iroepi3029p ofjdnmdje0iojfknvj rkfeopwls;fks;jgk ljerigfkjgo i30jerlgjo-jfkd lj2[ojsdkgje2lcl,'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: 'chnage jvncmx,',
        video: {
            img: '',
            src: ''
        },
        text: 'vnxmc,nvkldfj sjfpoewjfosdfjp[qeo jfdlkj[rejlfgj lks;jrgklfjd]]'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: 'chnage djsnvcm,xkd',
        video: {
            img: '',
            src: ''
        },
        text: 'iroepi3029p ofjdnmdje0iojfknvj rkfeopwls;fks;jgk ljerigfkjgo i30jerlgjo-jfkd lj2[ojsdkgje2lcl,'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: 'chnage jvncmx,',
        video: {
            img: '',
            src: ''
        },
        text: 'vnxmc,nvkldfj sjfpoewjfosdfjp[qeo jfdlkj[rejlfgj lks;jrgklfjd]]'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: 'chnage djsnvcm,xkd',
        video: {
            img: '',
            src: ''
        },
        text: 'iroepi3029p ofjdnmdje0iojfknvj rkfeopwls;fks;jgk ljerigfkjgo i30jerlgjo-jfkd lj2[ojsdkgje2lcl,'
    }
]

class RoadsShow extends Component {
    state = {
        valuePopUp: dataRoadShow[0]
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

    renderRoadShowPopup = (i) => {
        const filterEl = dataRoadShow.filter((filEl, fillI) => fillI === i)
        this.slider.slickGoTo(i)
        this.setState({
            valuePopUp: filterEl[0]
        })
    }

    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 11,
            slidesToScroll: 1
        }

        if (window.innerWidth <= 1200) {
            settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 8,
                slidesToScroll: 1
            }
        }

        if (window.innerWidth <= 1000) {
            settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        }

        if (window.innerWidth <= 800) {
            settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }

        if (window.innerWidth <= 600) {
            settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

        if (window.innerWidth <= 450) {
            settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            }
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
                    <div className="road__settings">
                        <Slider ref={slider => (this.slider = slider)} {...settings}>
                            { this.renderRoadShow() }
                        </Slider>
                        {/* {renderCircles()} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default RoadsShow