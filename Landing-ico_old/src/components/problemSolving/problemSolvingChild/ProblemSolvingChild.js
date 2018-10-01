import * as React from 'react';

export const ProblemSolvingChild = props => (
  <div className="row">
    <h2>{props.name}</h2>
    <span>{props.text1}</span>
    <img src={props.icon} alt={"MVP"}/>
    <h3>{props.text2}</h3>
    <p>{props.text3}</p>
  </div>
)
