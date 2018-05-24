import React from 'react';
import { Header } from '@common/Header';
import { Footer } from '@common/Footer';

const ROOT_CLASS = 'screen';

export const Screen = props => (
  <div className={ROOT_CLASS}>
    <Header currentItem={props.currentItem} />
    <div className={`${ROOT_CLASS}__content`}>{props.children}</div>
    <Footer />
  </div>
);
