import React from 'react'

import rating_topicolist from '../../media/rating-topicolist.png';
import rating_trackico from '../../media/rating-trackico.png';
import rating_icorating from '../../media/rating-icorating.png';
import rating_icomarks from '../../media/rating-icomarks.png';
import rating_icobench from '../../media/rating-icobench.png';
import ico_holder from '../../media/rating-holder.png';

import './OurTopRatings.css'

const ROOT_CLASS = 'our-top-ratings'

const ourTopRatings = () => {
    return (
        <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__wrapper-block`}>
                <div className={`${ROOT_CLASS}__header_blocks`}>Our Top Ratings</div>
                <div className={`${ROOT_CLASS}__wrapper-ratings`}>
                    <div className={`${ROOT_CLASS}__ratings`}>
                        <a target="_blank" href='https://topicolist.com/cindx/' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${rating_topicolist})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                        <a target="_blank" href='https://www.trackico.io/ico/cindx/#statistics' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${rating_trackico})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                        <a target="_blank" href='https://www.trackico.io/ico/cindx/#statistics' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${rating_icorating})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                        <a target="_blank" href='https://icomarks.com/ico/cindx' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${rating_icomarks})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                        <a target="_blank" href='https://icobench.com/ico/cindx' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${rating_icobench})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                        <a target="_blank" href='https://icoholder.com/en/cindx-22233' className={`${ROOT_CLASS}__href-rating-icon`}>
                            <div style={{ backgroundImage: `url(${ico_holder})` }} className={`${ROOT_CLASS}__rating-icon`} ></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ourTopRatings