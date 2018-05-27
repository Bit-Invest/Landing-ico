import React from 'react';
import { Footer } from '@common/Footer';
import Plx from "react-plx";

export class RearLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footerContainer containerBlocks">
        <Footer currentItem={0} />  
      </div>
    );
  }
}
