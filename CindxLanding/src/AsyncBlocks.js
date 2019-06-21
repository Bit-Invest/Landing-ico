import React from 'react';

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

export default () => (
  <div className="AsyncApp">
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

