import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import Slider from "react-slick";
import { peopleImages } from '../../paths';
import { lng } from '../../links.js';
import indexLngObj from '../../lngs/index';

import './feedbackProject.css';

const feedbackOnOurProject = [
  {
    img: peopleImages.feedback.Keith_Teare,
    name: indexLngObj[lng]['feedbackProject#28'],
    position: indexLngObj[lng]['feedbackProject#29'],
    video: 'https://www.youtube.com/embed/1JaUqtqCQ5w',
    text: indexLngObj[lng]['feedbackProject#30'],
    text2: indexLngObj[lng]['feedbackProject#32'],
  },
  {
    img: peopleImages.feedback.Austin_Kimm,
    name: indexLngObj[lng]['feedbackProject#18'],
    position: indexLngObj[lng]['feedbackProject#19'],
    video: 'https://www.youtube.com/embed/pkBoVl7Brds',
    text: indexLngObj[lng]['feedbackProject#20'],
    text2: indexLngObj[lng]['feedbackProject#22'],
  },
  {
    img: peopleImages.feedback.Val_Jerdes,
    name: indexLngObj[lng]['feedbackProject#2'],
    position: indexLngObj[lng]['feedbackProject#3'],
    video: 'https://www.youtube.com/embed/H6hSOnoyFTY',
    text: indexLngObj[lng]['feedbackProject#4'],
     text2: indexLngObj[lng]['feedbackProject#6'],
  },
  {
    img: peopleImages.feedback.Amarpreet_Singh,
    name: indexLngObj[lng]['feedbackProject#23'],
    position: indexLngObj[lng]['feedbackProject#24'],
    video: 'https://www.youtube.com/embed/VKNEfob9sGA',
    text: indexLngObj[lng]['feedbackProject#25'],
    text2: indexLngObj[lng]['feedbackProject#27'],
  },
  {
    img: peopleImages.feedback.Philip_Staehelin,
    name: indexLngObj[lng]['feedbackProject#10'],
    position: indexLngObj[lng]['feedbackProject#11'],
    video: 'https://www.youtube.com/embed/nN76RkbejGc',
    text: indexLngObj[lng]['feedbackProject#12'],
    text2: indexLngObj[lng]['feedbackProject#14'],
  },
  {
    img: peopleImages.feedback.Jason_King,
    name: indexLngObj[lng]['feedbackProject#54'],
    position: indexLngObj[lng]['feedbackProject#55'],
    video: 'https://www.youtube.com/embed/MHQzECP7izc',
    text: indexLngObj[lng]['feedbackProject#56'],
    text2: indexLngObj[lng]['feedbackProject#58'],
  },
  {
    img: peopleImages.feedback.Bogdan_Fiedur,
    name: indexLngObj[lng]['feedbackProject#49'],
    position: indexLngObj[lng]['feedbackProject#50'],
    video: 'https://www.youtube.com/embed/4kXgu60guic',
    text: indexLngObj[lng]['feedbackProject#51'],
    text2: indexLngObj[lng]['feedbackProject#53'],
  },
  // {
  //   img: peopleImages.feedback.Graham_Doggart,
  //   name: indexLngObj[lng]['feedbackProject#41'],
  //   position: indexLngObj[lng]['feedbackProject#42'],
  //   video: 'https://www.youtube.com/embed/uXTA_QLympE',
  //   text: indexLngObj[lng]['feedbackProject#43'],
  //   text2: indexLngObj[lng]['feedbackProject#45'],
  // },
  // {
  //   img: peopleImages.feedback.Sadie_Hutton,
  //   name: indexLngObj[lng]['feedbackProject#36'],
  //   position: indexLngObj[lng]['feedbackProject#37'],
  //   video: 'https://www.youtube.com/embed/D4ln5WpZh-Y',
  //   text: indexLngObj[lng]['feedbackProject#38'],
  //   text2: indexLngObj[lng]['feedbackProject#40'],
  // },
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
                <div className="playButtonWhite" style={{display: el.video ? 'block' : 'none'}}>{indexLngObj[lng]['feedbackProject#_1']}</div>
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
              <span>{el.text}</span>
              <span className="citaty">{el.text2}</span>
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
