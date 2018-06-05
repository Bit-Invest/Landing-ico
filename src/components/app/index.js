import React from 'react';
import { Route, Link } from 'react-router-dom';
import ScrollEvent from 'react-onscroll';
import * as Scroll from 'react-scroll';

import { ListContainer } from '../scenes/';
import { HeadScreen } from '@screens/HeadScreen';

const ROOT_CLASS = 'menu';
let _Link = Scroll.Link;
let _Element = Scroll.Element;
let _Events = Scroll.Events;
let _scroll = Scroll.animateScroll;
let _scrollSpy = Scroll.scrollSpy;
const scroll = Scroll.animateScroll;

let scrolling = false;
let fromScroll = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    //globals
    global.WIDTH = window.innerWidth > 1400 ? 1400 : window.innerWidth;
    global.LEFT =
      window.innerWidth > 1400 ? (window.innerWidth - 1400) / 20 : 0;
    global.HEIGHT = window.innerHeight;
  }

  componentWillMount() {
    const { updateDimensions } = this;

    window.addEventListener('resize', updateDimensions);
  }

  componentDidMount() {
    _Events.scrollEvent.register('end', (to, element) => {
      console.log('end');
      setTimeout(() => {
        scrolling = false;
      }, 300);
    });

    _Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    _scrollSpy.update();
  }

  updateDimensions = () => {
    window.location.reload();

    global.WIDTH = window.innerWidth > 1400 ? 1400 : window.innerWidth;
  };

  handleScrollCallback = e => {
    let wheelCour = e.deltaY || e.detail || e.wheelDelta;

    if (scrolling) return false;
    else scrolling = true;

    let newSroll = wheelCour > 0 ? global.HEIGHT : -global.HEIGHT;

    _scroll.scrollMore(newSroll);
    //console.log("A scroll event occurred!", {
    //fromScroll: fromScroll, scrTop, newSroll
    //});
  };

  render() {
    return (
      <div className="App" onWheel={this.handleScrollCallback}>
        <ListContainer />
      </div>
    );
  }
}

export default App;
