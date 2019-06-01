import * as React from 'react';
import { MailForm } from '@components/mailForm';
import { lng, links } from '../../links'
import indexLngObj from '../../lngs/index';
import SU from '@images/SU.png';
import Adjustments from '@images/CINDX_LP_adjustments.png';
import './main.css';

const ROOT_CLASS = 'mvpBlock';

export class MvpBlock extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
      submitStatus: 4, // 0 - пусто; 1 - не подходит почта; 2 - всё ок отправлено; 3 - отправляется
      submitStatusText: null
    };
  }

  onChange = (e) => {
    let text = e.target.value;

    if(text.length>0){
      this.setState({
        submitStatusText: null,
        submitStatus: 4
      });
    }

    this.setState({
      email: text
    });
  }

  sendSubcribe = () => {
    const { email } = this.state;
    let error = false;
    let status_text = null;

    if(!email){
      error = 0;
      status_text = indexLngObj[lng]['mailForm#1'];
    }

    if(error !== false){
      this.setState({
        submitStatus: error,
        submitStatusText: status_text
      });

      return false;
    } else {
      this.setState({
        submitStatus: 3,
        submitStatusText: indexLngObj[lng]['mailForm#2']
      });
    }

    fetch(`https://cindx.io/subscribe/?email=${email}&loc=en&clickid=default&loc=en&gaid=default`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if(responseJson.status == 1 || responseJson.status == 2) {
          this.setState({
            submitStatus: 1,
            submitStatusText: indexLngObj[lng]['mailForm#3']
          });
        } else if (responseJson.status == 0) {
          this.setState({
            submitStatus: 2,
            submitStatusText: indexLngObj[lng]['mailForm#4']
          });

          setTimeout(()=>{
            window.location.href = `http://mvp.cindx.io/`;
          }, 1000);
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          submitStatus: 3,
          submitStatusText: indexLngObj[lng]['mailForm#5']
        });
      });
  }

  render() {
    const {
      submitStatus,
      submitStatusText
    } = this.state;

    return(
    	<div className={`${ROOT_CLASS}`}>
    		<div className={`${ROOT_CLASS}-titleMain`}>CINDX Live</div>
    		<div className={`${ROOT_CLASS}-container`}>
	    		<div className={`${ROOT_CLASS}-container-two`}>
	    			<div className={`${ROOT_CLASS}-screeImg`}>
	    				<img src={SU} />
	    			</div>
	    			<div className={`${ROOT_CLASS}-formBlock`}>
	    				<div className={`${ROOT_CLASS}-content`}>
	    					<div className={`${ROOT_CLASS}-title`}>We have launched our CINDX platform. Join us!</div>
                <div className={`${ROOT_CLASS}-adjustments`}>
                  <a className="btn" href={links.mvp} target="_blank">Sign Up</a>
		    					<img src={Adjustments} />
		    				</div>
	    				</div>
	    			</div>
	    		</div>
    		</div>
    		{
	      	/*
	      	<div className={ROOT_CLASS} id="top">
	        <div className={`${ROOT_CLASS}__content`}>
	          <div className={`${ROOT_CLASS}__container-1`}>
	            <div className={`${ROOT_CLASS}__cont`}>
	              <div className={`${ROOT_CLASS}__formStarted`}>
	                <input type="text" placeholder="EMAIL" onChange={this.onChange} />
	                <div className="button_send" onClick={this.sendSubcribe} >Get started</div>
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
	        </div>
	      	</div>
	      	*/
	    	}
    	</div>
    );
  }
}

