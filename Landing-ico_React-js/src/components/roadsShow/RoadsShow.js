import React, { Component } from 'react'
import Slider from 'react-slick'
import './RoadsShow.css'

const dataRoadShow = [
    {
        place: 'San Francisco',
        date: '1232-21',
        data: '1',
        video: {
            img: '',
            src: ''
        },
        text: '11'
    },
    {
        place: 'San djasl',
        date: '909-21',
        data: '2',
        video: {
            img: '',
            src: ''
        },
        text: '22'
    },
    {
        place: 'Sadsakldmn Francisco',
        date: '1232-21',
        data: '3',
        video: {
            img: '',
            src: ''
        },
        text: '33'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: '4',
        video: {
            img: '',
            src: ''
        },
        text: '44'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '5',
        video: {
            img: '',
            src: ''
        },
        text: '55'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: '6',
        video: {
            img: '',
            src: ''
        },
        text: '66'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '7',
        video: {
            img: '',
            src: ''
        },
        text: '77'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: '8',
        video: {
            img: '',
            src: ''
        },
        text: '88'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '9',
        video: {
            img: '',
            src: ''
        },
        text: '99'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: '10',
        video: {
            img: '',
            src: ''
        },
        text: '1010'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '11',
        video: {
            img: '',
            src: ''
        },
        text: '1111'
    },
    {
        place: 'San Fracmxz,ncisco',
        date: '3123-21',
        data: '12',
        video: {
            img: '',
            src: ''
        },
        text: '1212'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '13',
        video: {
            img: '',
            src: ''
        },
        text: '1313'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '14',
        video: {
            img: '',
            src: ''
        },
        text: '1414'
    },
    {
        place: 'San Francisco',
        date: '909-21',
        data: '15',
        video: {
            img: '',
            src: ''
        },
        text: '1515'
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