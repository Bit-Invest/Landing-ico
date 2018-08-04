import * as React from 'react';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { MarketAnalytics } from './components/marketAnalytics/MarketAnalytics';
import { TokenSaleDetails } from './components/tokenSaleDetails/TokenSaleDetails';
import { LegalSchedule } from './components/legalSchedule/LegalSchedule';
import { FeedbackProject } from './components/feedbackProject/FeedbackProject';
import { Media } from './components/media/Media';
import { JoinTokenPreSale } from './components/joinTokenPreSale/JoinTokenPreSale';
import { PopUpManager } from './components/popUp/PopUpManager';
import { MediaNews } from './components/mediaNews/MediaNews';
import { TeamAdvisersPartners } from './components/teamAdvisersPartners/TeamAdvisersPartners';
import './App.css';

export const App = props => (
  <div className="App">
    <PopUpManager />
    <ProblemSolving />
    <HowCindxWorks />
    <MarketAnalytics />
    <TokenSaleDetails />
    <LegalSchedule />
    <FeedbackProject />
    <MediaNews />
    <TeamAdvisersPartners />
    <JoinTokenPreSale />
  </div>
);
