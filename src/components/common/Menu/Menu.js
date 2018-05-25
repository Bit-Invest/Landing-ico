import React from 'react';

const ROOT_CLASS = 'menu';

const Items = [
  'Product',
  'Token Pre-Sale details',
  'Roadmap',
  'Team',
  'Public docs'
];

export const Menu = props => (
  <div className={ROOT_CLASS}>
    {Items.map((item, index) => (
      <div
        key={index}
        className={`${ROOT_CLASS}__item ${
          props.currentItem === index ? ROOT_CLASS + '__item_underline' : ''
        }`}>
        {item}
      </div>
    ))}
  </div>
);
