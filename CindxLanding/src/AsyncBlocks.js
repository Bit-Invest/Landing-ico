import React from 'react';

import { CryptoAssetsManagement } from './components/cryptoAssetsManagement/CryptoAssetsManagement';
import SubscribeBlock from './components/subscribeBlock/';
import { HowCindxWorks } from './components/howCindxWorks/HowCindxWorks';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { MarketAnalytics } from './components/marketAnalytics/MarketAnalytics';
import { FeedbackProject } from './components/feedbackProject/FeedbackProject';
import { JoinTokenPreSale } from './components/joinTokenPreSale/JoinTokenPreSale';
import { MediaNews } from './components/mediaNews/MediaNews';
import { TeamAdvisersPartners } from './components/teamAdvisersPartners/TeamAdvisersPartners';
import { Roadmap } from '@components/roadmap';
import RoadsShow from './components/roadsShow/RoadsShow';
import { SocIcons } from '@components/socIcons/SocIcons';
import SocialMedia from './components/socialMedia/SocialMedia'
import { MvpBlock } from './components/mvpBlock/';
import UrgentNews from './components/urgentNews/';

import './slick/slick.min.css';
import './slick/slick-theme.min.css';
import './AsyncApp.css';

export default () => (
  <div className="AsyncApp">
    <CryptoAssetsManagement />
    <SubscribeBlock />
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
);

