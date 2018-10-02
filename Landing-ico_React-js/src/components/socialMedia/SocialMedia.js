import React from 'react'

import './SocialMedia.css'

import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

const ROOT_CLASS = 'social-media'

const SocialMedia = () => {
    return (
        <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__wrapper`}>
                <div className={`${ROOT_CLASS}__header`}>
                    { indexLngObj[lng]['socialMedia#1'] }
                </div>
                <div className={`${ROOT_CLASS}__icons`}>
                    <div className={`${ROOT_CLASS}__left-block`}>
                        <a target="_blank" href="https://bitcointalk.org/index.php?topic=4421275.0">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__btc`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/cindx">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__youtube`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/cindx.io/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__instagram`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.reddit.com/r/cindx/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__reddit`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://t.me/cindx_official">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__tel`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://twitter.com/CINDXPlatform">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__twitter`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.github.com/Bit-Invest/Cindx-frontend">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__github`}></div>
                            </div>
                        </a>
                    </div>
                    <div className={`${ROOT_CLASS}__right-block`}>
                        <a target="_blank" href="https://www.facebook.com/cindx.io/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__facebook`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://medium.com/cindx">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__medium`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/cindx/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__linkedin`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__wechat`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__kakaotalk`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://m.weibo.cn/profile/6606802462">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__weibo`}></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia