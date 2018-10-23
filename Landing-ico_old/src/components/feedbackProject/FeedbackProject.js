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
    img: Val_Jerdes,
    name: indexLngObj[lng]['feedbackProject#2'],
    position: indexLngObj[lng]['feedbackProject#3'],
    video: 'https://www.youtube.com/embed/ubN0rCtKj_E',
    text: indexLngObj[lng]['feedbackProject#4']
  },
  {
    img: Denis_Eskenazi,
    name: indexLngObj[lng]['feedbackProject#5'],
    position: indexLngObj[lng]['feedbackProject#6'],
    video: 'https://www.youtube.com/embed/OKdT6GiSGuY',
    text: indexLngObj[lng]['feedbackProject#7']
  },
  {
    img: Philip_Staehelin,
    name: indexLngObj[lng]['feedbackProject#8'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/gMYQzVyXHZI',
    text: indexLngObj[lng]['feedbackProject#10']
  },
  {
    img: Andrzej_Cichowlaz1,
    name: indexLngObj[lng]['feedbackProject#11'],
    position: indexLngObj[lng]['feedbackProject#12'],
    video: 'https://www.youtube.com/embed/uegvB7uIA0g',
    text: indexLngObj[lng]['feedbackProject#13']
  },
  {
    img: Austin_Kimm,
    name: indexLngObj[lng]['feedbackProject#14'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/5X8isxq6S00',
    text: indexLngObj[lng]['feedbackProject#15']
  },
  {
    img: Amarpreet_Singh,
    name: indexLngObj[lng]['feedbackProject#16'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/vsjxNki18DY',
    text: indexLngObj[lng]['feedbackProject#17']
  },
  {
    img: Keith_Teare,
    name: indexLngObj[lng]['feedbackProject#18'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/qWpWbZUljdg',
    text: indexLngObj[lng]['feedbackProject#19']
  },
  {
    img: Mansur_Rasulov,
    name: indexLngObj[lng]['feedbackProject#20'],
    position: indexLngObj[lng]['feedbackProject#21'],
    video: 'https://www.youtube.com/embed/r5ZMoThs1T0',
    text: indexLngObj[lng]['feedbackProject#22']
  },
  {
    img: Sadie_Hutton,
    name: indexLngObj[lng]['feedbackProject#23'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/iQhcMhT13hs',
    text: indexLngObj[lng]['feedbackProject#24']
  },
  {
    img: Graham_Doggart,
    name: indexLngObj[lng]['feedbackProject#25'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: 'https://www.youtube.com/embed/HWV5Hv2R6vA',
    text: indexLngObj[lng]['feedbackProject#26']
  },
  {
    img: Bogdan_Fiedur,
    name: indexLngObj[lng]['feedbackProject#30'],
    position: indexLngObj[lng]['feedbackProject#31'],
    video: 'https://www.youtube.com/embed/oC-oTaBId7g',
    text: indexLngObj[lng]['feedbackProject#32']
  },
  {
    img: Jason_King,
    name: indexLngObj[lng]['feedbackProject#33'],
    position: indexLngObj[lng]['feedbackProject#9'],
    video: '',
    text: indexLngObj[lng]['feedbackProject#34']
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
                <img className="playButtonWhite"
                  src={playButtonWhite} alt={"CINDX"}
                  style={{display: el.video ? 'block' : 'none'}}
                />
              </div>
              <h3>{el.name}</h3>
              <h4>{el.position}</h4>
              <hr />
            </div>
            <p>{el.text}</p>
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
