import * as React from 'react';
import Slider from "react-slick";
import MediaAmbcrypto from '../../media/media/AMBcrypto.png'
import MediaBitcoinist from '../../media/media/Bitcoinist.png'
import MediaTokendesk from '../../media/media/tokendesk.png'
import MediaBtcmanager from '../../media/media/BTCManager.png'
import MediaBlockonomi from '../../media/media/blockonomi-logo.png'
import Investing from '../../media/media/investing.jpeg'
import Сryptoninjas from '../../media/media/Cryptoninjas.png'
import Coinannouncer from '../../media/media/Coinannouncer.png'
import Cryptoreporter from '../../media/media/Cryptoreporter.jpg'
import Bitcoinexchangeguide from '../../media/media/Bitcoinexchangeguide.jpeg'
import Thestreet from '../../media/media/Thestreet.png'
import MediaCNN from '../../media/media/CCN.png'
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

// NEWS
import Airat_Shayhulov from '../../news/Airat_Shayhulov.jpeg';
import Amarpreet_Singh from '../../news/Amarpreet_Singh.jpeg';
import Artur_Shamalov from '../../news/Artur_Shamalov.jpeg';
import Austin_Kimm from '../../news/Austin_Kimm.jpeg';
import Bogdan_Fiedur from '../../news/Bogdan_Fiedur.jpeg';
import CINDX_Key_points_to_observe from '../../news/CINDX_Key_points_to_observe.jpeg';
import CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit from '../../news/CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit.png';
import CINDX_continues_the_roadshow_in_China from '../../news/CINDX_continues_the_roadshow_in_China.jpeg';
import CINDX_crypto_currency_exchange_license from '../../news/CINDX_crypto_currency_exchange_license.jpeg';
import CINDX_gets_5_0_rating_on_TrackICO from '../../news/CINDX_gets_5.0_rating_on_TrackICO.png';
import CINDX_license_of_the_financial_consultant from '../../news/CINDX_license_of_the_financial_consultant.png';
import CINDX_meets_9coin_Digital_Asses_Exchange from '../../news/CINDX_meets_9coin_Digital_Asses_Exchange.png';
import CINDX_meets_Ian_Balina from '../../news/CINDX_meets_Ian_Balina.jpg';
import CINDX_meets_Vangoo_Capital_Partners_Fund from '../../news/CINDX_meets_Vangoo_Capital_Partners_Fund.png';
import CINDX_Presents_the_project_during_RICLUB_private_investors_meeting from '../../news/CINDX_Presents_the_project_during_RICLUB_private_investors_meeting.jpg';
import CINDX_took_part_in_Moscow_ICO_Summit_2018 from '../../news/CINDX_took_part_in_Moscow_ICO_Summit_2018.png';
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
import Jason_King from '../../news/Jason_King.jpeg';
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
import Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO from '../../news/Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO.jpeg';
import MediaBitcoingarden from '../../media/media/bitcoingarden_logo.png'
import MediaDigitaljournal from '../../media/media/digital_journal_transp.png'
import MediaCoinfox from '../../media/media/CoinFox.png'
import You_Can_Now_Buy_CINX_Tokens_with_Fiat_Money from '../../news/You_Can_Now_Buy_CINX_Tokens_with_Fiat_Money.jpeg'
import Borderless_Blockchain_Technology_Summit_Post_Event_Report from '../../news/Borderless_Blockchain_Technology_Summit_Post_Event_Report.jpg'
import CINDX_Platform_Promo_Presentation from '../../news/CINDX_Platform_Promo_Presentation.jpg'
import CINDX_continues_its_regular_Weekly_Digest_column from '../../news/CINDX_continues_its_regular_Weekly_Digest_column.jpg'
import CINDX_meets_Chain_Partners from '../../news/CINDX_meets_Chain_Partners.jpeg'
import CINDX_gained_a_status_of_a_Joint_Stock_Company from '../../news/CINDX_gained_a_status_of_a_Joint_Stock_Company.jpg'
import Weekly_digest_27_08_18_02_09_18 from '../../news/Weekly_digest_27_08_18_02_09_18.jpg'
import APAC_is_the_Frontrunner_in_Blockchain_Adoption from '../../news/APAC_is_the_Frontrunner_in_Blockchain_Adoption.jpg'
import Leonard_Grayver from '../../news/Leonard_Grayver.jpg'
import CINDX_KYC_TUTORIAL from '../../news/CINDX_KYC_TUTORIAL.png'
import CINDX_ROADSHOW_IN_CHINA_NEW_STAGE from '../../news/CINDX_ROADSHOW_IN_CHINA_NEW_STAGE.jpg'
import Weekly_digest_03_09_18_09_09_18 from '../../news/Weekly_digest_03_09_18_09_09_18.png'
import How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy from '../../news/How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy.jpg'
import MOTTI_PEER_Co_CEO_of_Blonde_2_0 from '../../news/MOTTI_PEER_Co_CEO_of_Blonde_2_0.jpg'
import CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE from '../../news/CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE.jpg'
import Join_the_CINDX_Meetup_in_Singapore from '../../news/Join_the_CINDX_Meetup_in_Singapore.jpg'
import './MediaNews.css';

const media = [
  {
    screen: Investing,
    type: 'investing',
    name: 'CINDX CEO Shares His Point of View on Rising Bitcoin Mining Hashrates',
    text: 'Even though cryptocurrency prices have been significantly down throughout 2018 thus far, oddly, hashrates for the Bitcoin network—signifying mining activity—have risen meaningfully. Could this disparity provide some insight into the future of alt-currencies?',
    src: 'https://www.investing.com/analysis/why-bitcoin-mining-hashrates-are-way-up-despite-the-bear-market-200340991'
  },
  {
    screen: MediaCNN,
    type: 'cnn',
    name: indexLngObj['en']['mediaNews#1_19'],
    text: indexLngObj['en']['mediaNews#1_20'],
    src: 'https://www.ccn.com/cindx-crypto-asset-management-hub-adopts-bancor-protocol/'
  },
  {
    screen: Thestreet,
    type: 'thestreet',
    name: 'CINDX CEO Shares His Point of View on why Investors Should Treat Cryptocurrency and Blockchain Predictions with "Healthy Skepticism".',
    text: 'Crypto isn\'t all it\'s cracked up to be. Citi analyst Josh Levin says to treat the many cryptocurrency and blockchain predictions with "healthy skepticism" and to remain "open minded".',
    src: 'https://www.thestreet.com/technology/citi-analyst-treat-crypto-and-blockchain-with-healthy-skepticism-14695612'
  },
  {
    screen: Bitcoinexchangeguide,
    type: 'bitcoinexchangeguide',
    name: 'CINDX Crypto Asset Manager For Traders Launches Security Token ICO',
    text: 'CINDX, a digital currency startup, recently initiated the presale phase of its ICO token sale. Then proceeds from the ICO will be used to establish a multifunctional platform that enables crypto traders identify and follow their preferred expert investor based on trading statistics recorded on the blockchain.',
    src: 'https://bitcoinexchangeguide.com/cindx-crypto-asset-manager-for-traders-launches-security-token-ico/'
  },
  {
    screen: Cryptoreporter,
    type: 'cryptoreporter',
    name: 'Even Amateur Investors Can Make It Big with the Help of CINDX',
    text: 'CINDX, the crypto asset management company, recently opened its ICO pre-sale and is introducing a multifunctional platform that allows anybody to invest in the crypto market while consistently earning returns. ',
    src: 'https://www.crypto-reporter.com/press-releases/even-amateur-blockchain-investors-can-make-it-big-with-the-help-of-cindx-5339/'
  },
  {
    screen: Coinannouncer,
    type: 'coinannouncer',
    name: 'Blockchain Investors Can Now Make It Big with the Help of CINDX',
    text: 'Cryptocurrencies have certainly made their mark. The digital tokens have consistently shown that they have the potential to rise very high in value. The market is huge and investors are insatiable.',
    src: 'https://www.coinannouncer.com/blockchain-investors-can-now-make-it-big-with-the-help-of-cindx/'
  },
  {
    screen: Сryptoninjas,
    type: 'cryptoninjas',
    name: 'CINDX Beginning ICO for Crypto Asset Management and Social Network',
    text: 'CINDX, a cryptocurrency project has now begun its security token ICO pre-sale to introduce a multifunctional platform that allows blockchain investors to choose an expert trader to follow based on trading stats recorded on the blockchain.',
    src: 'https://www.cryptoninjas.net/2018/09/05/cindx-beginning-ico-for-crypto-asset-management-and-social-network/'
  },
  {
    screen: MediaAmbcrypto,
    type: 'ambcrypto',
    name: indexLngObj['en']['mediaNews#1_1'],
    text: indexLngObj['en']['mediaNews#1_2'],
    src: 'https://ambcrypto.com/how-cindx-is-democratizing-the-modern-financial-system-2/'
  },
  {
    screen: MediaBitcoinist,
    type: 'bitcoinist',
    name: indexLngObj['en']['mediaNews#1_3'],
    text: indexLngObj['en']['mediaNews#1_4'],
    src: 'https://bitcoinist.com/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaTokendesk,
    type: 'tokendesk',
    name: indexLngObj['en']['mediaNews#1_5'],
    text: indexLngObj['en']['mediaNews#1_6'],
    src: 'https://www.tokendesk.io/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBtcmanager,
    type: 'btcmanager',
    name: indexLngObj['en']['mediaNews#1_7'],
    text: indexLngObj['en']['mediaNews#1_8'],
    src: 'https://btcmanager.com/how-cindx-is-democratizing-the-modern-financial-system/'
  },
  {
    screen: MediaBlockonomi,
    type: 'blockonomi',
    name: indexLngObj['en']['mediaNews#1_9'],
    text: indexLngObj['en']['mediaNews#1_10'],
    src: 'https://blockonomi.com/cindxico-pre-sale/'
  },
  {
    screen: MediaBitcoingarden,
    type: 'bitcoingarden',
    name: indexLngObj['en']['mediaNews#1_11'],
    text: indexLngObj['en']['mediaNews#1_12'],
    src: 'https://bitcoingarden.org/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
  },
  {
    screen: MediaDigitaljournal,
    type: 'digitaljournal',
    name: indexLngObj['en']['mediaNews#1_13'],
    text: indexLngObj['en']['mediaNews#1_14'],
    src: 'http://www.digitaljournal.com/pr/3881157'
  },
  {
    screen: MediaCoinfox,
    type: 'coinfox',
    name: indexLngObj['en']['mediaNews#1_15'],
    text: indexLngObj['en']['mediaNews#1_16'],
    src: 'http://www.coinfox.info/news/10194-5-tips-from-cindx-crypto-assets-management-hub-how-to-avoid-being-cheated'
  }
]

let news = [
  {
    videoSrc: 'https://www.youtube.com/watch?v=c4ruJPvo5sI',
    screen: CINDX_meets_Ian_Balina,
    name: indexLngObj['en']['mediaNews#2_1'],
    text: indexLngObj['en']['mediaNews#2_2'],
    source: 'www.youtube.com',
    centered: false
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=P6qAzbwOMXs',
    screen: CINDX_took_part_in_Moscow_ICO_Summit_2018,
    name: indexLngObj['en']['mediaNews#2_3'],
    text: indexLngObj['en']['mediaNews#2_4'],
    source: 'www.youtube.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642',
    screen: How_CINDX_is_ensuring_legal_compliance,
    name: indexLngObj['en']['mediaNews#2_5'],
    text: indexLngObj['en']['mediaNews#2_6'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-keith-teare-1041410275d0',
    screen: Keith_Teare,
    name: indexLngObj['en']['mediaNews#2_7'],
    text: indexLngObj['en']['mediaNews#2_8'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/meet-worlds-first-financial-crypto-social-network-connect-with-people-as-you-grow-your-wealth-76a3cea9a06c',
    screen: Meet_worlds_first_financial_crypto_social_network,
    name: indexLngObj['en']['mediaNews#2_9'],
    text: indexLngObj['en']['mediaNews#2_10'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/denis-eskenazi-ac67e81d8c50',
    screen: Denis_Eskenazi,
    name: indexLngObj['en']['mediaNews#2_11'],
    text: indexLngObj['en']['mediaNews#2_12'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-4e075b5d34',
    screen: CINDX_crypto_currency_exchange_license,
    name: indexLngObj['en']['mediaNews#2_13'],
    text: indexLngObj['en']['mediaNews#2_14'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-austin-kimm-fa417a929e32',
    screen: Austin_Kimm,
    name: indexLngObj['en']['mediaNews#2_15'],
    text: indexLngObj['en']['mediaNews#2_16'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/the-strategic-meeting-of-the-international-cindx-team-9ce14f49912e',
    screen: The_strategic_meeting_of_the_international_CINDX_team,
    name: indexLngObj['en']['mediaNews#2_17'],
    text: indexLngObj['en']['mediaNews#2_18'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-artur-shamalov-52c9dae3b3c9',
    screen: Artur_Shamalov,
    name: indexLngObj['en']['mediaNews#2_19'],
    text: indexLngObj['en']['mediaNews#2_20'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d',
    screen: The_issuance_of_CINX_tokens,
    name: indexLngObj['en']['mediaNews#2_21'],
    text: indexLngObj['en']['mediaNews#2_22'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-amarpreet-singh-29c1edb22dda',
    screen: Amarpreet_Singh,
    name: indexLngObj['en']['mediaNews#2_23'],
    text: indexLngObj['en']['mediaNews#2_24'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-activity-the-meeting-with-the-international-cindx-partners-1aec5a24c4b1',
    screen: CINDX_meets_Vangoo_Capital_Partners_Fund,
    name: indexLngObj['en']['mediaNews#2_25'],
    text: indexLngObj['en']['mediaNews#2_26'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-mofassair-hossain-72661ba3474e',
    screen: Mofassair_Hossain,
    name: indexLngObj['en']['mediaNews#2_27'],
    text: indexLngObj['en']['mediaNews#2_28'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-legal-kyc-procedure-2bbfe073511d',
    screen: How_CINDX_ensures_safety_for_its_users_KYC,
    name: indexLngObj['en']['mediaNews#2_29'],
    text: indexLngObj['en']['mediaNews#2_30'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-philip-staehelin-810df12247bc',
    screen: Philip_Staehelin,
    name: indexLngObj['en']['mediaNews#2_31'],
    text: indexLngObj['en']['mediaNews#2_32'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-negotiates-with-9coin-and-vangoo-capital-partners-646087fff49f',
    screen: CINDX_meets_9coin_Digital_Asses_Exchange,
    name: indexLngObj['en']['mediaNews#2_33'],
    text: indexLngObj['en']['mediaNews#2_34'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-jason-king-9a1b93d6aa8b',
    screen: Jason_King,
    name: indexLngObj['en']['mediaNews#2_35'],
    text: indexLngObj['en']['mediaNews#2_36'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-presents-the-project-during-private-investors-meeting-c886660a8387',
    screen: CINDX_Presents_the_project_during_RICLUB_private_investors_meeting,
    name: indexLngObj['en']['mediaNews#2_37'],
    text: indexLngObj['en']['mediaNews#2_38'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-sofja-pevzner-8386e8e88407',
    screen: Sofja_Pevzner,
    name: indexLngObj['en']['mediaNews#2_39'],
    text: indexLngObj['en']['mediaNews#2_40'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-tyler-sanford-a58eefa42a95',
    screen: Tyler_Sanford,
    name: indexLngObj['en']['mediaNews#2_41'],
    text: indexLngObj['en']['mediaNews#2_42'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-project-some-key-points-to-observe-b82ce2bccb79',
    screen: CINDX_Key_points_to_observe,
    name: indexLngObj['en']['mediaNews#2_43'],
    text: indexLngObj['en']['mediaNews#2_44'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-team-airat-shayhulov-b980078cdc6f',
    screen: Airat_Shayhulov,
    name: indexLngObj['en']['mediaNews#2_45'],
    text: indexLngObj['en']['mediaNews#2_46'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-operating-licence-f401cb580e7b',
    screen: CINDX_license_of_the_financial_consultant,
    name: indexLngObj['en']['mediaNews#2_47'],
    text: indexLngObj['en']['mediaNews#2_48'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-graham-doggart-a7f45b3e4ce4',
    screen: Graham_Doggart,
    name: indexLngObj['en']['mediaNews#2_49'],
    text: indexLngObj['en']['mediaNews#2_50'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-continues-the-roadshow-in-china-79d451184c63',
    screen: CINDX_continues_the_roadshow_in_China,
    name: indexLngObj['en']['mediaNews#2_51'],
    text: indexLngObj['en']['mediaNews#2_52'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-ibraghim-haniev-17f67defd1ba',
    screen: Ibraghim_Haniev,
    name: indexLngObj['en']['mediaNews#2_53'],
    text: indexLngObj['en']['mediaNews#2_54'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-sadie-hutton-6a8d68aa6fcf',
    screen: Sadie_Hutton,
    name: indexLngObj['en']['mediaNews#2_55'],
    text: indexLngObj['en']['mediaNews#2_56'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-talk-lots-of-features-to-take-you-on-a-new-journey-a4a0553eedb8',
    screen: CINDX_talk_a_service_that_will_help_people_become_wiser_in_taking_financial_decisions,
    name: indexLngObj['en']['mediaNews#2_57'],
    text: indexLngObj['en']['mediaNews#2_58'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/the-cindx-team-val-jerdes-e6c828062e61',
    screen: Val_Jerdes,
    name: indexLngObj['en']['mediaNews#2_59'],
    text: indexLngObj['en']['mediaNews#2_60'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-advisers-bogdan-fiedur-16897ad954ad',
    screen: Bogdan_Fiedur,
    name: indexLngObj['en']['mediaNews#2_61'],
    text: indexLngObj['en']['mediaNews#2_62'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-know-more-about-the-cinx-token-a-security-token-for-numerous-reasons-488ff75a8202',
    screen: Welcome_to_CINX_Token_Distribution_its_not_an_ICO_its_an_STO,
    name: indexLngObj['en']['mediaNews#2_63'],
    text: indexLngObj['en']['mediaNews#2_64'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-celebrates-the-aa-rating-ec5532f29d5d',
    screen: CINDX_celebrates_the_AA_Rating_from_Top_ICO_List_Audit,
    name: indexLngObj['en']['mediaNews#2_65'],
    text: indexLngObj['en']['mediaNews#2_66'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-30-july-5-august-1159f1cd8d28',
    screen: CINDX_WEEKLY_DIGEST_30_July_5_August,
    name: indexLngObj['en']['mediaNews#2_67'],
    text: indexLngObj['en']['mediaNews#2_68'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-legal-virtual-currency-wallet-services-8978410e3172',
    screen: Virtual_Currency_Wallet_Services,
    name: indexLngObj['en']['mediaNews#2_69'],
    text: indexLngObj['en']['mediaNews#2_70'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/how-cindx-influences-crypto-trading-7501619904de',
    screen: How_CINDX_Influences_Crypto_Trading,
    name: indexLngObj['en']['mediaNews#2_71'],
    text: indexLngObj['en']['mediaNews#2_72'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-6-august-12-august-7e12e324eb1f',
    screen: CINDX_Weekly_digest_06_08_18_12_08_18,
    name: indexLngObj['en']['mediaNews#2_73'],
    text: indexLngObj['en']['mediaNews#2_74'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/https-medium-com-cindx-cindx-gets-the-highest-5-0-rating-from-trackico-781a0a31971e',
    screen: CINDX_gets_5_0_rating_on_TrackICO,
    name: indexLngObj['en']['mediaNews#2_75'],
    text: indexLngObj['en']['mediaNews#2_76'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/icobench-gives-4-8-to-cindx-70aa244ca7c4',
    screen: ICObench_gives_4_8_to_CINDX,
    name: indexLngObj['en']['mediaNews#2_79'],
    text: indexLngObj['en']['mediaNews#2_80'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/dip-your-toe-in-crypto-3c8f54650e06',
    screen: Dip_your_Toe_in_Crypto,
    name: indexLngObj['en']['mediaNews#2_87'],
    text: indexLngObj['en']['mediaNews#2_88'],
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-team-yuriy-avdeev-e7a747d4c2e3',
    screen: Yuriy_Avdeev_CEO_of_the_CINDX_project,
    name: indexLngObj['en']['mediaNews#2_89'],
    text: indexLngObj['en']['mediaNews#2_90'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-weekly-digest-13-august-19-august-7d965ab073c0',
    screen: Weekly_digest,
    name: indexLngObj['en']['mediaNews#2_91'],
    text: indexLngObj['en']['mediaNews#2_92'],
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-meets-chain-partners-5dd9ee71f7c0',
    screen: CINDX_meets_Chain_Partners,
    name: 'CINDX meets Chain Partners',
    text: 'Allowing fiat investments in a token sale is an uncommon practice in the cryptocurrency industry. However, CINDX understood the importance of opening the sale to investors who wished to pay in fiat — a whole new class of investors is now welcome to take part in the STO.',
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/cindx-promo-video-f24a5944e2ef',
    screen: CINDX_Platform_Promo_Presentation,
    name: ' CINDX Platform Promo Presentation',
    text: 'We have created a new video explaining the killer features and advantages of the CINDX platform.',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/weekly-digest-20-august-26-august-d286c516ca24',
    screen: CINDX_continues_its_regular_Weekly_Digest_column,
    name: 'CINDX continues its regular Weekly Digest column.',
    text: 'The most exciting and long-awaited event of the past week was certainly the start of CINDX Pre-Sale with a generous 40% bonus! Every day we see more and more people take interest in our project and we are delighted to welcome first investors on board!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/borderless-blockchain-technology-summit-924a40a1f43e',
    screen: Borderless_Blockchain_Technology_Summit_Post_Event_Report,
    name: 'Borderless Blockchain Technology Summit Post-Event Report',
    text: 'CINDX is excited to share post-event report after its participation as a Gold Sponsor at the Borderless Blockchain Technology Summit that took place yesterday in Shanghai.',
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/making-cinx-tokens-more-accessible-688a693107d5',
    screen: You_Can_Now_Buy_CINX_Tokens_with_Fiat_Money,
    name: 'You Can Now Buy CINX Tokens with Fiat Money',
    text: 'Allowing fiat investments in a token sale is an uncommon practice in the cryptocurrency industry. However, CINDX understood the importance of opening the sale to investors who wished to pay in fiat — a whole new class of investors is now welcome to take part in the STO.',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/weekly-digest-27-august-2-september-c4c6b3688a11',
    screen: Weekly_digest_27_08_18_02_09_18,
    name: 'Weekly digest (27.08.18 - 02.09.18)',
    text: 'CINDX is on the path to successfully completing its STO! Every day, the CINDX team strives to improve the CINDX platform, to strengthen the legal status and to support and spread CINDX’ brand identity across the international space. For last week’s most important CINDX news updates, please visit our Medium blog!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/legal-joint-stock-company-e4877893bddb',
    screen: CINDX_gained_a_status_of_a_Joint_Stock_Company,
    name: 'CINDX got a status of a Joint Stock Company',
    text: 'CINDX is currently in a phase of major growth. As such, legal compliance and regular communication with regulators has taken top priority. At the moment, CINDX has completed the process of restructuring itself to a Joint Stock Company. The team at CINDX has taken great pains to ensure that this legal transition has happened smoothly. Learn more about CINDX and Join the Sale!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/apac-the-frontrunner-in-blockchain-adoption-af85be64876b',
    screen: APAC_is_the_Frontrunner_in_Blockchain_Adoption,
    name: 'APAC is the Frontrunner in Blockchain Adoption',
    text: 'CINDX Research: Asia-Pacific is Adopting Blockchain Development Faster than any other Geography',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/advisers-leonard-grayver-4eb7657268b8',
    screen: Leonard_Grayver,
    name: 'Leonard Grayver, the co-chair of corporate and international law practice at Greenberg, Whitcombe, Takeuchi, Gibson & Grayver LLP',
    text: 'Leonard Grayver brings litigation experience in a combination of international corporate and employment law to the CINDX team. Read what inspires him the most about CINDX in our blog!',
    source: 'www.medium.com',
    centered: false
  },
  {
    videoSrc: 'https://medium.com/cindx/kyc-tutorial-a697393191dd',
    screen: CINDX_KYC_TUTORIAL,
    name: 'CINDX KYC Tutorial',
    text: ' We have prepared the 4-steps guideline to help you easily pass KYC procedure. Hurry up to get KYC-verification and take your 25% bonuses — the largest bonus possible!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/roadshow-in-china-new-stage-322ca7ecbc95',
    screen: CINDX_ROADSHOW_IN_CHINA_NEW_STAGE,
    name: 'CINDX Roadshow in China. New Stage.',
    text: ' Take a look at the amazing plans CINDX has for its roadshow in China!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/weekly-digest-3-september-9-september-1f89a622b9dc',
    screen: Weekly_digest_03_09_18_09_09_18,
    name: 'Weekly Digest (03.09.2018 - 09.09.2018)',
    text: 'CINDX team continues its regular Weekly Digest column to highlight last week’s progress and achievements of the CINDX project.',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/how-cindx-can-help-you-to-fine-tune-your-trading-strategy-171752452b5b',
    screen: How_CINDX_Can_Help_You_to_Fine_Tune_Your_Trading_Strategy,
    name: 'How CINDX Can Help You to Fine-Tune Your Trading Strategy',
    text: 'CINDX understands the issues that crypto investors and traders face. Learn more about the simple and proven solutions that CINDX offers them. Hurry up to join the CINDX Token Sale - there are only 3 days left to take advantage of the 25% token bonus!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/advisers-motti-peer-f2c1d72008e9',
    screen: MOTTI_PEER_Co_CEO_of_Blonde_2_0,
    name: 'Motti Peer, Co-CEO of Blonde 2.0',
    text: 'Talent and experience are not commodities—they are the lifeblood of any successful project. We at CINDX understand the importance of seeking the perspectives of experts, and are incredibly proud to present the CINDX advisers. This group of top-tier professionals provide CINDX with their extensive experience, knowledge, and wisdom.',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/roadshow-shanghai-beijing-singapore-40a748d9c9da',
    screen: CINDX_ROADSHOW_SHANGHAI_BEIJING_SINGAPORE,
    name: 'CINDX Roadshow: Shanghai, Beijing & Singapore',
    text: 'CINDX is excited to share the interim results of CINDX Roadshow! Read about CINDX achievements in Shanghai, Beijing and Singapore. Stay with us - next stop, Seoul!',
    source: 'www.medium.com',
    centered: true
  },
  {
    videoSrc: 'https://medium.com/cindx/meetup-in-singapore-b3dcb4090d35',
    screen: Join_the_CINDX_Meetup_in_Singapore,
    name: 'Join the CINDX Meetup in Singapore!',
    text: 'The CINDX team is thrilled to announce its first Singapore meetup on September 22! It’s going to be packed with practical cues on how to successfully obtain crypto asset management services and expert guidance on CINDX. We can’t wait to see you there!',
    source: 'www.medium.com',
    centered: true
  },
];

news = news.reverse()

export class MediaNews extends React.Component {
  state = {
    isLinkAccess: true
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
          <a target="_blank" onClick={() => this.openLink(el.videoSrc)} href={el.videoSrc}>
            <div className="txtNews">
              <div className="img" style={{ backgroundImage: `url(${el.screen})`, backgroundPosition: el.centered ? 'center center' : '0 0' }}></div>
              <div className="content">
                <h3>{(newName.length - 1) === el.name.length ? newName : newName + ' ...'}</h3>
                <div className="clear" />
                <p>{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
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
          <a onClick={() => this.openLink(el.src)} href={el.src} target="_blank">
            <div className="bg">
              <img className={"media-img " + el.type} src={el.screen} alt="CINDEX"/>
              <h3>{(newName.length - 1) === el.name.length ? newName : newName + ' ...'}</h3>
              <p>{(newText.length - 1) === el.text.length ? newText : newText + ' ...'}</p>
              <p className="details">Details</p>
            </div>
          </a>
        </div>
      );
    })
  }

  render() {
    const settings = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
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
      slidesToScroll: 1,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings2 = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
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
      slidesToScroll: 1,
      beforeChange: () => {
        this.setState({ isLinkAccess: false })
      },
      afterChange: () => {
        this.setState({ isLinkAccess: true })
      }
    };
    const settings3 = {
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsNews3 = {
      arrows: true,
      infinite: true,
      swipeToSlide: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
          <hr/>
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
