import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hidePopUp } from '../../store/store';
import { switchPopUp } from '../../store/store';
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

  onClickClose = () => {
    this.props.hidePopUp();
  }

  render(){
    return(
      <div className={this.buildRootClass()}>
        <div onClick={this.onClickClose} className="close">X</div>
        <div className="showPopUp"></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({hidePopUp}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(PopUpManager);

export {connectedContainer as PopUpManager};
