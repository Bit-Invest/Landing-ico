import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideDocPopUp } from '../../store/store';
import { Input } from '@components/input';
import { links, getGAID, lng } from '../../links'
import indexLngObj from '../../lngs/index'
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
    
        fetch(`https://cindx.io/subscribe/?email=${email}&loc=${lng}2&clickid=${links.clickid}&gaid=${links.gaid()}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === 1 || responseJson.status === 2) {
                    console.log('status 1 or 2', responseJson)
                    this.setState({
                        submitStatus: 1,
                        submitStatusText: 'Already was or is not valid, try again'
                    });
                } else if (responseJson.status === 0) {
                    console.log('status 0', responseJson)
                    this.setState({
                        submitStatus: 2,
                        submitStatusText: 'Your email has been sent successfully'
                    });
                    
                    setTimeout(()=> {
                        this.onClickClose()
                    }, 1000);
                }
            })
            .catch((error) => {
                this.setState({
                    submitStatus: 3,
                    submitStatusText: 'an error occurred, try again'
                });
            });
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
                    <form 
                        className="wrapper-docPopup"
                        onSubmit = {
                            (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.sendSubcribe();
                            }
                        }
                    >
                        <div className="disc-text">
                            { indexLngObj[lng]['docPopup#1'] }
                        </div>
                        <div className={`${ROOT_CLASS}__input ${ (submitStatus === 0 || submitStatus === 1) ? "errorRed" : null }`}>
                            <Input
                                placeholder={ indexLngObj[lng]['docPopup#2'] }
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <button className="disc-button" type="submit" onClick={this.sendSubcribe}>
                            { indexLngObj[lng]['docPopup#3'] }
                        </button>
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
                    </form>
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