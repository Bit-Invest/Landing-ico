import * as React from 'react';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { MarketAnalytics } from './components/marketAnalytics/MarketAnalytics';
import { FeedbackProject } from './components/feedbackProject/FeedbackProject';
import { JoinTokenPreSale } from './components/joinTokenPreSale/JoinTokenPreSale';
import { PopUpManager } from './components/popUp/PopUpManager';
import { MediaNews } from './components/mediaNews/MediaNews';
import { TeamAdvisersPartners } from './components/teamAdvisersPartners/TeamAdvisersPartners';
import { MainBlock } from '@components/mainBlock';
import { CryptoAssetsManagement } from './components/cryptoAssetsManagement/CryptoAssetsManagement';
import { Roadmap } from '@components/roadmap';
import { CanvasMouns } from '@components/animate';
import { Menu } from '@components/menu/Menu';
import RoadsShow from './components/roadsShow/RoadsShow';
import { SocIcons } from '@components/socIcons/SocIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveMoney } from './store/store'
import SocialMedia from './components/socialMedia/SocialMedia'
import { MvpBlock } from './components/mvpBlock/';
import UrgentNews from './components/urgentNews/';

import './App.css';

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
          <MarketAnalytics />
          <Roadmap />
          <RoadsShow />
          <FeedbackProject />
          <MediaNews />
          <MvpBlock />
          <SocialMedia />
          <TeamAdvisersPartners />
          <UrgentNews />
          <JoinTokenPreSale />
          <SocIcons />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({saveMoney}, dispatch);

export default connect(null, mapDispatchToProps)(App)