import React from 'react'
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
import MediaBitcoingarden from '../../media/media/bitcoingarden_logo.png'
import MediaDigitaljournal from '../../media/media/digital_journal_transp.png'
import MediaCoinfox from '../../media/media/CoinFox.png'

import './MediaAboutUs.css'

const media = [
    {
        screen: Investing,
        type: 'investing',
        src: 'https://www.investing.com/analysis/why-bitcoin-mining-hashrates-are-way-up-despite-the-bear-market-200340991'
    },
    {
        screen: MediaCNN,
        type: 'cnn',
        src: 'https://www.ccn.com/cindx-crypto-asset-management-hub-adopts-bancor-protocol/'
    },
    {
        screen: Thestreet,
        type: 'thestreet',
        src: 'https://www.thestreet.com/technology/citi-analyst-treat-crypto-and-blockchain-with-healthy-skepticism-14695612'
    },
    {
        screen: Bitcoinexchangeguide,
        type: 'bitcoinexchangeguide',
        src: 'https://bitcoinexchangeguide.com/cindx-crypto-asset-manager-for-traders-launches-security-token-ico/'
    },
    {
        screen: Cryptoreporter,
        type: 'cryptoreporter',
        src: 'https://www.crypto-reporter.com/press-releases/even-amateur-blockchain-investors-can-make-it-big-with-the-help-of-cindx-5339/'
    },
    {
        screen: Coinannouncer,
        type: 'coinannouncer',
        src: 'https://www.coinannouncer.com/blockchain-investors-can-now-make-it-big-with-the-help-of-cindx/'
    },
    {
        screen: Сryptoninjas,
        type: 'cryptoninjas',
        src: 'https://www.cryptoninjas.net/2018/09/05/cindx-beginning-ico-for-crypto-asset-management-and-social-network/'
    },
    {
        screen: MediaAmbcrypto,
        type: 'ambcrypto',
        src: 'https://ambcrypto.com/how-cindx-is-democratizing-the-modern-financial-system-2/'
    },
    {
        screen: MediaBitcoinist,
        type: 'bitcoinist',
        src: 'https://bitcoinist.com/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
    },
    {
        screen: MediaTokendesk,
        type: 'tokendesk',
        src: 'https://www.tokendesk.io/how-cindx-is-democratizing-the-modern-financial-system/'
    },
    {
        screen: MediaBtcmanager,
        type: 'btcmanager',
        src: 'https://btcmanager.com/how-cindx-is-democratizing-the-modern-financial-system/'
    },
    {
        screen: MediaBlockonomi,
        type: 'blockonomi',
        src: 'https://blockonomi.com/cindxico-pre-sale/'
    },
    {
        screen: MediaBitcoingarden,
        type: 'bitcoingarden',
        src: 'https://bitcoingarden.org/cindx-announces-plans-for-ico-pre-sale-amidst-release-of-revolutionary-crypto-trading-hub-that-allows-users-to-follow-expert-traders/'
    },
    {
        screen: MediaDigitaljournal,
        type: 'digitaljournal',
        src: 'http://www.digitaljournal.com/pr/3881157'
    },
    {
        screen: MediaCoinfox,
        type: 'coinfox',
        src: 'http://www.coinfox.info/news/10194-5-tips-from-cindx-crypto-assets-management-hub-how-to-avoid-being-cheated'
    }
]
const ROOT_CLASS = 'media-about-as'

const mediaAboutUs = () => {
    const settings = {
        swipeToSlide: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    swipeToSlide: true,
                    lazyLoad: true,
                    infinite: true,
                    arrows: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    swipeToSlide: true,
                    lazyLoad: true,
                    infinite: true,
                    arrows: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    }

    const renderMedia = () => {
        return media.map((el, i) => {
            return (
                <div key={i} className={`${ROOT_CLASS}_txt`}>
                    <a href={el.src} target="_blank">
                        <img className={`${ROOT_CLASS}__media-img ` + el.type} src={el.screen} alt="CINDEX"/>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__wrapper-block`}>
                <div className={`${ROOT_CLASS}__header-blocks`}>Media About Us</div>
                <div className={`${ROOT_CLASS}__wrapper-media`}>
                    <Slider {...settings}>
                        {renderMedia()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default mediaAboutUs