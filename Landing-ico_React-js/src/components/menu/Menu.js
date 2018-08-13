import * as React from 'react';
import logo from '../../images/Logo_CINDX.png';
import './Menu.css';

export const Menu = () => (
  <div className="menu">
    <img className="logo" src={logo} alt={"CINDEX"}/>
    <div className="menu-item">
      <a className="item">Product</a>
      <a className="item">Sale Details</a>
      <a className="item">Team</a>
      <a className="item">Public Docs </a>
      <a className="item">Test MVP</a>
      <a className="btn">Join Pre-Sale</a>
      <a className="item">EN</a>
    </div>
    <div className="menu-768px">
      <a className="btn">Join Pre-Sale</a>
      <div className="menu-item-burger">
        Х
      </div>
    </div>
  </div>
)
