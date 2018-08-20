import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopUp, changeUrlPopupVideo } from '../../store/store';
import block_3_ico_1 from '../../images/block_3_ico_1.png';
import block_3_ico_2 from '../../images/block_3_ico_2.png';
import block_3_ico_3 from '../../images/block_3_ico_3.png';
import {links} from '../../links.js';
import play_button_youtube from '../../media/play_button_youtube.png';
import licensia_1 from '../../media/licensia_1.png';
import licensia_2 from '../../media/licensia_2.png';
import licensia_3 from '../../media/licensia_3.png';
import './TeamLegal.css';

const RigthVideo = (props) => {
  return (
    <div className="right">
      <img
        src={play_button_youtube}
        alt="CINDEX"
        className="play"
        onClick={() => props.video_show('https://www.youtube.com/embed/5Iy_etsH7zo')}
      />
    </div>
  );
};

class TeamLegal extends React.Component {
  showVideoInPopUp = (url) => {
    this.props.changeUrlPopupVideo(url)
    this.props.showPopUp()
  }

  render() {
    const { props } = this;

    return(
      <div className="teamLegal">
        <div className="size">
          <h2 className="header_blocks">And We Have A Great Team and Legal</h2>
          <RigthVideo video_show={this.showVideoInPopUp} />
          <div className="container">
            <div className="left">
              <div className='row'>
                <div className="LC">
                  <img className="img" src={licensia_1} alt="CINDEX"/>
                  <p>Лицензия 1</p>
                </div>
                <div className="LC">
                  <img className="img" src={licensia_2} alt="CINDEX"/>
                  <div>Лицензия 2</div>
                </div>
              </div>
              <div className='row'>
                <div className="LC">
                  <img className="img" src={licensia_3} alt="CINDEX"/>
                  <div>Лицензия 3</div>
                </div>
              </div>
              <div className="dock_block">
                <div className="dock">
                  <div className="row">
                    <a target="_blank" href={links.wp}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                    <a target="_blank" href={links.wp}><span>WHITEPAPER</span></a>
                  </div>
                  <div className="row">
                    <a target="_blank" href={links.pr}><img src={block_3_ico_2} alt={"CINDEX"}/></a>
                    <a target="_blank" href={links.pr}><span>PRESENTATION</span></a>
                  </div>
                  <div className="row">
                    <a target="_blank" href={links.op}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                    <a target="_blank" href={links.op}><span>ONE PAGER</span></a>
                  </div>
                </div>
                <div className="dock">
                  <div className="row">
                    <a target="_blank" href={links.fm}><img src={block_3_ico_3} alt={"CINDEX"}/></a>
                    <a target="_blank" href={links.fm}><span>FINANCIAL  MODEL</span></a>
                  </div>
                  <div className="row">
                    <a target="_blank" href={links.ld}><img src={block_3_ico_1} alt={"CINDEX"}/></a>
                    <a target="_blank" href={links.ld}><span>LEGAL DOCS</span></a>
                  </div>
                </div>
              </div>
            </div>
            <RigthVideo video_show={this.showVideoInPopUp} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(TeamLegal);

export {connectedContainer as TeamLegal};
