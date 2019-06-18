import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import menu from '../../images/menu.png';
import arrow_public from '../../images/arrow_public.png';
import {links} from '../../links.js';
import { Join } from '../../links.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showDocPopup } from '../../store/store';
import './Menu.css';
import { lng, list_lngs, ab_val } from '../../links';
import indexLngObj from '../../lngs/index';
import flags from './objFlags'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpened: false,
      publicDocs: false,
      language: false
    }
  }

  openMenu = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  clickPublicDocs = () => {
    this.setState({ publicDocs: !this.state.publicDocs });
  }

  openPublicDocs = () => {
    this.setState({ publicDocs: true });
  }

  closePublicDocs = () => {
    this.setState({ publicDocs: false });
  }

  clickLanguage = () => {
    this.setState({ language: !this.state.language })
  }

  closeLanguage = () => {
    this.setState({ language: false })
  }

  openLanguage = () => {
    this.setState({ language: true })
  }

  openPopup = (e) => {
    if (ab_val === '1') {
      e.preventDefault()
      this.props.showDocPopup('')
    }
  }

  renderPublicDocs = () => {
    let { publicDocs } = this.state;
    if (publicDocs) {
      return (
        <div onMouseLeave={this.closePublicDocs} className={`publicDocs ${lng === 'tr' || lng === 'es' || lng === 'de' || lng === 'ar' ? 'trPublicDocs' : null}`}>
          <div className="show-publicDocs">
            <div className="doc_icon" onClick={this.openPopup}></div>
            <a target="_blank" onClick={this.openPopup} href={links.wp} className="itemMini2">{ indexLngObj[lng]['menu#1'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon" onClick={this.openPopup}></div>
            <a target="_blank" onClick={this.openPopup} href={links.pr} className="itemMini2">{ indexLngObj[lng]['menu#2'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon" onClick={this.openPopup}></div>
            <a target="_blank" onClick={this.openPopup} href={links.op} className="itemMini2">{ indexLngObj[lng]['menu#3'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon" onClick={this.openPopup}></div>
            <a target="_blank" onClick={this.openPopup} href={links.ld} className="itemMini2">{ indexLngObj[lng]['menu#5'] }</a>
          </div>
        </div>
      )
    } else {
      return (<div className="publicDocs-hide"></div>)
    }
  }

  changeLoc = (e) => {
    window.localStorage.setItem('loc', e);
    window.location.reload();
  }

  renderFlag = (lng) => {
    return (
      <div className="menu-flags" style={{ backgroundImage: `url(${flags[lng]})` }}></div>
    )
  } 

  // renderLanguage = (removeLng) => {
  //   const { language } = this.state;
  //   if (language) {
  //     return (
  //       <div onMouseLeave={this.closeLanguage} className="language">
  //         {
  //           (list_lngs.split(' ')).map((e, i) => {
  //             return (
  //               <div key={i} value={e} onClick={()=>this.changeLoc(e)}>
  //                 { e !== removeLng ?
  //                   <div className="show-language">
  //                     {this.renderFlag(e)}
  //                     <a className="itemMini2">{ 
  //                       ({en:'English',
  //                         zn:'简体中文',
  //                         ko:'한국어',
  //                         tr:'Türkçe',
  //                         fr:'Français',
  //                         vi:'Tiếng Việt',
  //                         pt:'Português',
  //                         ja:'日本語',
  //                         ar:'العربية',
  //                         de:'Deutsch',
  //                         es:'Español'
  //                       }[e] || e).toUpperCase() 
  //                     }</a>
  //                   </div> : 
  //                   null 
  //               }
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     )
  //   } else {
  //     return (<div className="publicDocs-hide"></div>)
  //   }
  // }

  renderMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      return (
        <div className="showMenu">
          <a onClick={this.openMenu} href="#product" className="itemMini">{ indexLngObj[lng]['menu#7'] }</a>
          <a onClick={this.openMenu} href="#team" className="itemMini">{ indexLngObj[lng]['menu#9'] }</a>
          <div onClick={this.clickPublicDocs} className="drop-down">
            <a>{ indexLngObj[lng]['menu#10'] }</a>
            <img className="arrow_public" src={arrow_public} alt={"CINDX"}/>
          </div>
          {this.renderPublicDocs()}
          <a href={links.mvp} target="_blank" className="itemMini">{ indexLngObj[lng]['menu#11'] }</a>
          <a className="itemMini" target="_blank" href={links.wp}>White Paper</a>
          <a className="itemMini" target="_blank" href={links.op}>One Pager</a>
          <a className="itemMini" target="_blank" href={links.medium}>Blog</a>
          {
            // <div onClick={this.clickLanguage} className="drop-down">
            //   <a className="menu-lang-flags">{this.renderFlag(lng)}<div className="menu-lang">{ lng.toUpperCase() }</div></a>
            //   <img className="arrow_public" src={arrow_public} alt={"CINDX"}/>
            // </div>
            // {this.renderLanguage(lng)}
          }
        </div>
      )
    } else {
      return (<div className="showMenu-hide"></div>)
    }
  }

  render() {
    return (
      <div className="menu">
        <div className="container-menu">
          <a href="#top"><img className="logo" src={logo} alt={"CINDX"}/></a>
          <div className="menu-item">
            <a href="#product" className="item">{ indexLngObj[lng]['menu#7'] }</a>
            <a href="#team" className="item">{ indexLngObj[lng]['menu#9'] }</a>
            <div
              onMouseLeave={this.closePublicDocs}
              onMouseMove={this.openPublicDocs}
              className="drop-down"
            >
              <a className="item">{ indexLngObj[lng]['menu#10'] }</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDX"}/>
              <div className="publickOnMouseLeave"></div>
              {this.renderPublicDocs()}
            </div>
            <a className="btn" target='_blank' href={links.mvp}>{ indexLngObj[lng]['menu#11'] }</a>
            <a className="btn" target="_blank" href={links.wp}>White Paper</a>
            <a className="btn" target="_blank" href={links.op}>One Pager</a>
            <a className="btn" target="_blank" href={links.medium}>Blog</a>
            {
              // <div
              //   onMouseLeave={this.closeLanguage}
              //   onMouseMove={this.openLanguage}
              //   className="drop-down"
              // >
              //   <a className="menu-lang-flags">{this.renderFlag(lng)}<div className="menu-lang">{ lng.toUpperCase() }</div></a>
              //   <img className="arrow_public" src={arrow_public} alt={"CINDX"}/>
              //   <div className="publickOnMouseLeave"></div>
              //   {this.renderLanguage()}
              // </div>
            }
          </div>
          <div className="menu-768px">
            <a onClick={this.openMenu} className="menu-item-burger">
              <img className="menu-icon" src={menu} alt={"CINDX"}/>
            </a>
            {this.renderMenu()}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showDocPopup}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(Menu);

export {connectedContainer as Menu};
