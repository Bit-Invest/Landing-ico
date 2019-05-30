import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo, showDocPopup } from '../../store/store';
import {links} from '../../links.js';
import play_button_youtube from '../../media/play_button_youtube.png';
import licensia_1 from '../../media/licensia_1.png';
import licensia_2 from '../../media/licensia_2.png';
import licensia_3 from '../../media/licensia_3.png';
import './TeamLegal.css';
import { lng, ab_val } from '../../links'
import indexLngObj from '../../lngs/index'

const RigthVideo = (props) => {
  return (
    <div className="right" onClick={() => props.video_show('https://www.youtube.com/embed/5Iy_etsH7zo')}>
      <img src={play_button_youtube} />
    </div>
  );
};

class TeamLegal extends React.Component {
  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  openPopup = (e) => {
    if (ab_val === '1') {
      e.preventDefault()
      this.props.showDocPopup('')
    }
  }

  render() {
    const { props } = this;

    return(
      <div className="teamLegal" id="exitAnimate">
        {/*<div className="size">
          <h2 className="header_blocks">
            { indexLngObj[lng]['teamLegal#1'] } <br/> { indexLngObj[lng]['teamLegal#2'] }
          </h2>
          <div className="container">
            <div className="left">
              <a className="LC" target="_blank" href="https://drive.google.com/open?id=1nulb7NnAQJJHGF09v9VdZC5tUQJPOV4u">
                <img className="img" src={licensia_1} alt="CINDEX"/>
                <p>{ indexLngObj[lng]['teamLegal#3'] }</p>
              </a>
              <a className="LC" target="_blank" href="https://drive.google.com/open?id=1VvZSFwaR_LVJZBRp_v8GZ6w5erbDr1VF">
                <img className="img" src={licensia_2} alt="CINDEX"/>
                <p>{ indexLngObj[lng]['teamLegal#4'] }</p>
              </a>
              <a className="LC" target="_blank" href="https://drive.google.com/open?id=1yNU430cKV_3wsGBkBDxqI1DhXVnqdOLM">
                <img className="img" src={licensia_3} alt="CINDEX"/>
                <p>{ indexLngObj[lng]['teamLegal#5'] }</p>
              </a>
              { { ab_val !== '1' ?
                <div className="dock_block">
                  <div className="dock">
                    <div className="row">
                      <a target="_blank" onClick={this.openPopup} href={links.wp}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                      <a target="_blank" onClick={this.openPopup} href={links.wp}><span>{ indexLngObj[lng]['teamLegal#6'] }</span></a>
                    </div>
                    <div className="row">
                      <a target="_blank" onClick={this.openPopup} href={links.pr}><img src={block_3_ico_2} alt={"CINDEX"}/></a>
                      <a target="_blank" onClick={this.openPopup} href={links.pr}><span>{ indexLngObj[lng]['teamLegal#7'] }</span></a>
                    </div>
                    <div className="row">
                      <a target="_blank" onClick={this.openPopup} href={links.op}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                      <a target="_blank" onClick={this.openPopup} href={links.op}><span>{ indexLngObj[lng]['teamLegal#8'] }</span></a>
                    </div>
                  </div>
                  <div className="dock">
                    <div className="row">
                      <a target="_blank" onClick={this.openPopup} href={links.fm}><img src={block_3_ico_3} alt={"CINDEX"}/></a>
                      <a target="_blank" onClick={this.openPopup} href={links.fm}><span>{ indexLngObj[lng]['teamLegal#9'] }</span></a>
                    </div>
                    <div className="row">
                      <a target="_blank" onClick={this.openPopup} href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                      <a target="_blank" onClick={this.openPopup} href={links.ld}><span>{ indexLngObj[lng]['teamLegal#10'] }</span></a>
                    </div>
                  </div>
                </div> :
                null
              } }
            </div>
            <RigthVideo video_show={this.showVideoInPopUp} />
          </div>
        </div>*/}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo, showDocPopup}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(TeamLegal);

export {connectedContainer as TeamLegal};
