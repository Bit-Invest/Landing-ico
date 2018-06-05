import React from 'react';
import * as Scroll from 'react-scroll';

const ROOT_CLASS = 'menu';
let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const Items = ['Product', 'Token Pre-Sale details', 'Public docs'];
const Pages = [1, 17, 16];

export class Menu extends React.Component {
  componentDidMount() {
    /*Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });*/

    scrollSpy.update();
  }

  render() {
    const { props } = this;

    return (
      <div className={ROOT_CLASS}>
        {Items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              scroll.scrollTo(global.HEIGHT * Pages[index]);
            }}
            className={`${ROOT_CLASS}__item ${
              props.currentItem === index ? ROOT_CLASS + '__item_underline' : ''
            }`}>
            {item}
          </div>
        ))}

        <div className="menu__item menu__item_underline">
          <a
            href="http://192.81.220.26"
            target="__blank"
            className="href_noUnder">
            Test MVP
          </a>
        </div>
        <div className="menu__item menu__item_underline">
          <a
            href="https://my.cindx.io"
            target="__blank"
            className="href_noUnder">
            Join Pre-sale
          </a>
        </div>
      </div>
    );
  }
}
