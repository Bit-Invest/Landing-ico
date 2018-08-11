import * as React from 'react';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { MarketAnalytics } from './components/marketAnalytics/MarketAnalytics';
import { TokenSaleDetails } from './components/tokenSaleDetails/TokenSaleDetails';
import { LegalSchedule } from './components/legalSchedule/LegalSchedule';
import { FeedbackProject } from './components/feedbackProject/FeedbackProject';
import { JoinTokenPreSale } from './components/joinTokenPreSale/JoinTokenPreSale';
import { PopUpManager } from './components/popUp/PopUpManager';
import { MediaNews } from './components/mediaNews/MediaNews';
import { TeamAdvisersPartners } from './components/teamAdvisersPartners/TeamAdvisersPartners';
import { MainBlock } from '@components/mainBlock';
<<<<<<< HEAD
import { CryptoAssetsManagement } from './components/cryptoAssetsManagement/CryptoAssetsManagement';
import { TeamLegal } from './components/teamLegal/TeamLegal';
=======
import { Roadmap } from '@components/roadmap';
>>>>>>> 8b34bf461e7d849eecfbd802567aecb74918c37c
import './App.css';

export const App = props => (
  <div className="App">
    <PopUpManager />
    <MainBlock />
<<<<<<< HEAD
    <CryptoAssetsManagement />
    <TeamLegal />
=======
    <Roadmap />
>>>>>>> 8b34bf461e7d849eecfbd802567aecb74918c37c
    <ProblemSolving />
    <HowCindxWorks />
    {/*<MarketAnalytics />*/}
    <TokenSaleDetails />
    <LegalSchedule />
    <FeedbackProject />
    <MediaNews />
    <TeamAdvisersPartners />
    <JoinTokenPreSale />
    <PopUpManager />
  </div>
);
