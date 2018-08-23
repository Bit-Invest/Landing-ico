import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import menu from '../../images/menu.png';
import arrow_public from '../../images/arrow_public.png';
import {links} from '../../links.js';
import { Join } from '../../links.js';
import './Menu.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

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
            <a target="_blank" href={links.wp} className="itemMini2">{ indexLngObj[lng]['menu#1'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.pr} className="itemMini2">{ indexLngObj[lng]['menu#2'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.op} className="itemMini2">{ indexLngObj[lng]['menu#3'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.fm} className="itemMini2">{ indexLngObj[lng]['menu#4'] }</a>
          </div>
          <div className="show-publicDocs">
            <div className="doc_icon"></div>
            <a target="_blank" href={links.ld} className="itemMini2">{ indexLngObj[lng]['menu#5'] }</a>
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
            <a className="itemMini2">{ indexLngObj[lng]['menu#6'] }</a>
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
          <a onClick={this.openMenu} href="#product" className="itemMini">{ indexLngObj[lng]['menu#7'] }</a>
          <a onClick={this.openMenu} href="#sale_details" className="itemMini">{ indexLngObj[lng]['menu#8'] }</a>
          <a onClick={this.openMenu} href="#team" className="itemMini">{ indexLngObj[lng]['menu#9'] }</a>
          <div onClick={this.openPublicDocs} className="drop-down">
            <a>{ indexLngObj[lng]['menu#10'] }</a>
            <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
          </div>
          {this.renderPublicDocs()}
          <a href={links.mvp} target="_blank" className="itemMini">{ indexLngObj[lng]['menu#11'] }</a>
          <div onClick={this.openLanguage} className="drop-down">
            <a>{ indexLngObj[lng]['menu#6'] }</a>
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
            <a href="#product" className="item">{ indexLngObj[lng]['menu#7'] }</a>
            <a href="#sale_details" className="item">{ indexLngObj[lng]['menu#8'] }</a>
            <a href="#team" className="item">{ indexLngObj[lng]['menu#9'] }</a>
            <div onClick={this.openPublicDocs} className="drop-down">
              <a className="item">{ indexLngObj[lng]['menu#10'] }</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
            </div>
            {this.renderPublicDocs()}
            <a target='_blank' href={links.mvp} className="item">{ indexLngObj[lng]['menu#11'] }</a>
            <Join
              text="Join Pre-Sale"
              className="btn"
            />
            <div onClick={this.openLanguage} className="drop-down">
              <a>{ indexLngObj[lng]['menu#6'] }</a>
              <img className="arrow_public" src={arrow_public} alt={"CINDEX"}/>
            </div>
            {this.renderLanguage()}
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
      </div>
    )
  }
}
