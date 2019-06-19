import * as React from 'react';
import Slider from "react-slick";
import { lng } from '../../links';
import indexLngObj from '../../lngs/index';

// NEWS
import Airat_Shayhulov from '../../news/Airat_Shayhulov.jpeg';
import Amarpreet_Singh from '../../news/Amarpreet_Singh.jpeg';
import Artur_Shamalov from '../../news/Artur_Shamalov.jpeg';
import Austin_Kimm from '../../news/Austin_Kimm.jpeg';
import Bogdan_Fiedur from '../../news/Bogdan_Fiedur.jpeg';
import CINDX_Key_points_to_observe from '../../news/CINDX_Key_points_to_observe.jpeg';
import CINDX_continues_the_roadshow_in_China from '../../news/CINDX_continues_the_roadshow_in_China.jpeg';
import CINDX_crypto_currency_exchange_license from '../../news/CINDX_crypto_currency_exchange_license.jpeg';
import CINDX_gets_5_0_rating_on_TrackICO from '../../news/CINDX_gets_5.0_rating_on_TrackICO.png';
import CINDX_license_of_the_financial_consultant from '../../news/CINDX_license_of_the_financial_consultant.png';
import CINDX_meets_9coin_Digital_Asses_Exchange from '../../news/CINDX_meets_9coin_Digital_Asses_Exchange.png';
import CINDX_meets_Vangoo_Capital_Partners_Fund from '../../news/CINDX_meets_Vangoo_Capital_Partners_Fund.png';
import CINDX_Presents_the_project_during_RICLUB_private_investors_meeting from '../../news/CINDX_Presents_the_project_during_RICLUB_private_investors_meeting.jpg';
import CINDX_Weekly_digest_06_08_18_12_08_18 from '../../news/CINDX_Weekly_digest_06_12.jpeg';
import CINDX_WEEKLY_DIGEST_30_July_5_August from '../../news/CINDX_WEEKLY_DIGEST_30_July—5_August.jpeg';
import Dip_your_Toe_in_Crypto from '../../news/Dip_your_Toe_in_Crypto.png'
import Weekly_digest from '../../news/Weekly_digest.jpg'
import Yuriy_Avdeev_CEO_of_the_CINDX_project from '../../news/Yuriy_Avdeev_CEO_of_the_CINDX_project.jpg'
import CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions from '../../news/CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions.jpeg';
import Denis_Eskenazi from '../../news/Denis_Eskenazi.jpeg';
import Graham_Doggart from '../../news/Graham_Doggart.jpeg';
import How_CINDX_ensures_safety_for_its_users_KYC from '../../news/How_CINDX_ensures_safety_for_its_users-KYC.jpeg';
import How_CINDX_Influences_Crypto_Trading from '../../news/How_CINDX_Influences_Crypto_Trading.jpeg';
import How_CINDX_is_ensuring_legal_compliance from '../../news/How_CINDX_is_ensuring_legal_compliance.jpeg';
import Ibraghim_Haniev from '../../news/Ibraghim_Haniev.jpeg';
import ICObench_gives_4_8_to_CINDX from '../../news/ICObench_gives_4_8_to_CINDX.png';
import Jason_King from '../../news/Jason_King.jpg';
import Keith_Teare from '../../news/Keith_Teare.jpeg';
import Meet_worlds_first_financial_crypto_social_network from '../../news/Meet_worlds_first_financial_crypto_social_network.jpeg';
import Mofassair_Hossain from '../../news/Mofassair_Hossain.jpeg';
import Philip_Staehelin from '../../news/Philip_Staehelin.jpeg';
import Sadie_Hutton from '../../news/Sadie_Hutton.jpeg';
import Sofja_Pevzner from '../../news/Sofja_Pevzner.jpeg';
import The_issuance_of_CINX_tokens from '../../news/The_issuance_of_CINX_tokens.jpeg';
import The_strategic_meeting_of_the_international_CINDX_team from '../../news/The_strategic_meeting_of_the_international_CINDX_team.png';
import Tyler_Sanford from '../../news/Tyler_Sanford.jpeg';
import Val_Jerdes from '../../news/Val_Jerdes.jpeg';
import Virtual_Currency_Wallet_Services from '../../news/Virtual_Currency_Wallet_Services.jpeg';
import MediaBitcoingarden from '../../media/bitcoingarden_logo.png'
import MediaDigitaljournal from '../../media/digital_journal_transp.png'
import MediaCoinfox from '../../media/CoinFox.png'
import Borderless_Blockchain_Technology_Summit_Post_Event_Report from '../../news/Borderless_Blockchain_Technology_Summit_Post_Event_Report.jpg'
import CINDX_Platform_Promo_Presentation from '../../news/CINDX_Platform_Promo_Presentation.jpg'
import CINDX_continues_its_regular_Weekly_Digest_column from '../../news/CINDX_continues_its_regular_Weekly_Digest_column.jpg'
import CINDX_meets_Chain_Partners from '../../news/CINDX_meets_Chain_Partners.jpeg'
import Weekly_digest_27_08_18_02_09_18 from '../../news/Weekly_digest_27_08_18_02_09_18.jpg'
import APAC_is_the_Frontrunner_in_Blockchain_Adoption from '../../news/APAC_is_the_Frontrunner_in_Blockchain_Adoption.jpg'
import Leonard_Grayver from '../../news/Leonard_Grayver.jpg'
import CINDX_ROADSHOW_IN_CHINA_NEW_STAGE from '../../news/CINDX_ROADSHOW_IN_CHINA_NEW_STAGE.jpg'
import Weekly_digest_03_09_18_09_09_18 from '../../news/Weekly_digest_03_09_18_09_09_18.png'
import How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy from '../../news/How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy.jpg'
import MOTTI_PEER_Co_CEO_of_Blonde_2_0 from '../../news/MOTTI_PEER_Co_CEO_of_Blonde_2_0.jpg'
import CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE from '../../news/CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE.jpg'
import Join_the_CINDX_Meetup_in_Singapore from '../../news/Join_the_CINDX_Meetup_in_Singapore.jpg'
import CINDX_at_Consensus_Singapore from '../../news/CINDX_at_Consensus_Singapore.jpg'
import Weekly_Digest_10_09_2018_16_09_2018 from '../../news/Weekly_Digest_10_09_2018_16_09_2018.jpg'
import Tokenmatch from '../../news/Tokenmatch.jpg'
import AGORA_Dubai from '../../news/AGORA_Dubai.jpg'
import ASEAN from '../../news/ASEAN.jpg'
import AERUM from '../../news/AERUM.jpg'
import CINDX_TEAM_JELENA_KARZETSKAJA from '../../news/CINDX_TEAM_JELENA_KARZETSKAJA.png'
import Weekly_Digest_17_09_2018_23_09_2018 from '../../news/Weekly_Digest_17_09_2018_23_09_2018.jpg'
import ERC_1400 from '../../news/ERC_1400.jpg'
import Huobi_MENA from '../../news/Huobi_MENA.jpg'
import investing_into_cryptocurrencies from '../../news/investing_into_cryptocurrencies.png'
import st_place_in_the_pitch_competition from '../../news/st_place_in_the_pitch_competition.png'
import Lincoln_Teo_photo from '../../news/Lincoln_Teo.png'
import Pecunio_CINDX from '../../news/Pecunio_&_CINDX.png'
import Banners_005 from '../../news/Banners.005_copy.png'
import Prorocol from '../../news/prorocol.jpg'
import Kosol_Saisanit_photo from '../../news/Kosol_Saisanit_photo.png'
import CD3105 from '../../images/CD3105.png'
import MediaAmbcrypto from '../../media/AMBcrypto.png'
import MediaBitcoinist from '../../media/Bitcoinist.png'
import MediaTokendesk from '../../media/tokendesk.png'
import MediaBtcmanager from '../../media/BTCManager.png'
import MediaBlockonomi from '../../media/blockonomi-logo.png'
import Investing from '../../media/investing.jpeg'
import Сryptoninjas from '../../media/Cryptoninjas.png'
import Coinannouncer from '../../media/Coinannouncer.png'
import Cryptoreporter from '../../media/Cryptoreporter.jpg'
import Bitcoinexchangeguide from '../../media/Bitcoinexchangeguide.jpeg'
import Thestreet from '../../media/Thestreet.png'
import MediaCNN from '../../media/CCN.png'

import img_08_1 from '../../news/08/1.png';
import img_08_2 from '../../news/08/2.png';

import IMG_1087 from '../../media/IMG_1087.PNG';
import IMG_1088 from '../../media/IMG_1088.PNG';
import IMG_1089 from '../../media/IMG_1089.PNG';
import IMG_1090 from '../../media/IMG_1090.PNG';

import IMG_1205 from '../../media/IMG_1205.png';
import IMG_1206 from '../../media/IMG_1206.png';
import IMG_1207 from '../../media/IMG_1207.png';
import IMG_1208 from '../../media/IMG_1208.png';

import './MediaNews.css';

let media = [
  {
    screen: Investing,
    type: 'investing',
    date: '08.29.2018',
    name: indexLngObj['en']['mediaNews#1_32'],
    text: indexLngObj['en']['mediaNews#1_33'],
    src: 'https://www.investing.com/analysis/why-bitcoin-mining-hashrates-are-way-up-despite-the-bear-market-200340991'
  },
  {
    screen: MediaCNN,
    type: 'cnn',
    date: '08.21.2018',
    name: indexLngObj['en']['mediaNews#1_19'],
    text: indexLngObj['en']['mediaNews#1_21'],
    src: 'https://www.ccn.com/cindx-crypto-asset-management-hub-adopts-bancor-protocol/'
  },
  {
    screen: Thestreet,
    type: 'thestreet',
    date: '08.31.2018',
     name: indexLngObj['en']['mediaNews#1_30'],
    text: indexLngObj['en']['mediaNews#1_31'],
    src: 'https://www.thestreet.com/technology/citi-analyst-treat-crypto-and-blockchain-with-healthy-skepticism-14695612'
  },
  {
    screen: Bitcoinexchangeguide,
    type: 'bitcoinexchangeguide',
    date: '09.08.2018',
    name: indexLngObj['en']['mediaNews#1_28'],
    text: indexLngObj['en']['mediaNews#1_29'], 
    src: 'https://bitcoinexchangeguide.com/cindx-crypto-asset-manager-for-traders-launches-security-token-ico/'
  },
  {
    screen: Cryptoreporter,
    type: 'cryptoreporter',
    date: '09.12.2018',
    name: indexLngObj['en']['mediaNews#1_26'],
    text: indexLngObj['en']['mediaNews#1_27'],
    src: 'https://www.crypto-reporter.com/press-releases/even-amateur-blockchain-investors-can-make-it-big-with-the-help-of-cindx-5339/'
  },
  {
    screen: Coinannouncer,
    type: 'coinannouncer',
    date: '09.14.2018',
    name: indexLngObj['en']['mediaNews#1_24'],
    text: indexLngObj['en']['mediaNews#1_25'],
    src: 'https://www.coinannouncer.com/blockchain-investors-can-now-make-it-big-with-the-help-of-cindx/'
  },
  {
    screen: Сryptoninjas,
    type: 'cryptoninjas',
    date: '09.05.2018',
    name: indexLngObj['en']['mediaNews#1_22'],
    text: indexLngObj['en']['mediaNews#1_23'],
    src: 'https://www.cryptoninjas.net/2018/09/05/cindx-beginning-ico-for-crypto-asset-management-and-social-network/'
  },
  {
    screen: MediaAmbcrypto,
    type: 'ambcrypto',
    date: '08.18.2018',
    name: indexLngObj['en']['mediaNews#1_1'],
    text: indexLngObj['en']['mediaNews#1_2'],
    src: 'https://ambcrypto.com/how-cindx-is-democratizing-the-modern-financial-system-2/'
  },
  {
    screen: MediaBitcoinist,
    type: 'bitcoinist',
    date: '08.09.2018',
    name: indexLngObj['en']['mediaNews#1_3'],
    text: indexLngObj['en']['mediaNews#1_4'],
    src: 'https://bitcoinist.com/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaTokendesk,
    type: 'tokendesk',
    date: '08.02.2018',
    name: indexLngObj['en']['mediaNews#1_5'],
    text: indexLngObj['en']['mediaNews#1_6'],
    src: 'https://www.tokendesk.io/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBtcmanager,
    type: 'btcmanager',
    date: '08.03.2018',
    name: indexLngObj['en']['mediaNews#1_7'],
    text: indexLngObj['en']['mediaNews#1_8'],
    src: 'https://btcmanager.com/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBlockonomi,
    type: 'blockonomi',
    date: '08.01.2018',
    name: indexLngObj['en']['mediaNews#1_9'],
    text: indexLngObj['en']['mediaNews#1_10'],
    src: 'https://blockonomi.com/cindxico-pre-sale/'
  },
  {
    screen: MediaBitcoingarden,
    type: 'bitcoingarden',
    date: '08.01.2018',
    name: indexLngObj['en']['mediaNews#1_11'],
    text: indexLngObj['en']['mediaNews#1_12'],
    src: 'https://bitcoingarden.org/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaDigitaljournal,
    type: 'digitaljournal',
    date: '08.01.2018',
    name: indexLngObj['en']['mediaNews#1_13'],
    text: indexLngObj['en']['mediaNews#1_14'],
    src: 'http://www.digitaljournal.com/pr/3881157'
  },
  {
    screen: MediaCoinfox,
    type: 'coinfox',
    date: '08.14.2018',
    name: indexLngObj['en']['mediaNews#1_15'],
    text: indexLngObj['en']['mediaNews#1_16'],
    src: 'http://www.coinfox.info/news/10194-5-tips-from-cindx-crypto-assets-management-hub-how-to-avoid-being-cheated'
  },
];

let news = [
  {
    urlLink: 'https://medium.com/cindx/cindx-platform-components-dc5049b4b6a8',
    screen: IMG_1087,
    date: '06.07.2019',
    name: 'CINDX Platform Components' ,
    text:'The CINDX trading platform is a revolutionary instrument for the trading world, combining a number of components, each of which is unique and has a distinct spectrum of tasks that it is intended to solve. The main concept of the CINDX platform is to bring together investors and professional market participants and allow them to interact in an atmosphere of mutual benefit. ' ,
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-team-sergey-potekhin-31451dbb6de3',
    screen: IMG_1088,
    date: '06.10.2019',
    name: 'CINDX TEAM: Sergey Potekhin' ,
    text: 'Sergey is a highly skilled blockchain architect with over ten years of programming experience in Python development, Node JS, Git, Ethereum — Solidity, Truffle, Hyperledger, and many other programming tools and languages.',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-is-launching-a-video-contest-for-the-community-with-a-prize-fund-of-17-000-58cb4b11cb7f',
    screen: IMG_1089,
    date: '06.10.2019',
    name: 'CINDX Is Launching a Video Contest For The Community With a Prize Fund of $17,000' ,
    text: 'The CINDX project is delighted to announce that it is launching a video competition for its community starting on June 10, 2019, that will last until June 24, 2019, with a total prize fund of $17,000 equivalent in CINXO Tokens. The CINDX team will announce the winning videos on Medium and distribute the prizes on July 1, 2019.',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-is-launching-a-meme-contest-with-a-prize-fund-of-5-000-88daf7c496ec',
    screen: IMG_1090,
    date: '06.10.2019',
    name: 'CINDX Is Launching A Meme Contest With a Prize Fund of $5,000' ,
    text: 'A call to all memelords and memers out there! The CINDX project is not all trading, but fun as well! That is why up until the end of June 2019, we are launching a contest for all those who think they have the creative skills to claim the grand prize from the $5,000 prize fund.',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642',
    screen: How_CINDX_is_ensuring_legal_compliance,
    date: '07.05.2018',
    name: indexLngObj['en']['mediaNews#2_5'],
    text: indexLngObj['en']['mediaNews#2_6'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    screen: Keith_Teare,
    date: '07.06.2018',
    name: indexLngObj['en']['mediaNews#2_7'],
    text: indexLngObj['en']['mediaNews#2_8'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/meet-worlds-first-financial-crypto-social-network-connect-with-people-as-you-grow-your-wealth-76a3cea9a06c',
    screen: Meet_worlds_first_financial_crypto_social_network,
    date: '06.26.2018',
    name: indexLngObj['en']['mediaNews#2_9'],
    text: indexLngObj['en']['mediaNews#2_10'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50',
    screen: Denis_Eskenazi,
    date: '07.16.2018',
    name: indexLngObj['en']['mediaNews#2_11'],
    text: indexLngObj['en']['mediaNews#2_12'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-4e075b5d34',
    screen: CINDX_crypto_currency_exchange_license,
    date: '07.11.2018',
    name: indexLngObj['en']['mediaNews#2_13'],
    text: indexLngObj['en']['mediaNews#2_14'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    screen: Austin_Kimm,
    date: '07.09.2018',
    name: indexLngObj['en']['mediaNews#2_15'],
    text: indexLngObj['en']['mediaNews#2_16'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: The_strategic_meeting_of_the_international_CINDX_team,
    date: '06.29.2018',
    name: indexLngObj['en']['mediaNews#2_17'],
    text: indexLngObj['en']['mediaNews#2_18'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9',
    screen: Artur_Shamalov,
    date: '07.20.2018',
    name: indexLngObj['en']['mediaNews#2_19'],
    text: indexLngObj['en']['mediaNews#2_20'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d',
    screen: The_issuance_of_CINX_tokens,
    date: '07.20.2018',
    name: indexLngObj['en']['mediaNews#2_21'],
    text: indexLngObj['en']['mediaNews#2_22'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    screen: Amarpreet_Singh,
    date: '07.11.2018',
    name: indexLngObj['en']['mediaNews#2_23'],
    text: indexLngObj['en']['mediaNews#2_24'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: CINDX_meets_Vangoo_Capital_Partners_Fund,
    date: '07.19.2018',
    name: indexLngObj['en']['mediaNews#2_25'],
    text: indexLngObj['en']['mediaNews#2_26'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e',
    screen: Mofassair_Hossain,
    date: '07.26.2018',
    name: indexLngObj['en']['mediaNews#2_27'],
    text: indexLngObj['en']['mediaNews#2_28'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/https-medium-com-cindx-cindx-legal-kyc-procedure-2bbfe073511d',
    screen: How_CINDX_ensures_safety_for_its_users_KYC,
    date: '08.02.2018',
    name: indexLngObj['en']['mediaNews#2_29'],
    text: indexLngObj['en']['mediaNews#2_30'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    screen: Philip_Staehelin,
    date: '07.12.2018',
    name: indexLngObj['en']['mediaNews#2_31'],
    text: indexLngObj['en']['mediaNews#2_32'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: CINDX_meets_9coin_Digital_Asses_Exchange,
    date: '07.26.2018',
    name: indexLngObj['en']['mediaNews#2_33'],
    text: indexLngObj['en']['mediaNews#2_34'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    screen: Jason_King,
    date: '07.03.2018',
    name: indexLngObj['en']['mediaNews#2_35'],
    text: indexLngObj['en']['mediaNews#2_36'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/https-medium-com-cindx-cindx-presents-the-project-during-private-investors-meeting-c886660a8387',
    screen: CINDX_Presents_the_project_during_RICLUB_private_investors_meeting,
    date: '08.03.2018',
    name: indexLngObj['en']['mediaNews#2_37'],
    text: indexLngObj['en']['mediaNews#2_38'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407',
    screen: Sofja_Pevzner,
    date: '08.06.2018',
    name: indexLngObj['en']['mediaNews#2_39'],
    text: indexLngObj['en']['mediaNews#2_40'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
    screen: Tyler_Sanford,
    date: '07.17.2018',
    name: indexLngObj['en']['mediaNews#2_41'],
    text: indexLngObj['en']['mediaNews#2_42'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-project-some-key-points-to-observe-b82ce2bccb79',
    screen: CINDX_Key_points_to_observe,
    date: '07.31.2018',
    name: indexLngObj['en']['mediaNews#2_43'],
    text: indexLngObj['en']['mediaNews#2_44'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f',
    screen: Airat_Shayhulov,
    date: '08.03.2018',
    name: indexLngObj['en']['mediaNews#2_45'],
    text: indexLngObj['en']['mediaNews#2_46'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-legal-operating-licence-f401cb580e7b',
    screen: CINDX_license_of_the_financial_consultant,
    date: '07.27.2018',
    name: indexLngObj['en']['mediaNews#2_47'],
    text: indexLngObj['en']['mediaNews#2_48'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    screen: Graham_Doggart,
    date: '07.23.2018',
    name: indexLngObj['en']['mediaNews#2_49'],
    text: indexLngObj['en']['mediaNews#2_50'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-continues-the-roadshow-in-china-79d451184c63',
    screen: CINDX_continues_the_roadshow_in_China,
    date: '08.07.2018',
    name: indexLngObj['en']['mediaNews#2_51'],
    text: indexLngObj['en']['mediaNews#2_52'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba',
    screen: Ibraghim_Haniev,
    date: '08.01.2018',
    name: indexLngObj['en']['mediaNews#2_53'],
    text: indexLngObj['en']['mediaNews#2_54'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    screen: Sadie_Hutton,
    date: '07.24.2018',
    name: indexLngObj['en']['mediaNews#2_55'],
    text: indexLngObj['en']['mediaNews#2_56'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-talk-lots-of-features-to-take-you-on-a-new-journey-a4a0553eedb8',
    screen: CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions,
    date: '07.30.2018',
    name: indexLngObj['en']['mediaNews#2_57'],
    text: indexLngObj['en']['mediaNews#2_58'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61',
    screen: Val_Jerdes,
    date: '07.05.2018',
    name: indexLngObj['en']['mediaNews#2_59'],
    text: indexLngObj['en']['mediaNews#2_60'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    screen: Bogdan_Fiedur,
    date: '07.19.2018',
    name: indexLngObj['en']['mediaNews#2_61'],
    text: indexLngObj['en']['mediaNews#2_62'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-weekly-digest-30-july-5-august-1159f1cd8d28',
    screen: CINDX_WEEKLY_DIGEST_30_July_5_August,
    date: '08.09.2018',
    name: indexLngObj['en']['mediaNews#2_67'],
    text: indexLngObj['en']['mediaNews#2_68'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-legal-virtual-currency-wallet-services-8978410e3172',
    screen: Virtual_Currency_Wallet_Services,
    date: '08.14.2018',
    name: indexLngObj['en']['mediaNews#2_69'],
    text: indexLngObj['en']['mediaNews#2_70'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/how-cindx-influences-crypto-trading-7501619904de',
    screen: How_CINDX_Influences_Crypto_Trading,
    date: '08.10.2018',
    name: indexLngObj['en']['mediaNews#2_71'],
    text: indexLngObj['en']['mediaNews#2_72'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-weekly-digest-6-august-12-august-7e12e324eb1f',
    screen: CINDX_Weekly_digest_06_08_18_12_08_18,
    date: '08.16.2018',
    name: indexLngObj['en']['mediaNews#2_73'],
    text: indexLngObj['en']['mediaNews#2_74'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/https-medium-com-cindx-cindx-gets-the-highest-5-0-rating-from-trackico-781a0a31971e',
    screen: CINDX_gets_5_0_rating_on_TrackICO,
    date: '08.15.2018',
    name: indexLngObj['en']['mediaNews#2_75'],
    text: indexLngObj['en']['mediaNews#2_76'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/icobench-gives-4-8-to-cindx-70aa244ca7c4',
    screen: ICObench_gives_4_8_to_CINDX,
    date: '08.17.2018',
    name: indexLngObj['en']['mediaNews#2_79'],
    text: indexLngObj['en']['mediaNews#2_80'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/dip-your-toe-in-crypto-3c8f54650e06',
    screen: Dip_your_Toe_in_Crypto,
    date: '08.19.2018',
    name: indexLngObj['en']['mediaNews#2_87'],
    text: indexLngObj['en']['mediaNews#2_88'],
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-team-yuriy-avdeev-e7a747d4c2e3',
    screen: Yuriy_Avdeev_CEO_of_the_CINDX_project,
    date: '08.22.2018',
    name: indexLngObj['en']['mediaNews#2_89'],
    text: indexLngObj['en']['mediaNews#2_90'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-weekly-digest-13-august-19-august-7d965ab073c0',
    screen: Weekly_digest,
    date: '08.22.2018',
    name: indexLngObj['en']['mediaNews#2_91'],
    text: indexLngObj['en']['mediaNews#2_92'],
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-meets-chain-partners-5dd9ee71f7c0',
    screen: CINDX_meets_Chain_Partners,
    date: '08.24.2018',
    name: 'CINDX meets Chain Partners',
    text: 'Allowing fiat investments in a token sale is an uncommon practice in the cryptocurrency industry. However, CINDX understood the importance of opening the sale to investors who wished to pay in fiat — a whole new class of investors is now welcome to take part in the STO.',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-promo-video-f24a5944e2ef',
    screen: CINDX_Platform_Promo_Presentation,
    date: '08.27.2018',
    name: ' CINDX Platform Promo Presentation',
    text: 'We have created a new video explaining the killer features and advantages of the CINDX platform.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/weekly-digest-20-august-26-august-d286c516ca24',
    screen: CINDX_continues_its_regular_Weekly_Digest_column,
    date: '08.29.2018',
    name: 'CINDX continues its regular Weekly Digest column.',
    text: 'The most exciting and long-awaited event of the past week was certainly the start of CINDX Pre-Sale with a generous 40% bonus! Every day we see more and more people take interest in our project and we are delighted to welcome first investors on board!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/borderless-blockchain-technology-summit-924a40a1f43e',
    screen: Borderless_Blockchain_Technology_Summit_Post_Event_Report,
    date: '08.31.2018',
    name: 'Borderless Blockchain Technology Summit Post-Event Report',
    text: 'CINDX is excited to share post-event report after its participation as a Gold Sponsor at the Borderless Blockchain Technology Summit that took place yesterday in Shanghai.',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/weekly-digest-27-august-2-september-c4c6b3688a11',
    screen: Weekly_digest_27_08_18_02_09_18,
    date: '09.05.2018',
    name: 'Weekly digest (27.08.18 - 02.09.18)',
    text: 'CINDX is on the path to successfully completing its STO! Every day, the CINDX team strives to improve the CINDX platform, to strengthen the legal status and to support and spread CINDX’ brand identity across the international space. For last week’s most important CINDX news updates, please visit our Medium blog!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/apac-the-frontrunner-in-blockchain-adoption-af85be64876b',
    screen: APAC_is_the_Frontrunner_in_Blockchain_Adoption,
    date: '09.07.2018',
    name: 'APAC is the Frontrunner in Blockchain Adoption',
    text: 'CINDX Research: Asia-Pacific is Adopting Blockchain Development Faster than any other Geography',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/advisers-leonard-grayver-4eb7657268b8',
    screen: Leonard_Grayver,
    date: '09.08.2018',
    name: 'Leonard Grayver, the co-chair of corporate and international law practice at Greenberg, Whitcombe, Takeuchi, Gibson & Grayver LLP',
    text: 'Leonard Grayver brings litigation experience in a combination of international corporate and employment law to the CINDX team. Read what inspires him the most about CINDX in our blog!',
    source: 'www.medium.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/roadshow-in-china-new-stage-322ca7ecbc95',
    screen: CINDX_ROADSHOW_IN_CHINA_NEW_STAGE,
    date: '09.11.2018',
    name: 'CINDX Roadshow in China. New Stage.',
    text: ' Take a look at the amazing plans CINDX has for its roadshow in China!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/weekly-digest-3-september-9-september-1f89a622b9dc',
    screen: Weekly_digest_03_09_18_09_09_18,
    date: '09.12.2018',
    name: 'Weekly Digest (03.09.2018 - 09.09.2018)',
    text: 'CINDX team continues its regular Weekly Digest column to highlight last week’s progress and achievements of the CINDX project.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/how-cindx-can-help-you-to-fine-tune-your-trading-strategy-171752452b5b',
    screen: How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy,
    date: '09.13.2018',
    name: 'How CINDX Can Help You to Fine-Tune Your Trading Strategy',
    text: 'CINDX understands the issues that crypto investors and traders face. Learn more about the simple and proven solutions that CINDX offers them. Hurry up to join the CINDX Token Sale - there are only 3 days left to take advantage of the 25% token bonus!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/advisers-motti-peer-f2c1d72008e9',
    screen: MOTTI_PEER_Co_CEO_of_Blonde_2_0,
    date: '09.17.2018',
    name: 'Motti Peer, Co-CEO of Blonde 2.0',
    text: 'Talent and experience are not commodities—they are the lifeblood of any successful project. We at CINDX understand the importance of seeking the perspectives of experts, and are incredibly proud to present the CINDX advisers. This group of top-tier professionals provide CINDX with their extensive experience, knowledge, and wisdom.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da',
    screen: CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE,
    date: '09.17.2018',
    name: 'CINDX Roadshow: Shanghai, Beijing & Singapore',
    text: 'CINDX is excited to share the interim results of CINDX Roadshow! Read about CINDX achievements in Shanghai, Beijing and Singapore. Stay with us - next stop, Seoul!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35',
    screen: Join_the_CINDX_Meetup_in_Singapore,
    date: '09.18.2018',
    name: 'Join the CINDX Meetup in Singapore!',
    text: 'The CINDX team is thrilled to announce its first Singapore meetup on September 22! It’s going to be packed with practical cues on how to successfully obtain crypto asset management services and expert guidance on CINDX. We can’t wait to see you there!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/weekly-digest-10-september-16-september-6892c68f7b93',
    screen: Weekly_Digest_10_09_2018_16_09_2018,
    date: '09.19.2018',
    name: 'Weekly Digest (10.09.2018 - 16.09.2018)',
    text: 'One more week with CINDX has gone by, so we have prepared a new weekly report for you! This was a very productive week: now you know how to pass CINDX KYC requirements, where the CINDX CEO spends his working days, and other very important information. Read our posts on Medium and don\'t forget to join CINDX STO to earn a 20 % token bonus today!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/consensus-singapore-e8dcb319d530',
    screen: CINDX_at_Consensus_Singapore,
    date: '09.20.2018',
    name: 'CINDX at Consensus Singapore!',
    text: 'Consensus Singapore gathers the blockchain industry’s best to offer enhanced networking opportunities and provide specialized content solutions for all entities in the crypto industry. CINDX is participating in the event as a leading fintech company. Read our Consensus post event review!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/erc-1400-the-new-token-standard-a5a49779554e',
    screen: ERC_1400,
    date: '09.21.2018',
    name: 'ERC-1400: New Token Standard that can Bridge the Gap between Crypto and Fiat Securities',
    text: 'There are many debates raging on various aspects of crypto token credibility. As far as Security Token Offerings (STO) are concerned, some fiat analysts believe that Security Tokens should not be legally classified as securities.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://www.facebook.com/cindx.io/posts/1678058212323570',
    screen: Tokenmatch,
    date: '09.21.2018',
    name: 'CINDX Makes Pitch at TokenMatch!',
    text: 'CINDX is at TokenMatch! This exclusive meeting is organised specially for investors and ICO teams that have been preselected through a rigorous process.',
    source: 'www.facebook.com',
    centered: true
  },
  {
    urlLink: 'https://www.facebook.com/cindx.io/posts/1681524395310285',
    screen: AGORA_Dubai,
    date: '09.24.2018',
    name: 'CINDX Attends Agora International Crypto Currencies Investment Congress in Dubai',
    text: 'CINDX Roadshow successfully traveled through China, Korea, and Singapore, and is now moving forward to the UAE! Today, Denis Eskenazi and Artur Shamalov are presenting CINDX at the Agora International Crypto Currencies Investment Congress in Dubai!',
    source: 'www.facebook.com',
    centered: true
  },
  {
    urlLink: 'https://www.facebook.com/cindx.io/posts/1682625761866815',
    screen: ASEAN,
    date: '09.25.2018',
    name: 'CINDX CEO Yuriy Avdeev Makes his Pitch at the ASEAN_DIGITAL 5.0 SUMMIT',
    text: 'The CINDX Roadshow takes another stage! Today, CINDX CEO Yuriy Avdeev pitched at the ASEAN_DIGITAL 5.0 SUMMIT in Bangkok. The event aims to bridge the gap in digital transformations between businesses, communities, and governments.',
    source: 'www.facebook.com',
    centered: true
  },
  {
    urlLink: 'https://www.facebook.com/cindx.io/photos/1682888825173842',
    screen: AERUM,
    date: '09.25.2018',
    name: 'New Partnership Opportunity',
    text: 'CINDX CEO Yuriy Avdeev met with Ross Kishenkov, CСO of Aerum, an infrastructure project working to develop an Ethereum-compatible \'Blockchain 3.0\' — a high-performance, scalable, decentralised platform for B2B and B2C applications.',
    source: 'www.facebook.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/team-jelena-karzetskaja-94e8c4286924',
    screen: CINDX_TEAM_JELENA_KARZETSKAJA,
    date: '09.25.2018',
    name: 'CINDX TEAM Jelena Karzetskaya',
    text: 'We continue to introduce the CINDX team, explore each team member’s point of view, find out what our team members are particularly excited about, and why each of them has decided to join CINDX. Please welcome Jelena Karzetskaya, CINDX Compliance Adviser.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/weekly-digest-17-september-23-september-b76cdadecd6c',
    screen: Weekly_Digest_17_09_2018_23_09_2018,
    date: '09.25.2018',
    name: 'Weekly Digest (17.09.2018 - 23.09.2018)',
    text: 'We have prepared a new weekly report for you! A lot has happened. Read our posts on Medium and don’t forget to join CINDX STO to earn a 20 % token bonus today!',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://www.facebook.com/cindx.io/photos/1683815501747841',
    screen: Huobi_MENA,
    date: '09.26.2018',
    name: 'CINDX meets Huobi MENA',
    text: 'CINDX is an international company, spreading its presence in a growing number of blockchain-friendly countries. During our recent time in Dubai, we had the honour of meeting with Sultan Bin Kharsham Al Ali and Mohit Davar, Co-Founders and Directors at Huobi MENA.',
    source: 'www.facebook.com',
    centered: false
  },
  {
    urlLink: 'https://medium.com/cindx/investing-into-cryptocurrencies-with-cindx-2a96aa2f7620',
    screen: investing_into_cryptocurrencies,
    date: '09.27.2018',
    name: 'Have you ever thought about investing into cryptocurrencies?',
    text: 'Imagine a platform that would give you the chance really to plunge into the cryptocurrency world and to learn to profit in it. What would that platform be? Perhaps it would be CINDX.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/1st-place-in-the-pitch-competition-at-asean-digital-342dfb0ee61',
    screen: st_place_in_the_pitch_competition,
    date: '09.27.2018',
    name: 'CINDX Wins 1st Place and $30,000 in the Pitch Competition at ASEAN DIGITAL 5.0',
    text: 'Awesome news! CINDX was named as the winner of the Pitch Competition organised by ASEAN Digital 5.0! The CINDX team takes pride in our project, and in this well-deserved award! It’s definitely not our last victory!',
    source: 'www.medium.com',
    centered: true
  }, 
  {
    urlLink: `https://medium.com/cindx/crypto-singapore-a0e01a6e7a61`,
    screen: img_08_1,
    date: '10.04.2018',
    name: `Blockchain in Singapore`,
    text: `CINDX only just finished its Asian Roadshow, but the team is still basking in the excitement!.
Read our Review about Singapore’s blockchain industry and hurry up to join the CINDX STO right now! `,
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: `https://medium.com/cindx/why-choose-cindx-the-top-10-reasons-ca05e1007df9`,
    screen: img_08_2,
    date: '09.03.2018',
    name: `Why Choose CINDX? The Top 10 Reasons that CINDX is Indispensable to Your Success`,
    text: `Read the ten most significant advantages that CINDX offers its users and hurry up to get your CINDX Token! Early participants in the CINDX STO will also receive token bonuses! `,
    source: 'www.medium.com',
    centered: true
  },
  {
    screen: Lincoln_Teo_photo,
    urlLink: `https://medium.com/cindx/cindx-advisers-lincoln-teo-b7d2eafd660f`,
    name: `We’ve got a new adviser! `,
    date: '10.31.2018',
    text: `Linkoln is an Advisor to Brunei’s central bank Authority Monetary Brunei Darussalam (AMBD). Read the full report in our Medium`,
    source: `www.medium.com`,
    centered: true
  },
  {
    screen: Pecunio_CINDX,
    urlLink: `https://medium.com/@cindx/pecunio-vc-fund-intends-to-invest-in-cindx-up-to-4-000-000-with-an-initial-round-of-1-500-000-ba0f4547c299`,
    name: `Pecunio VC Fund intends to invest in CINDX up to $4,000,000 with an initial round of $1,500,000`,
    date: '11.05.2018',
    text: `Our team pleased to announce a new strategic partner for our project.`,
    source: `www.medium.com`,
    centered: true 
  },
  {
    screen: Banners_005,
    urlLink: `https://medium.com/cindx/cindx-monthly-report-november-19a6ede104a3`,
    name: `CINDX Monthly Report: November`,
    date: '11.27.2018',
    text: `We are always seeking new ways to improve our work, and are eager to share last week’s achievements with you!`,
    source: `www.medium.com`,
    centered: true
  },
  {
    screen: Prorocol,
    urlLink: `https://medium.com/cindx/zeus-protocol-partners-with-cindx-a-crypto-asset-management-hub-bc1325602c3`,
    name: `Zeus Protocol Partners with CINDX, a Crypto Asset Management Hub!`,
    date: '11.20.2018',
    text: `Zeus Protocol and CINDX, a Crypto Asset Management Hub that solves problems for investors, traders, and developers`,
    source: `www.medium.com`,
    centered: true
  },
  {
    screen: Kosol_Saisanit_photo,
    urlLink: `https://medium.com/cindx/cindx-advisers-kosol-saisanit-209e05fd8aaf`,
    name: `We've got a new adviser: Kosol Saisanit`,
    date: '11.19.2018',
    text: `Mr. Saisanit has founded Power C Technology Co., Ltd, C Power Solutions Co., Ltd and CoachHub`,
    source: `www.medium.com`,
    centered: true
  },
  {
    screen: CD3105,
    urlLink: 'https://medium.com/cindx/cindx-launches-testing-of-unique-rating-system-and-manager-dashboard-f5230093feec',
    name: 'CINDX Launches Testing Of Unique Rating System and Manager Dashboard',
    date: '05.31.2019',
    text: "The CINDX project is delighted to announce that it is launching closed product testing of its platform’s two main components consisting of the unique Rating System and Manager Dashboard.",
    source: "www.medium.com",
    centered: true
  },
  {
    urlLink: "https://medium.com/cindx/cindx-is-launching-a-meme-contest-with-a-prize-fund-of-5-000-88daf7c496ec",
    screen: IMG_1205,
    date: '06.10.2019',
    name: "CINDX Is Launching A Meme Contest With a Prize Fund of $5,000",
    text: 'A call to all memelords and memers out there! The CINDX project is not all trading, but fun as well! That is why up until the end of June 2019, we are launching a contest for all those who think they have the creative skills to claim the grand prize from the $5,000 prize fund!’ ',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/the-cindx-trade-block-of-the-cindx-trading-system-6c4eb134f0d8',
    screen: IMG_1206,
    date: '06.10.2019',
    name: 'The CINDX.TRADE Block of The CINDX Trading System',
    text: 'The CINDX project is a revolutionary system designed to help anyone willing to enter the crypto market make profit by relying on the best strategies applied by the most experienced traders in the world.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/the-initial-circulating-supply-of-cinxo-tokens-386ae92b57cd',
    screen: IMG_1207,
    date: '06.17.2019',
    name: 'The Initial Circulating Supply of CINXO Tokens' ,
    text: 'All the tokens of the team members, advisors, partners, and private investors are locked until the release of the CINX security tokens, which will be approved by Q3-Q4 of 2020.',
    source: 'www.medium.com',
    centered: true
  },
  {
    urlLink: 'https://medium.com/cindx/cindx-token-benefits-for-token-holders-d3228205117c',
    screen: IMG_1208,
    date: '06.18.2019',
    name: 'CINDX Token Benefits For Token Holders' ,
    text: 'The CINDX project is a revolutionary trading platform designed for a broad range of crypto market participants seeking to make profit on the market by offering their expertise and knowledge for monetization. As part of the development process, the CINXO project team has released the CINXO ERC-20 standard tokens on the Ethereum network. The CINXO Tokens are designed as value carriers and will grant their holders a number of significant advantages.',
    source: 'www.medium.com',
    centered: true
  },
]; 

const getBeautifulDate = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let tsDate = date.split('.');
  tsDate = `${tsDate[2]}/${tsDate[0]}/${tsDate[1]} 00:00:00`;

  const $date = new Date(tsDate);
  const monthIndex = $date.getMonth();
  const monthStr = monthNames[monthIndex];
  const day = $date.getUTCDate();
  const year = $date.getUTCFullYear();
  const yearStr = (`${year}`).substr(2, 2);

  return `${monthStr} ${day}, ${yearStr}`;
};

media = media
  .sort((curObjShow1, curObjShow2) => {
    return (new Date(curObjShow2.date).getTime()) - (new Date(curObjShow1.date).getTime())
  })
  .map((curMedia) => ({
    ...curMedia,
    date: getBeautifulDate(curMedia.date) ? getBeautifulDate(curMedia.date) : curMedia.date,
  }))

news = news
  .sort((curObjShow1, curObjShow2) => {
    return (new Date(curObjShow2.date).getTime()) - (new Date(curObjShow1.date).getTime())
  })
  .map((curNews) => ({
    ...curNews,
    date: getBeautifulDate(curNews.date) ? getBeautifulDate(curNews.date) : curNews.date,
  }))

export class MediaNews extends React.Component {
  state = {
    isLinkAccess: true,
    slideIndex: 0,
    updateCount: 0
  }

  mapNews = () => {
    return news.map((el, i) => {
      const arrName = el.name.split(' ')
      const arrText = el.text.split(' ')
      let newName = ''
      let newText = ''

      arrName.forEach(nameEl => {
        if (newName.length < 70) {
          newName += nameEl + ' '
        }
      })
      arrText.forEach(textEl => {
        if (newText.length < 106) {
          newText += textEl + ' '
        }
      })

      return (
        <div key={i} className="item">
          <a target="_blank" href={el.urlLink}>
            <div className="txtNews">
              <div className="img" style={{ backgroundImage: `url(${el.screen})`, backgroundPosition: el.centered ? 'center center' : '0 0' }}></div>
              <div className="content">
                <h3>{(newName.length - 1) === el.name.length ? newName : newName + ' ...'}</h3>
                <div className="clear" />
                <p className="textContent">{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
                <p className="dateInfo">Date: {el.date}</p>
                <p className="details">Details</p>
              </div>
            </div>
          </a>
        </div>
      );
    })
  }

  openLink = (src) => {
    if (this.state.isLinkAccess) {
      window.open(src)
    }
  }

  mapMedia = () => {
    return media.map((el, i) => {
      const arrName = el.name.split(' ')
      const arrText = el.text.split(' ')
      let newName = ''
      let newText = ''

      arrName.forEach(nameEl => {
        if (newName.length < 76) {
          newName += nameEl + ' '
        }
      })
      arrText.forEach(textEl => {
        if (newText.length < 105) {
          newText += textEl + ' '
        }
      })
      return (
        <div key={i} className="txt">
          <a href={el.src} target="_blank">
            <div className="bg">
              <div className="bg_img">
                <img className={"media-img " + el.type} src={el.screen} alt="CINDEX"/>
              </div>
              <h3>{(newName.length - 1) === el.name.length ? newName : newName + ' ...'}</h3>
              <p className="textContent">{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
              <p className="dateInfo">Date: {el.date}</p>
              <p className="details">Details</p>
            </div>
          </a>
        </div>
      );
    })
  }

  render() {
    const settings = {
      arrows: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: (i) => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settingsNews = {
      arrows: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings2 = {
      arrows: true,
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settingsNews2 = {
      arrows: true,
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
    };
    return (
      <div className="block_7">
        <div className="size">
          <h2 className="header_blocks">{ indexLngObj[lng]['mediaNews#1'] }</h2>
          <div className="block_arrow_relative">
            <div className="settings">
              <Slider {...settings}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settings2">
              <Slider {...settings2}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settings3">
              <Slider {...settings3}>
                {this.mapMedia()}
              </Slider>
            </div>
          </div>
          <h2 className="header_blocks">{ indexLngObj[lng]['mediaNews#2'] }</h2>
          <div className="block_arrow_relative">
            <div className="settingsNews">
              <Slider {...settingsNews}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews2">
              <Slider {...settingsNews2}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="block_arrow_relative">
            <div className="settingsNews3">
              <Slider {...settingsNews3}>
                  {this.mapNews()}
              </Slider>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
