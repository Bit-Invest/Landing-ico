import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ListContainer } from '../scenes/';
import { HeadScreen } from '@screens/HeadScreen';

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

  updateDimensions = () => {
    global.WIDTH = window.innerWidth > 1400 ? 1400 : window.innerWidth;
  };

  render() {
    return (
      <div className="App">
        <ListContainer />
      </div>
    );
  }
}

export default App;
