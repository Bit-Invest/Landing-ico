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

const feedbackOnOurProject = [
  {
    img: Denis_Eskenazi,
    name: 'Denis Eskenazi',
    position: 'Product Marketing Director',
    video: 'https://www.youtube.com/embed/OKdT6GiSGuY',
    text: 'Denis Eskenazi, CINDX Product Marketing Director explains why he has joined CINDX'
  },
  {
    img: Val_Jerdes,
    name: 'Val Jerdes',
    position: 'Product Director',
    video: 'https://www.youtube.com/embed/ubN0rCtKj_E',
    text: 'Val Jerdes, CINDX Product Director talks about the key team members and how their expertise will help develop the project that can change the game of finance in a significant way'
  },
  {
    img: Philip_Staehelin,
    name: 'Philip Staehelin',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/gMYQzVyXHZI',
    text: 'Philip Staehelin, Adviser of CINDX project, explains how the cryptocurrency revolution can help even inexperienced investors and tells about the breakthrough that CINDX project prepared for the crypto market'
  },
  {
    img: Andrzej_Cichowlaz1,
    name: 'Andrzej Cichowlaz',
    position: 'Marketing Specialist',
    video: 'https://www.youtube.com/embed/uegvB7uIA0g',
    text: 'Andrzej Cichowlaz, CINDX Marketing Manager tells why he believes in the project`s success'
  },
  {
    img: Austin_Kimm,
    name: 'Austin Kimm',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/5X8isxq6S00',
    text: 'Austin Kimm, Adviser of CINDX project tells how CINDX makes trading cryptocurrency for profit simple and smart'
  },
  {
    img: Amarpreet_Singh,
    name: 'Amarpreet Singh',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/vsjxNki18DY',
    text: 'Amarpreet Singh, CINDX Adviser explains how CINDX platform can bridge the gap between investors and traders'
  },
  {
    img: Keith_Teare,
    name: 'Keith Teare',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/qWpWbZUljdg',
    text: 'Keith Teare, CINDX Adviser describes advantages of CINDX platform'
  },
  {
    img: Mansur_Rasulov,
    name: 'Mansur Rasulov',
    position: 'Community Lead',
    video: 'https://www.youtube.com/embed/r5ZMoThs1T0',
    text: 'Mansur Rasulov, CINDX Community Lead explains why he decided to become a part of CINDX team'
  },
  {
    img: Sadie_Hutton,
    name: 'Sadie Hutton',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/iQhcMhT13hs',
    text: 'Sadie Hutton, CINDX Adviser explains how CINDX plantform is different from other automated trading platforms'
  },
  {
    img: Graham_Doggart,
    name: 'Graham Doggart',
    position: 'Adviser',
    video: 'https://www.youtube.com/embed/HWV5Hv2R6vA',
    text: 'Graham Doggart, CINDX Adviser talks about strengths of CINDX platform'
  },
  {
    img: Alina_Vardanyan,
    name: 'Alina Vardanian',
    position: 'Content Manager',
    video: 'https://www.youtube.com/embed/IATb_l1vLE4',
    text: 'Alina Vardanian, CINDX Content Manager talks about the team spirit and what she loves about her job'
  },
  {
    img: Bogdan_Fiedur,
    name: 'Bogdan Fiedur',
    position: 'CINDX Advisor',
    video: 'https://www.youtube.com/embed/oC-oTaBId7g',
    text: 'Bogdan Fiedur, CINDX Advisor, explains how the CINDX project differs from other ICO projects'
  },
  {
    img: Jason_King,
    name: 'Jason King',
    position: 'Chief Commercial Officer',
    video: '',
    text: 'Jason King, Chief Commercial Officer, explains what attracts him to CINDX and talks about crucial advantages of the project'
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
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
      <div className="block_6">
        <div className="size">
        <h2 className="header_blocks">Feedback On Our Project</h2>
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
