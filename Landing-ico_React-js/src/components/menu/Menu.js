import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import menu from '../../images/menu.png';
import arrow_public from '../../images/arrow_public.png';
import {links} from '../../links.js';
import { Join } from '../../links.js';
import github_icon from '../../media/github_icon.png';
import reddit_icon from '../../media/reddit_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';
import instagram_icon from '../../media/instagram_icon.png';
import telegram_icon_white from '../../media/telegram_icon_white.png';
import './Menu.css';

export class Menu extends React.Component {
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

  renderPublicDocs = () => {
    const { publicDocs } = this.state;
    if (publicDocs) {
      return (
        <div onMouseLeave={this.closePublicDocs} className="publicDocs">
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.wp} className="itemMini2">WHITEPAPER</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.pr} className="itemMini2">PRESENTATION</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.op} className="itemMini2">ONE PAGER</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.fm} className="itemMini2">FINANCIAL MODEL</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.ld} className="itemMini2">LEGAL DOCS</a>
          </div>
        </div>
      )
    } else {
      return (<div className="publicDocs-hide"></div>)
    }
  }

  renderLanguage = () => {
    const { language } = this.state;
    if (language) {
      return (
        <div onMouseLeave={this.closeLanguage} className="language">
          <div className="show-language">
            <a className="itemMini2">EN</a>
          </div>
        </div>
      )
    } else {
      return (<div className="publicDocs-hide"></div>)
    }
  }

  renderMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      return (
        <div className="showMenu">
          <Join
            text="Join Token Pre-Sale"
            className="itemMini joinpresale"
          />
          <a onClick={this.openMenu} href="#product" className="itemMini">Product</a>
          <a onClick={this.openMenu} href="#sale_details" className="itemMini">Sale Details</a>
          <a onClick={this.openMenu} href="#team" className="itemMini">Team</a>
          <div onClick={this.clickPublicDocs} className="drop-down">
            <a>Public Docs </a>
            <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
          </div>
          {this.renderPublicDocs()}
          <a href={links.mvp} target="_blank" className="itemMini">Test MVP</a>
          <div onClick={this.clickLanguage} className="drop-down">
            <a>EN</a>
            <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
          </div>
          {this.renderLanguage()}
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
          <a href="#top"><img className="logo" src={logo} alt={"CINDEX"}/></a>
          <div className="menu-item">
            <a href="#product" className="item">Product</a>
            <a href="#sale_details" className="item">Sale Details</a>
            <a href="#team" className="item">Team</a>
            <div
              onMouseLeave={this.closePublicDocs}
              onMouseMove={this.openPublicDocs}
              className="drop-down"
            >
              <a className="item">Public Docs</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
              <div className="publickOnMouseLeave"></div>
              {this.renderPublicDocs()}
            </div>
            <a target='_blank' href={links.mvp} className="item">Test MVP</a>
            <Join
              text="Join Pre-Sale"
              className="btn"
            />
            <div
              onMouseLeave={this.closeLanguage}
              onMouseMove={this.openLanguage}
              className="drop-down"
            >
              <a>EN</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
              <div className="publickOnMouseLeave"></div>
              {this.renderLanguage()}
            </div>
          </div>
          <div className="menu-768px">
             <Join
              text="Join Pre-Sale"
              className="btn"
            />
            <a onClick={this.openMenu} className="menu-item-burger">
              <img className="menu-icon" src={menu} alt={"CINDEX"}/>
            </a>
            {this.renderMenu()}
          </div>
        </div>
        <div className='fixedSocIcon'>
          <a target="_blank" href="https://www.github.com/Bit-Invest/Cindx-frontend">
            <img className="img" src={github_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://www.reddit.com/r/cindx/">
            <img className="img" src={reddit_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://twitter.com/CINDXPlatform">
            <img className="img" src={twitter_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://www.facebook.com/cindx.io/">
            <img className="img" src={facebook_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://medium.com/cindx">
            <img className="img" src={medium_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/cindx/">
            <img className="img" src={linkedin_icon} alt="CINDX"/>
          </a>
          <a target="_blank" href="https://t.me/cindx_official">
            <img className="img_2" src={telegram_icon_white} alt="CINDX"/>
          </a>
        </div>
      </div>
    )
  }
}
