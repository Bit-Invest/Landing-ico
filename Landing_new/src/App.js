import * as React from 'react';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { MarketAnalytics } from './components/marketAnalytics/MarketAnalytics';
// import { TokenSaleDetails } from './components/tokenSaleDetails/TokenSaleDetails';
// import { LegalSchedule } from './components/legalSchedule/LegalSchedule';
import { FeedbackProject } from './components/feedbackProject/FeedbackProject';
import { JoinTokenPreSale } from './components/joinTokenPreSale/JoinTokenPreSale';
import { PopUpManager } from './components/popUp/PopUpManager';
import { MediaNews } from './components/mediaNews/MediaNews';
import { TeamAdvisersPartners } from './components/teamAdvisersPartners/TeamAdvisersPartners';
import { MainBlock } from '@components/mainBlock';
import { CryptoAssetsManagement } from './components/cryptoAssetsManagement/CryptoAssetsManagement';
import { TeamLegal } from './components/teamLegal/TeamLegal';
import { Roadmap } from '@components/roadmap';
import { CanvasMouns } from '@components/animate';
import { ProgressBarSale } from '@components/progressBarSale/ProgressBarSale';
import { Menu } from '@components/menu/Menu';
// import RoadsShow from './components/roadsShow/RoadsShow';
// import { SocIcons } from '@components/socIcons/SocIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveMoney } from './store/store'
// import axios from 'axios'
import { DocPopup } from './components/DocPopup/DocPopup'
// import OurTopRatings  from './components/ourTopRatings/OurTopRatings'
import MediaAboutUs from './components/mediaAboutUs/MediaAboutUs'
import SocialMedia from './components/socialMedia/SocialMedia'
import { MvpBlock } from './components/mvpBlock/';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CanvasMouns />
        <PopUpManager />
        <DocPopup />
        <div className="contentText">
          <Menu />
          <MainBlock />
          <ProgressBarSale />
          {/*<OurTopRatings />*/}
          <MediaAboutUs />
          <CryptoAssetsManagement />
          <ProblemSolving />
          <HowCindxWorks />
          <MarketAnalytics />
          <TeamLegal />
          <Roadmap />
          <FeedbackProject />
          <MediaNews />
          <MvpBlock />
          {/* <RoadsShow /> */}
          {/* <ProblemSolving /> */}
          {/* <HowCindxWorks /> */}
          {/* <MarketAnalytics /> */}
          {/* <TokenSaleDetails />*/}
          <SocialMedia />
          {/* <LegalSchedule /> */}
          {/* <FeedbackProject /> */}
          <TeamAdvisersPartners />
          <JoinTokenPreSale />
          {/* <SocIcons /> */}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({saveMoney}, dispatch);

export default connect(null, mapDispatchToProps)(App)