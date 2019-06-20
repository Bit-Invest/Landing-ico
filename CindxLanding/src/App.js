import React, { lazy, Suspense } from 'react';

import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { PopUpManager } from './components/popUp/PopUpManager';
import { MainBlock } from '@components/mainBlock';
import { CryptoAssetsManagement } from './components/cryptoAssetsManagement/CryptoAssetsManagement';
import { CanvasMouns } from '@components/animate';
import { Menu } from '@components/menu/Menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveMoney } from './store/store'

import './App.css';

const AsyncBlocks = lazy(() => import('./AsyncBlocks'));

const renderLoader = () => <p>Loading</p>;

const AsyncBlocksContainer = () => (
  <Suspense fallback={renderLoader()}>
    <AsyncBlocks />
  </Suspense>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CanvasMouns />
        <PopUpManager />
        <div className="contentText">
          <Menu />
          <MainBlock />
          <CryptoAssetsManagement />
          <ProblemSolving />
          <HowCindxWorks />
          <AsyncBlocksContainer />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({saveMoney}, dispatch);

export default connect(null, mapDispatchToProps)(App)