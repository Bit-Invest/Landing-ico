import React from 'react';

const ROOT_CLASS = 'menu';

const Items = ['Product', 'Token Pre-Sale details', 'Public docs'];

const Pages = [1, 17, 16];

export const Menu = props => (
  <div className={ROOT_CLASS}>
    {Items.map((item, index) => (
      <div
        key={index}
        page={Pages[index]}
        className={`${ROOT_CLASS}__item ${
          props.currentItem === index ? ROOT_CLASS + '__item_underline' : ''
        }`}>
        {item}
      </div>
    ))}

    <div className="menu__item menu__item_underline">
      <a href="http://192.81.220.26" target="__blank" className="href_noUnder">
        Test MVP
      </a>
    </div>
    <div className="menu__item menu__item_underline">
      <a href="https://my.cindx.io" target="__blank" className="href_noUnder">
        Join Pre-sale
      </a>
    </div>
  </div>
);
