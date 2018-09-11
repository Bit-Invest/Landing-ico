import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideDocPopUp } from '../../store/store';
import { Input } from '@components/input';
import './DocPopup.css'

const ROOT_CLASS = 'showDocPopUp';

class DocPopup extends Component {
    state = {
        submitStatus: 4,
        email: '',
        submitStatusText: null
    }

    onChange = (e) => {
        const text = e.target.value;
    
        if (text.length > 0) {
            this.setState({
                submitStatus: 4
            })
        }

        this.setState({
            email: text
        })
      }

    buildRootClass = () => {
        return(
            this.props.state ?
            this.props.state.docPopUp ?
                ROOT_CLASS : ` ${ROOT_CLASS}_hidden`
            : ` ${ROOT_CLASS}_hidden`
        );
    }

    sendSubcribe = () => {
        const { email } = this.state
        let error = false
        let status_text = null
    
        if (!email) {
            error = 0
            status_text = 'Wrong email'
        }
    
        if (error !== false) {
            this.setState({
                submitStatus: error,
                submitStatusText: status_text
            })
        
            return false
        } else {
            this.setState({
                submitStatus: 3,
                submitStatusText: 'sending ..'
            })
        }
    
        // fetch(`https://cindx.io/subscribe/?email=${email}&loc=${lng}&clickid=${links.clickid}&loc=en&gaid=${links.gaid()}`)
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     console.log(responseJson)
        //     if(responseJson.status == 1 || responseJson.status == 2) {
        //       this.setState({
        //         submitStatus: 1,
        //         submitStatusText: indexLngObj[lng]['mailForm#3']
        //       });
        //     } else if (responseJson.status == 0) {
        //       this.setState({
        //         submitStatus: 2,
        //         submitStatusText: indexLngObj[lng]['mailForm#4']
        //       });
    
        //       setTimeout(()=>{
        //         window.location.href = `${links.joinpresale}&gaid=${getGAID()}&mail=${email}&lang=${lng}`;
        //       }, 1000);
        //     }
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //     this.setState({
        //       submitStatus: 3,
        //       submitStatusText: indexLngObj[lng]['mailForm#5']
        //     });
        //   });
      }

    onClickClose = () => {
        this.props.hideDocPopUp();
        this.setState({
            submitStatus: 4,
            email: '',
            submitStatusText: null
        })
    }

    render() {
        const { email, submitStatus, submitStatusText } = this.state;
        return (
            <div className={`${this.buildRootClass()}`}>
                <div className="wrapper-close-block" onClick={this.onClickClose}></div>
                <div className="docPopup-content">
                    <div onClick={this.onClickClose} className="disc-close"></div>
                    <div className="wrapper-docPopup">
                        <div className="disc-text">
                            Want to get all documents on Your mail in 2 seconds?
                        </div>
                        <div className={`${ROOT_CLASS}__input ${ (submitStatus === 0 || submitStatus === 1) ? "errorRed" : null }`}>
                            <Input
                                placeholder='Enter Your Email'
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="disc-button" onClick={this.sendSubcribe}>
                            Send me docs
                        </div>
                        {
                            submitStatus !== 4 ?
                            <div
                                className={`${ROOT_CLASS}__textStatus ${
                                (submitStatus === 0 || submitStatus ===1) ? "error" :
                                    (submitStatus === 3) ? "loading" :
                                    (submitStatus === 2) ? "success" : null
                                }
                                `}>
                                {submitStatusText}
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({hideDocPopUp}, dispatch);

const connectedContainer =
    connect(mapStateToProps, mapDispatchToProps)(DocPopup);

export {connectedContainer as DocPopup};