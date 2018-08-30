import * as React from 'react';
import './ProgressBarSale.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'

export const ProgressBarSale = () => {
  // const currentDate = new Date(2018, 9, 16)
  // const startDate = new Date(2018, 7, 24)
  // const finishDate = new Date(2018, 11, 19)
  // const currentProgress = ((currentDate - startDate) * 100) / (finishDate - startDate)

  return (
    <div className="progressBarSale">
      <div className="container">
        <div className={`left-block-bonuses ${lng === 'tr' ? 'tr-left-block-bonuses' : null}`}>
          <div>{ indexLngObj[lng]['progressBarSale#1'] }</div>
          <div>{ indexLngObj[lng]['progressBarSale#2'] }</div>
        </div>
        <div className='saleName'>
          <p className="pe-sale">{ indexLngObj[lng]['progressBarSale#3'] }</p>
          <p className="sale-bonusses">{ indexLngObj[lng]['progressBarSale#4'] }</p>
          <p className="cinx">1 CINX = $1</p>
        </div>
        <div className="progressBar">{/* <div className="progress" style={{ width: currentProgress > 0 ? (currentProgress - 3) + '%' : '0%' }}></div> */}</div>
        <div className="progress-data">
          <div className="data">
            <p className="amount">1.25</p>
            <p>{ indexLngObj[lng]['progressBarSale#5'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.20</p>
            <p>{ indexLngObj[lng]['progressBarSale#6'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.17</p>
            <p>{ indexLngObj[lng]['progressBarSale#7'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.15</p>
            <p>{ indexLngObj[lng]['progressBarSale#8'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.13</p>
            <p>{ indexLngObj[lng]['progressBarSale#9'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.10</p>
            <p>{ indexLngObj[lng]['progressBarSale#10'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.05</p>
            <p>{ indexLngObj[lng]['progressBarSale#11'] }</p>
          </div>
          <div className="data">
            <p className="amount">1.00</p>
            <p>{ indexLngObj[lng]['progressBarSale#12'] }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
