import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hidePopUp, changeUrlPopupVideo } from '../../store/store';
import './PopUp.css';

const ROOT_CLASS = 'showPopUpPage';

class PopUpManager extends React.Component {
  buildRootClass = () => {
    return(
      this.props.state ?
        this.props.state.currentPopUp ?
          ROOT_CLASS : ` ${ROOT_CLASS}_hidden`
        : ` ${ROOT_CLASS}_hidden`
    );
  }

  buildUrlPoup = () => {
    return (
      this.props.state ?
        this.props.state.urlPopUpVideo ?
          this.props.state.urlPopUpVideo : ''
        : ''
    )
  }

  onClickClose = () => {
    this.props.hidePopUp();
    this.props.changeUrlPopupVideo('')
  }

  render(){
    return(
      <div className={this.buildRootClass()} onClick={this.onClickClose}>
        <div className="wrapper-video-popup">
          <div onClick={this.onClickClose} className="close"></div>
          <div className={this.buildUrlPoup() !== 'https://player.vimeo.com/video/286746544' ? 'showPopUp' : 'showAnotherPopUp' }>
            <iframe src={this.buildUrlPoup()}></iframe>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({hidePopUp, changeUrlPopupVideo}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(PopUpManager);

export {connectedContainer as PopUpManager};
