import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import menu from '../../images/menu.png';
import doc_icon from '../../images/doc_icon.png';
import './Menu.css';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpened: false,
      publicDocs: false
    }
  }

  openPublicDocs = () => {
    this.setState({ publicDocs: !this.state.publicDocs });
    console.log(this.state.publicDocs);
  }

  renderPublicDocs = () => {
    const { publicDocs } = this.state;
    if (publicDocs) {
      return (
        <div className="publicDocs">
          <div>
            <img className="doc_icon" src={doc_icon} alt={"CINDEX"}/>
            <a className="itemMini">WHITEPAPER</a>
          </div>
          <div>
            <img className="doc_icon" src={doc_icon} alt={"CINDEX"}/>
            <a className="itemMini">PRESENTATION</a>
          </div>
          <div>
            <img className="doc_icon" src={doc_icon} alt={"CINDEX"}/>
            <a className="itemMini">ONE PAGER</a>
          </div>
          <div>
            <img className="doc_icon" src={doc_icon} alt={"CINDEX"}/>
            <a className="itemMini">FINANCIAL MODEL</a>
          </div>
          <div>
            <img className="doc_icon" src={doc_icon} alt={"CINDEX"}/>
            <a className="itemMini">LEGAL DOCS</a>
          </div>
        </div>
      )
    } else {
      return (<div className="publicDocs-hide"></div>)
    }
  }

  openMenu = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  renderMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      return (
        <div className="showMenu">
          <a className="itemMini">Product</a>
          <a className="itemMini">Sale Details</a>
          <a className="itemMini">Team</a>
          <a onClick={this.openPublicDocs} className="itemMini">Public Docs </a>
          {this.renderPublicDocs()}
          <a className="itemMini">Test MVP</a>
          <a className="itemMini">EN</a>
        </div>
      )
    } else {
      return (<div className="showMenu-hide"></div>)
    }
  }

  render() {
    return (
      <div className="menu">
        <img className="logo" src={logo} alt={"CINDEX"}/>
        <div className="menu-item">
          <a className="item">Product</a>
          <a className="item">Sale Details</a>
          <a className="item">Team</a>
          <a onClick={this.openPublicDocs} className="item">Public Docs </a>
          {this.renderPublicDocs()}
          <a className="item">Test MVP</a>
          <a className="btn">Join Pre-Sale</a>
          <a className="item">EN</a>
        </div>
        <div className="menu-768px">
          <a className="btn">Join Pre-Sale</a>
          <a onClick={this.openMenu} className="menu-item-burger">
            <img className="menu-icon" src={menu} alt={"CINDEX"}/>
          </a>
          {this.renderMenu()}
        </div>
      </div>
    )
  }
}
