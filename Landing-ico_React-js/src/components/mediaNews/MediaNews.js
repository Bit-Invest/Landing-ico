import * as React from 'react';
import Slider from "react-slick";
import block_7_ava_bg from '../../images/block_7_ava_bg.png';
import IB from '../../media/news/IB.png';
import IS from '../../media/news/IS.png';
import Medium from '../../media/news/Medium.png'
import './MediaNews.css';

const news = [
  {
    videoSrc: 'https://www.youtube.com/watch?v=c4ruJPvo5sI',
    screen: IB,
    name: 'CINDX meets Ian Balina in Moscow',
    text: 'CINDX pitched to the one of the TOP10 crypto gurus in the world in the Cryptobazar event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: IS,
    name: 'CINDX took part in Moscow ICO Summit 2018',
    text: 'team introduced the project to the Russian crypto community during ICO Summit event.',
    source: 'www.youtube.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/meet-worlds-first-financial-crypto-social-network-connect-with-people-as-you-grow-your-wealth-76a3cea9a06c',
    screen: Medium,
    name: 'Meet World’s First Financial Crypto Social Network',
    text: 'Every day our team takes one more step on the way to creation and start of the CINDX platform.',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: Medium,
    name: 'The strategic meeting of the international CINDX team',
    text: 'Every day our team takes one more step on the way to creation and start of the CINDX...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: Medium,
    name: 'CINDX meets Vangoo Capital Partners Fund ',
    text: 'Today we have welcomed Kevin Shang from Vangoo Capital Partners and his colleagues...',
    source: 'www.medium.com'
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: Medium,
    name: 'CINDX meets 9coin Digital Asses Exchange',
    text: 'The CINDX team continues active work on building relationships with various international...',
    source: 'www.medium.com'
  },
];

export class MediaNews extends React.Component {
  mapNews = () => {
    return news.map((el, i) => {
      return (
        <div key={i}  className="item">
          <div className="txtNews">
            <img className="img" src={el.screen} alt="CINDEX"/>
            <div className="content">
              <h3>{el.name}</h3>
              <div className="clear" />
              <p>{el.text}</p>
              <a target="_blank" href={el.videoSrc}>{el.source}</a>
            </div>
          </div>
        </div>
      );
    })
  }
  mapMedia = () => {
    return news.map((el, i) => {
      return (
        <div key={i} className="txt">
          <div className="bg">
            <h3>{el.name}</h3>
            <p>{el.text}</p><a target="blank" href={el.videoSrc}>www.medium.com</a>
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
    const settingsNews = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsNews2 = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settings3 = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="block_7">
        <div className="size">
          <h2 className="header_blocks">Media</h2>
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
          <hr/>
          <h2 className="header_blocks">News</h2>
          <div className="block_arrow_relative">
            <div className="settingsNews">
              <Slider {...settingsNews}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews2">
              <Slider {...settingsNews2}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews3">
              <Slider {...settingsNews3}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
