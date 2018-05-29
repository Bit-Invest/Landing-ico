import React from 'react';
import { Checkbox } from './Checkbox';

export class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  onClickRoot() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <Checkbox
        title={this.props.title}
        isChecked={this.state.isChecked}
        onClickRoot={this.onClickRoot.bind(this)}
      />
    );
  }
}
