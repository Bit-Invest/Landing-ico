import React from 'react'
import { lng, links } from '../../links'
import indexLngObj from '../../lngs/index'

import './SocialMedia.css'

const ROOT_CLASS = 'social-media'

const SocialMedia = () => {
    return (
        <div className={ROOT_CLASS}>
            <div className="size">
              <div className={`${ROOT_CLASS}__wrapper`}>
                  <div className={`${ROOT_CLASS}__header`}>{ indexLngObj[lng]['socialMedia#1'] }</div>
                  <div className={`${ROOT_CLASS}__icons`}>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.youtube}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__youtube`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.instagram}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__instagram`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.reddit}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__reddit`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.telegram}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__tel`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.twitter}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__twitter`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.facebook}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__facebook`}></div>
                              </div>
                          </a>
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.medium}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__medium`}></div>
                              </div>
                          </a>
                          {
                            lng === 'zn' ? (
                              <a target="_blank" rel="noopener noreferrer" href={links.soc.wb}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__weibo`}></div>
                              </a>
                            ) : (
                              <a target="_blank" rel="noopener noreferrer" href={links.soc.medium}>
                                <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__medium`}></div>
                              </a>
                            )
                          }
                          <a rel="noopener noreferrer" target="_blank" href={links.soc.linkedin}>
                              <div className={`${ROOT_CLASS}__wrapper-icon`}>
                                  <div className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__linkedin`}></div>
                              </div>
                          </a>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default SocialMedia