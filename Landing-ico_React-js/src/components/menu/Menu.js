import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import menu from '../../images/menu.png';
import arrow_public from '../../images/arrow_public.png';
import {links} from '../../links.js';
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

  openPublicDocs = () => {
    this.setState({ publicDocs: !this.state.publicDocs });
    console.log('ok');
  }

  openLanguage = () => {
    this.setState({ language: !this.state.language })
  }

  renderPublicDocs = () => {
    const { publicDocs } = this.state;
    if (publicDocs) {
      return (
        <div className="publicDocs">
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
        <div className="language">
          <div className="show-language">
            <a className="itemMini2">ER</a>
          </div>
          <div className="show-language">
            <a className="itemMini2">FR</a>
          </div>
          <div className="show-language">
            <a className="itemMini2">RU</a>
          </div>
          <div className="show-language">
            <a className="itemMini2">PL</a>
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
          <a href="#product" className="itemMini">Product</a>
          <a className="itemMini">Sale Details</a>
          <a className="itemMini">Team</a>
          <div onClick={this.openPublicDocs} className="drop-down">
            <a>Public Docs </a>
            <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
          </div>
          {this.renderPublicDocs()}
          <a className="itemMini">Test MVP</a>
          <div onClick={this.openLanguage} className="drop-down">
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
          <img className="logo" src={logo} alt={"CINDEX"}/>
          <div className="menu-item">
            <a href="#product" className="item">Product</a>
            <a className="item">Sale Details</a>
            <a className="item">Team</a>
            <div onClick={this.openPublicDocs} className="drop-down">
              <a className="item">Public Docs</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
            </div>
            {this.renderPublicDocs()}
            <a target='_blank' href={links.mvp} className="item">Test MVP</a>
            <a target='_blank' href={links.joinpresale} className="btn">Join Pre-Sale</a>
            <div onClick={this.openLanguage} className="drop-down">
              <a>EN</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
            </div>
            {this.renderLanguage()}
          </div>
          <div className="menu-768px">
            <a target="_blank" href={links.joinpresale} className="btn">Join Pre-Sale</a>
            <a onClick={this.openMenu} className="menu-item-burger">
              <img className="menu-icon" src={menu} alt={"CINDEX"}/>
            </a>
            {this.renderMenu()}
          </div>
        </div>
      </div>
    )
  }
}
