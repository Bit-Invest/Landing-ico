import * as React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';
import { peopleImages } from '../../paths';

import playButtonWhite from '../../images/play_button_white.png';
import linkedin_icon_social from '../../images/linkedin_icon_social.png';
import medium_icon_social from '../../images/medium_icon_social.png';

import Collage_partners from '@images/Collage_partners.png';

//styles
import './TeamAdvisersPartners.css';

const teamInfo = [
  {
    img: peopleImages.team.Yuriy_Avdeev,
    name: indexLngObj[lng]['teamAdvisersPartners#4'],
    position: indexLngObj[lng]['teamAdvisersPartners#5'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#6'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#7'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#8'],
    src: 'https://www.linkedin.com/in/yuriyavdeev/',
    m: 'https://medium.com/cindx/cindx-team-yuriy-avdeev-e7a747d4c2e3'
  },
  {
    img: peopleImages.team.Val_Jerdes,
    name: indexLngObj[lng]['teamAdvisersPartners#9'],
    position: indexLngObj[lng]['teamAdvisersPartners#10'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#11'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#12'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#13'],
    src: 'https://www.linkedin.com/in/valjerdes/',
    m: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61'
  },
  {
    img: peopleImages.team.Aleksey,
    name: 'Alexey Korolev',
    position: 'Business development director',
    fackt1: '18 years of experience in marketing and advertising',
    fackt2: '5 years of work in the investment field',
    fackt3: '',
    src: '',
    m: '',
  },
  {
    img: peopleImages.team.Artur_Shamalov,
    name: indexLngObj[lng]['teamAdvisersPartners#19'],
    position: indexLngObj[lng]['teamAdvisersPartners#20'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#21'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#22'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#23'],
    src: 'https://www.linkedin.com/in/artur-shamalov/',
    m: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9'

  },
  {
    img: peopleImages.team.Denis_Eskenazi,
    name: indexLngObj[lng]['teamAdvisersPartners#24'],
    position: indexLngObj[lng]['teamAdvisersPartners#25'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#26'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#27'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#28'],
    src: 'https://ru.linkedin.com/in/denis-eskenazi-03b81726',
    m: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50'
  },
  {
    img: peopleImages.team.Ibraghim_Haniev,
    name: indexLngObj[lng]['teamAdvisersPartners#29'],
    position: indexLngObj[lng]['teamAdvisersPartners#30'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#31'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#32'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#33'],
    src: 'https://www.linkedin.com/in/ibrahimhaniev/',
    m: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba'
  },
  {
    img: peopleImages.team.Sergey_Potehin,
    name: indexLngObj[lng]['teamAdvisersPartners#59_1'],
    position: indexLngObj[lng]['teamAdvisersPartners#60_1'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#61_1'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#62_1'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#63_1'],
    src: '',
    m: 'https://medium.com/cindx/cindx-team-sergey-potekhin-31451dbb6de3',
  },
  {
    img: peopleImages.team.Georg_Brich,
    name: indexLngObj[lng]['teamAdvisersPartners#64_1'],
    position: indexLngObj[lng]['teamAdvisersPartners#65_1'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#66_1'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#67_1'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#68_1'],
    src: 'https://www.linkedin.com/in/brichkovskiy-georgy/',
    m: 'https://medium.com/cindx/cindx-attends-the-binance-meetup-moscow-event-81f41e8c4814',
  },
  {
    img: peopleImages.team.Airat,
    name: indexLngObj[lng]['teamAdvisersPartners#34'],
    position: indexLngObj[lng]['teamAdvisersPartners#35'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#36'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#37'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#38'],
    src: 'https://www.linkedin.com/in/airatshayhulov/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f'
  },
  {
    img: peopleImages.team.Sofja_Pevzner,
    name: indexLngObj[lng]['teamAdvisersPartners#39'],
    position: indexLngObj[lng]['teamAdvisersPartners#40'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#41'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#42'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#43'],
    src: 'https://www.linkedin.com/in/sofja-pevzner-70831963/',
    m: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407'
  },
  {
    img: peopleImages.team.Jelena_Karzetskaja,
    name: indexLngObj[lng]['teamAdvisersPartners#49'],
    position: indexLngObj[lng]['teamAdvisersPartners#50'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#51'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#52'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#53'],
    src: 'https://www.linkedin.com/in/jelena-karzetskaja-28754727/',
    m: 'https://medium.com/cindx/team-jelena-karzetskaja-94e8c4286924'
  },
  {
    img: peopleImages.team.Yuriy_Proshin, // оптимизируй картинку
    name: indexLngObj[lng]['teamAdvisersPartners#69_1'],
    position: indexLngObj[lng]['teamAdvisersPartners#70_1'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#71_1'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#72_1'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#73_1'],
    src: 'https://www.linkedin.com/in/yuri-proshin-220490/',
    m: 'https://medium.com/cindx/cindx-team-yuri-proshin-2ce48ec2d75a'
  },
  {
    img: peopleImages.team.Aleksandr_Bogdanov, // оптимизируй картинку
    name: indexLngObj[lng]['teamAdvisersPartners#79_1'],
    position: indexLngObj[lng]['teamAdvisersPartners#80_1'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#81_1'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#82_1'],
    fackt3: indexLngObj[lng]['teamAdvisersPartners#83_1'],
    src: '',
    m: 'https://medium.com/cindx/cindx-team-alex-bogdan-5a292e80a608a'
  },
];

const advisers = [
  {
    img: peopleImages.advisers.Austin_Kimm,
    video: 'https://www.youtube.com/embed/pkBoVl7Brds',
    name: indexLngObj[lng]['teamAdvisersPartners#67'],
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    m: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    position: indexLngObj[lng]['teamAdvisersPartners#68'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#69'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#70'],
    linkedin: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#71'],
      indexLngObj[lng]['teamAdvisersPartners#72'],
      indexLngObj[lng]['teamAdvisersPartners#73']
    ]
  },
  {
    img: peopleImages.advisers.Keith_Teare,
    video: 'https://www.youtube.com/embed/1JaUqtqCQ5w',
    src: 'https://linkedin.com/in/kteare',
    m: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    name: indexLngObj[lng]['teamAdvisersPartners#59'],
    position: indexLngObj[lng]['teamAdvisersPartners#60'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#61'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#62'],
    linkedin: 'https://linkedin.com/in/kteare',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#63'],
      indexLngObj[lng]['teamAdvisersPartners#64'],
      indexLngObj[lng]['teamAdvisersPartners#65'],
      indexLngObj[lng]['teamAdvisersPartners#66']
    ]
  },
  {
    img: peopleImages.advisers.Amarpreet_Singh,
    video: 'https://www.youtube.com/embed/VKNEfob9sGA',
    name: indexLngObj[lng]['teamAdvisersPartners#82'],
    src: 'https://www.linkedin.com/in/amarpreetsingh2/',
    m: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    position: indexLngObj[lng]['teamAdvisersPartners#83'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#84'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#85'],
    linkedin: 'https://www.linkedin.com/in/amarpreetsingh2/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#86'],
      indexLngObj[lng]['teamAdvisersPartners#87'],
      indexLngObj[lng]['teamAdvisersPartners#88'],
      indexLngObj[lng]['teamAdvisersPartners#89'],
      indexLngObj[lng]['teamAdvisersPartners#90']
    ]
  },
  {
    img: peopleImages.advisers.Philip_Staehelin,
    video: 'https://www.youtube.com/embed/nN76RkbejGc',
    name: indexLngObj[lng]['teamAdvisersPartners#74'],
    src: 'https://www.linkedin.com/in/staehelin/',
    m: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    position: indexLngObj[lng]['teamAdvisersPartners#75'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#76'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#77'],
    linkedin: 'https://www.linkedin.com/in/staehelin/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#78'],
      indexLngObj[lng]['teamAdvisersPartners#79'],
      indexLngObj[lng]['teamAdvisersPartners#80'],
      indexLngObj[lng]['teamAdvisersPartners#81']
    ]
  },
  {
    img: peopleImages.advisers.Jason_King,
    video: 'https://www.youtube.com/embed/MHQzECP7izc',
    name: indexLngObj[lng]['teamAdvisersPartners#149'],
    src: 'https://www.linkedin.com/in/jasonking/',
    m: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    position: indexLngObj[lng]['teamAdvisersPartners#150'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#151'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#152'],
    linkedin: 'https://www.linkedin.com/in/jasonking/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#153'],
      indexLngObj[lng]['teamAdvisersPartners#154'],
      indexLngObj[lng]['teamAdvisersPartners#155'],
      indexLngObj[lng]['teamAdvisersPartners#156']
    ]
  },
  {
    img: peopleImages.advisers.Bogdan_Fiedur,
    video: 'https://www.youtube.com/embed/4kXgu60guic',
    name: indexLngObj[lng]['teamAdvisersPartners#125'],
    src: 'https://www.linkedin.com/in/bogdanfiedur/',
    m: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    position: indexLngObj[lng]['teamAdvisersPartners#126'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#127'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#128'],
    linkedin: 'https://www.linkedin.com/in/bogdanfiedur/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#129'],
      indexLngObj[lng]['teamAdvisersPartners#130'],
      indexLngObj[lng]['teamAdvisersPartners#131'],
      indexLngObj[lng]['teamAdvisersPartners#132']
    ]
  },
  // {
  //   img: peopleImages.advisers.Graham_Doggart,
  //   video: 'https://www.youtube.com/embed/uXTA_QLympE',
  //   name: indexLngObj[lng]['teamAdvisersPartners#133'],
  //   src: 'https://www.linkedin.com/in/grahamdoggart/',
  //   m: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
  //   position: indexLngObj[lng]['teamAdvisersPartners#134'],
  //   fackt1: indexLngObj[lng]['teamAdvisersPartners#135'],
  //   fackt2: indexLngObj[lng]['teamAdvisersPartners#136'],
  //   linkedin: 'https://www.linkedin.com/in/grahamdoggart/',
  //   text: [
  //     indexLngObj[lng]['teamAdvisersPartners#137'],
  //     indexLngObj[lng]['teamAdvisersPartners#138'],
  //     indexLngObj[lng]['teamAdvisersPartners#139'],
  //     indexLngObj[lng]['teamAdvisersPartners#140'],
  //   ]
  // },
  // {
  //   img: peopleImages.advisers.Sadie_Hutton,
  //   video: 'https://www.youtube.com/embed/D4ln5WpZh-Y',
  //   name: indexLngObj[lng]['teamAdvisersPartners#141'],
  //   src: 'https://www.linkedin.com/in/sadie-hutton/',
  //   m: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
  //   position: indexLngObj[lng]['teamAdvisersPartners#142'],
  //   fackt1: indexLngObj[lng]['teamAdvisersPartners#143'],
  //   fackt2: indexLngObj[lng]['teamAdvisersPartners#144'],
  //   linkedin: 'https://www.linkedin.com/in/sadie-hutton/',
  //   text: [
  //     indexLngObj[lng]['teamAdvisersPartners#145'],
  //     indexLngObj[lng]['teamAdvisersPartners#146'],
  //     indexLngObj[lng]['teamAdvisersPartners#147'],
  //     indexLngObj[lng]['teamAdvisersPartners#148']
  //   ]
  // },
  {
    img: peopleImages.advisers.Leonard_Grayver,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#164'],
    src: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    m: 'https://medium.com/cindx/advisers-leonard-grayver-4eb7657268b8',
    position: indexLngObj[lng]['teamAdvisersPartners#165'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#166'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#167'],
    linkedin: 'https://www.linkedin.com/in/leonardgrayver/?locale=ru_RU',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#168'],
      indexLngObj[lng]['teamAdvisersPartners#169'],
      indexLngObj[lng]['teamAdvisersPartners#170']
    ]
  },
  {
    img: peopleImages.advisers.Lincoln,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#178'],
    src: 'https://www.linkedin.com/in/lincolnteo/',
    m: '',
    position: indexLngObj[lng]['teamAdvisersPartners#179'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#180'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#181'],
    linkedin: 'https://www.linkedin.com/in/lincolnteo/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#182'],
      indexLngObj[lng]['teamAdvisersPartners#183'],
      indexLngObj[lng]['teamAdvisersPartners#184'],
      indexLngObj[lng]['teamAdvisersPartners#185'],
      indexLngObj[lng]['teamAdvisersPartners#186']
    ]
  },
  {
    img: peopleImages.advisers.Reinhard_Berger,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#187'],
    src: 'https://www.linkedin.com/in/reinhard-berger-90810613/',
    m: '',
    position: indexLngObj[lng]['teamAdvisersPartners#188'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#189'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#190'],
    linkedin: 'https://www.linkedin.com/in/reinhard-berger-90810613/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#191'],
      indexLngObj[lng]['teamAdvisersPartners#192'],
      indexLngObj[lng]['teamAdvisersPartners#193'],
      indexLngObj[lng]['teamAdvisersPartners#194']
    ]
  },
  {
    img: peopleImages.advisers.William_Zhu,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#100'],
    src: 'https://www.linkedin.com/in/高峰-朱-196741173',
    m: '',
    position: indexLngObj[lng]['teamAdvisersPartners#101'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#102'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#103'],
    linkedin: 'https://www.linkedin.com/in/高峰-朱-196741173',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#104'],
      indexLngObj[lng]['teamAdvisersPartners#105'],
      indexLngObj[lng]['teamAdvisersPartners#106'],
      indexLngObj[lng]['teamAdvisersPartners#107'],
      indexLngObj[lng]['teamAdvisersPartners#108'],
      indexLngObj[lng]['teamAdvisersPartners#109'],
      indexLngObj[lng]['teamAdvisersPartners#110'],
    ]
  },
  {
    img: peopleImages.advisers.Kosol_Saisanit,
    video: '',
    name: indexLngObj[lng]['teamAdvisersPartners#171'],
    src: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    m: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    position: indexLngObj[lng]['teamAdvisersPartners#172'],
    fackt1: indexLngObj[lng]['teamAdvisersPartners#173'],
    fackt2: indexLngObj[lng]['teamAdvisersPartners#174'],
    linkedin: 'https://www.linkedin.com/in/austin-kimm-486b5a22/',
    text: [
      indexLngObj[lng]['teamAdvisersPartners#175'],
      indexLngObj[lng]['teamAdvisersPartners#176'],
      indexLngObj[lng]['teamAdvisersPartners#177']
    ]
  },
];


/*
Lincoln
Reinhard_Berger
*/


class TeamAdvisersPartners extends React.Component {
  mapTeam = () => {
    return teamInfo.map((el, i) => {
      return (
        <div key={i} className="item">
          <div className="img" style={{
            backgroundImage: `url(${el.img})`,
          }}></div>
          <h3>{el.name}</h3>
          <p className="position">{el.position}</p>
          <hr />
          <p>{el.fackt1}</p>
          <p>{el.fackt2}</p>
          <p>{el.fackt3}</p>
          <div className="block-soc-icon">
            <a target="_blank" style={{ display: el.src ? 'block' : 'none' }} href={el.src}>
              <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
            </a>
            <a target="_blank" style={{ display : el.m ? 'block' : 'none' }} href={el.m}>
              <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
            </a>
          </div>
        </div>
      );
    })
  }

  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  mapAdvisers = () => {
    return advisers.map((el, i) => {
      return (
        <div key={i}>
          <div className="left_content">
            <div className="ts_content">
              <div className="icon_content">
                <img className="icon-face" src={el.img} alt={"CINDX"}/>
                <div onClick={() => this.showVideoInPopUp(el.video)}>
                  <img
                    className="playButtonWhite"
                    style={{display: el.video ? 'block' : 'none'}}
                    src={playButtonWhite}
                    alt={"CINDX"}
                  />
                </div>
              </div>
              <div className="name_content">{el.name}</div>
              <hr/>
              <div className="text_content">
                <p>{el.position}</p>
                <p>{el.fackt1}</p>
                <p>{el.fackt2}</p>
              </div>
              <div className="block-soc-icon">
                <a target="_blank"  style={{ display : el.linkedin ? 'block' : 'none' }} href={el.linkedin}>
                  <img className="soc-icon" src={linkedin_icon_social} alt="CINDX"/>
                </a>
                <a target="_blank"  style={{ display : el.m ? 'block' : 'none' }} href={el.m}>
                  <img className="soc-icon" src={medium_icon_social} alt="CINDX"/>
                </a>
              </div>
            </div>
          </div>
          <div className="right_content">
            <div className="ts_content">
              {el.text.map((el, i)=><p key={i} className="right_content-text">{el}</p>)}
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    const settingsAdvisers = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="block_8" id="team">
        <div className="size">
          <div className="team">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#1'] }</h2>
            <div className="teamArrayRelative block_arrow_relative">
              <div className="teamArray settings">
                {this.mapTeam()}
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="advisers">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#2'] }</h2>
            <div className="block_arrow_relative">
              <div className="settings2_1">
                <Slider {...settingsAdvisers}>
                  {this.mapAdvisers()}
                </Slider>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="ourPartners">
            <h2 className="header_blocks">{ indexLngObj[lng]['teamAdvisersPartners#3'] }</h2>
            <div className="imageForPartners_parent">
              <img alt="Our parners" src={Collage_partners} className="imageForPartners" />
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
  connect(null, mapDispatchToProps)(TeamAdvisersPartners)

export {connectedContainer as TeamAdvisersPartners}
