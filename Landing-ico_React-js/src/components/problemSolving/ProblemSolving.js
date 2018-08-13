import * as React from 'react';
import { ProblemSolvingChild } from './problemSolvingChild/ProblemSolvingChild';
import block_1_row_1 from '../../images/block_1_row_1.png';
import block_1_row_2 from '../../images/block_1_row_2.png';
import block_1_row_3 from '../../images/block_1_row_3.png';
import { showPopUp } from './../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './problemSolving.css';

const ProblemSolvingInfo = {
  caption: ['Time', 'Trust', 'Uncertainty'],
  text1: [
    'I have some money to put in the crypto game, but don’t have the time to research and contact professional traders to manage my portfolio',
    'I have always felt uncomfortable with the idea of handing my money over to someone else to make a profit',
    'The technology surrounding crypto trading is not user-friendly. I cant figure out how to trade my coins'
  ],
  icon: [
    block_1_row_1, block_1_row_2, block_1_row_3
  ],
  text2: [
    'CINDX provides the access to rated and trustworthy traders',
    'On CINDX  platform, your funds will never leave your wallet',
    'You earn right along with the best traders on the market'
  ],
  text3: [
    'Traders on CINDX are rated according to their history of trading success. Choose the trader that’s right for you quickly',
    'Our decentralized system and smart contracts allow your funds to be managed without being transferred to another trader',
    'Every investor in CINDX has the opportunity to have their funds managed by the most succesful traders on the market'
  ]
};

class ProblemSolving extends React.Component {

  onClickRoot() {
    this.props.showPopUp();
  }

  render() {
    return (
      <div className="block_1">
        <div className="size">
          <h2 className="header_blocks">What kinds of problems does CINDX solve?</h2>
          <a onClick={this.onClickRoot.bind(this)} className="sb" href="#">TEST MVP</a>
          <div className="container">
            <div className="clear" />
            <div className="cont_row">
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[0]}
                text1={ProblemSolvingInfo.text1[0]}
                icon={ProblemSolvingInfo.icon[0]}
                text2={ProblemSolvingInfo.text2[0]}
                text3={ProblemSolvingInfo.text3[0]}
              />
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[1]}
                text1={ProblemSolvingInfo.text1[1]}
                icon={ProblemSolvingInfo.icon[1]}
                text2={ProblemSolvingInfo.text2[1]}
                text3={ProblemSolvingInfo.text3[1]}
              />
              <ProblemSolvingChild
                name={ProblemSolvingInfo.caption[2]}
                text1={ProblemSolvingInfo.text1[2]}
                icon={ProblemSolvingInfo.icon[2]}
                text2={ProblemSolvingInfo.text2[2]}
                text3={ProblemSolvingInfo.text3[2]}
              />
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(ProblemSolving);

export {connectedContainer as ProblemSolving};
