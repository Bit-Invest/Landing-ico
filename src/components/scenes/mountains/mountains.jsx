import React from 'react';
import imageMouns from '@assets/export_mountain_v2/mountain1.svg';
import Plx from "react-plx";

const ParallaxData = [
  {
    start: 0,
    end:  3000,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: "translateX"
      }
    ]
  }
];


export const RearLayout = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Plx parallaxData={ParallaxData} className="bgMountains">
        <img src={imageMouns} className="bgMountains-img" />
      </Plx>
    </div>    
  );
};
