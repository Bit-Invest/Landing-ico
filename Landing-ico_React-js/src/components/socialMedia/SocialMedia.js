import React from 'react'

import './SocialMedia.css'

const ROOT_CLASS = 'social-media'

const SocialMedia = () => {
    return (
        <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__wrapper`}>
                <div className={`${ROOT_CLASS}__header`}>
                    For more information, follow us on social media:
                </div>
                <div className={`${ROOT_CLASS}__icons`}>
                    <div className={`${ROOT_CLASS}__left-block`}>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__btc`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__youtube`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__instagram`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__reddit`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__tel`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__twitter`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__github`}></div>
                            </div>
                        </a>
                    </div>
                    <div className={`${ROOT_CLASS}__right-block`}>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__facebook`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__medium`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__linkedin`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__wechat`}></div>
                            </div>
                        </a>
                        <a target="_blank">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__kakaotalk`}></div>
                            </div>
                        </a>
                        <a target="_blank">
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