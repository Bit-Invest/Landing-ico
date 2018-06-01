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
import { PopUp } from './popup_scene/';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: false
    };
  }

  setPopUp = val => {
    this.setState({
      popup: val
    });
  };

  render() {
    const { setPopUp } = this;
    const { popup } = this.state;

    return (
      <div>
        <Header />
        <Mountains />
        <Gradient />
        <Messages />
        <Content_c1
          data={{
            setPopUp
          }}
        />
        <Footer />
        <PopUp
          data={{
            popup,
            setPopUp
          }}
        />
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
