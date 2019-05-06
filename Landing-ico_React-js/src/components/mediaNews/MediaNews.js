import * as React from 'react';
import Slider from "react-slick";
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

import './MediaNews.css';

const media = [];

let news = [];

news = news.reverse()

export class MediaNews extends React.Component {
  state = {
    isLinkAccess: true,
    slideIndex: 0,
    updateCount: 0
  }

  openLink = (src) => {
    if (this.state.isLinkAccess) {
      window.open(src)
    }
  }

  componentDidMount() {
    if (window.MediumWidget) {
      window.MediumWidget.Init({
        renderTo: '.medium-widget-cindx', 
        params: {
          "resource": "https://medium.com/cindx/the-trend-in-rating-systems-development-7a025cee518f",
          "postsPerLine":2,
          "limit": 6,
          "picture": "small",
          "fields": [
            "description",
            "publishAt",
          ],
          "ratio": "square",
        },
      })
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
      slidesToScroll: 1,
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
      slidesToScroll: 1,
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
      slidesToScroll: 1,
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
      slidesToScroll: 1,
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
      slidesToScroll: 1,
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="block_7">
        <h2 className="header_blocks">Media</h2>
        <div className="medium-widget-cindx"></div>
        <a href="https://medium.com/cindx" target="__blank">
          <div className="block_7__buttonMore">Learn more media</div>
        </a>
      </div>
    );
  }
}
