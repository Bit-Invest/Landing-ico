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
                        <a target="_blank" href="https://t.me/cindx_official">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__tel`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.reddit.com/r/cindx/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__reddit`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://twitter.com/CINDXPlatform">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__twitter`}></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/cindx.io/">
                            <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__facebook`}></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia