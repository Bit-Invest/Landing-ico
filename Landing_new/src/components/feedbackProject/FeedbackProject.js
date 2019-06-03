import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import Slider from "react-slick";
import { PopUpManager } from '../popUp/PopUpManager'
import block_6_ava from '../../images/block_6_ava.png';
import playButtonWhite from '../../images/play_button_white.png';
import Val_Jerdes from '../../media/Val_Jerdes.f8ab5be3.jpg';
import Denis_Eskenazi from '../../media/Denis_Eskenazi.e8b0d64b.jpg';
import Philip_Staehelin from '../../media/Philip_Staehelin.49caf8a6.jpg';
import Andrzej_Cichowlaz1 from '../../media/Andrzej_Cichowlaz1.7705cd34.jpg';
import Austin_Kimm from '../../media/Austin_Kimm.caf37ff2.jpg';
import Amarpreet_Singh from '../../media/Amarpreet_Singh.afa7b4f8.jpg';
import Keith_Teare from '../../media/Keith_Teare.1e7599ac.jpg';
import Mansur_Rasulov from '../../media/Mansur_Rasulov.1950d44a.jpg';
import Sadie_Hutton from '../../media/Sadie_Hutton.54ab2eaa.jpg';
import Graham_Doggart from '../../media/Graham_Doggart.fd8f9df5.jpg';
import Alina_Vardanyan from '../../media/Alina_Vardanyan.jpg';
import Bogdan_Fiedur from '../../media/Bogdan_Fiedur.e36a757d.jpg';
import Jason_King from '../../media/Jason_King.png';
import './feedbackProject.css';
import { lng } from '../../links.js'
import indexLngObj from '../../lngs/index'

const feedbackOnOurProject = [
  {
    img: Keith_Teare,
    name: indexLngObj[lng]['feedbackProject#18'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/1JaUqtqCQ5w',
    text: 'Founder and Executive Chairman at Accelerated Digital Ventures',
    text2: '“By enabling a new trader to track the trades of experienced traders, CINDX removes the fear that inexperience will make failure inevitable.”',
  },
  {
    img: Austin_Kimm,
    name: indexLngObj[lng]['feedbackProject#14'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/pkBoVl7Brds',
    text: 'International Financial Services CEO',
    text2: '“CINDX makes “trader-investor” relationships personal again.”',
  },
  {
    img: Val_Jerdes,
    name: indexLngObj[lng]['feedbackProject#2'],
    position: indexLngObj[lng]['feedbackProject#3'],
    video: 'https://www.youtube.com/embed/H6hSOnoyFTY',
    text: indexLngObj[lng]['feedbackProject#4']
  },
  {
    img: Amarpreet_Singh,
    name: indexLngObj[lng]['feedbackProject#16'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/VKNEfob9sGA',
    text: 'Senior Adviser of Global Blockchain Foundation',
    text2: '“CINDX not only offers sophisticated tools for all the investors, traders, but also offers a platform, where we can just copy trade and we can piggyback on the experience of very experienced traders.”',
  },
  {
    img: Philip_Staehelin,
    name: indexLngObj[lng]['feedbackProject#8'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/nN76RkbejGc',
    text: 'Managing Partner of Roland Berger',
    text2: '“CINDX is a brilliant idea that addresses all of the pain points of cryptocurrency and token investing.”',
  },
  {
    img: Jason_King,
    name: indexLngObj[lng]['feedbackProject#33'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/MHQzECP7izc',
    text: 'Chief Executive Officer at Telenor ',
    text2: '“CINDX truly can demystify and uncover the cryptocurrency trading world for the mass market investor. This offers a fighting chance for the ordinary small investor to go in and take part in trades that match their profile in a fairer and more transparent way.”',
  },
  {
    img: Bogdan_Fiedur,
    name: indexLngObj[lng]['feedbackProject#30'],
    position: indexLngObj[lng]['feedbackProject#31'],
    video: 'https://www.youtube.com/embed/4kXgu60guic',
    text: 'Co-Founder of bitJob and President of Blockchainexperts.io',
    text2: '“Any innovative solutions directed at simplifying the work of investors, managers and vendors represent a potentially disruptive model for the cryptocurrency investments market.”',
  },
  {
    img: Graham_Doggart,
    name: indexLngObj[lng]['feedbackProject#25'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/uXTA_QLympE',
    text: 'Founder and CPO at AuBit',
    text2: '“Imagine that the investor could entrust his funds with somebody who is an expert in this market and allow them to trade, without surrendering control of their funds.”',
  },
  {
    img: Sadie_Hutton,
    name: indexLngObj[lng]['feedbackProject#23'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/D4ln5WpZh-Y',
    text: 'Founder and CSO at AuBit',
    text2: '“The whole protocol is creating a community with real support and intelligence for anyone participating.”',
  },
]

class FeedbackProject extends React.Component {
  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  feedbackOnOurProject = () => {
    return feedbackOnOurProject.map((el, i) => {
      return (
        <div key={i}>
          <div className="item" style={{ backgroundImage: `url(${el.img})` }} alt="CINDEX"></div>
          <div className="left">
            <div className="name">
              <div className="feed-back-div" onClick={() => this.showVideoInPopUp(el.video)}>
                <div className="playButtonWhite" style={{display: el.video ? 'block' : 'none'}}>video</div>
                {
                  // <img className="playButtonWhite"
                  //   src={playButtonWhite} alt={"CINDX"}
                  //   style={{display: el.video ? 'block' : 'none'}}
                  // />
                }
              </div>
              <h3>{el.name}</h3>
              <h4>{el.position}</h4>
              <hr />
            </div>
            <p>
              {el.text}
              <div className="citaty">{el.text2}</div>
            </p>
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
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="block_6">
        <div className="size">
        <h2 className="header_blocks">{ indexLngObj[lng]['feedbackProject#1'] }</h2>
          <div className="block_arrow_relative">
          <div className="carusel-block">
              <Slider {...settings}>
                {this.feedbackOnOurProject()}
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
  connect(null, mapDispatchToProps)(FeedbackProject)

export {connectedContainer as FeedbackProject}
