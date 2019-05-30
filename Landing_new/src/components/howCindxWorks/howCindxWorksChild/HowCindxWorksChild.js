import * as React from 'react';

export const HowCindxWorksChild = props => {
  return (
    <div className="row">
      <h3>{props.name}</h3>
      <p>{props.text1}</p>
      <div className="cloud">
        <span>{props.text2}</span>
      </div>
      <img src={props.icon} alt={"CINDEX"}/>
    </div>
  )
}
