import React from 'react';
import { Screen } from '@common/Screen';
import Aircraft from '@assets/export_mountain_v2/Samolet.svg';
import { docs } from '@common/Links';

const ROOT_CLASS = 'KeyDocs';

export const KeyDocs = props => (
  <Screen currentItem={0}>
    <div className="app flex KeyDocs" root-class={ROOT_CLASS}>
      <div className="container flex">
        <div className="top-side flex">
          <h1>
            Key <br /> Docs Access
          </h1>
          <div className="aircraft" />
        </div>
        <div className="bottom-side flex">
          <a
            href="https://my.cindx.io"
            target="__blank"
            className="href_noUnder">
            <button className="active">Buy tokens</button>
          </a>
          <div className="nav flex">
            <a href={docs.one_pager} target="__blank">
              One Pager&#8195;|
            </a>
            <a href={docs.presentation} target="__blank">
              &#8195;Presentation&#8195;|
            </a>
            <a href={docs.wp} target="__blank">
              &#8195;White Paper&#8195;|
            </a>
            <a href={docs.math_model} target="__blank">
              &#8195;Financial Model
            </a>
          </div>
        </div>
      </div>
    </div>
  </Screen>
);
