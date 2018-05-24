import React from 'react';
import { Menu } from './Menu';

export class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: props.currentItem
    };
  }

  render() {
    return <Menu currentItem={this.state.currentItem} />;
  }
}
