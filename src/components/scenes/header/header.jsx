import React from 'react';
import { Header } from '@common/Header';
import Plx from "react-plx";

export class RearLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headContainer containerBlocks">
        <Header currentItem={0} />  
      </div>
    );
  }
}
