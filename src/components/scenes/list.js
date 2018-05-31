import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Mountains } from './mountains/';
import { Gradient } from './gradient_scene/';
import { Header } from './header/';
import { Footer } from './footer/';
import { Content_c1 } from './';
import { Messages } from '@common/Message';

class ListContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Mountains />
        <Gradient />
        <Messages />
        <Content_c1 />
        <Footer />
        {/*
          <Messages />
          <Gradient />
        */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //
    },
    dispatch
  );

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListContainer
);

export { connectedContainer as ListContainer };
