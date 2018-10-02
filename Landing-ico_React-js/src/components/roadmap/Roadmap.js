import * as React from 'react';
import { Button } from '@components/button';
import './Roadmap.css';
import { lng } from '../../links'
import indexLngObj from '../../lngs/index'
// import roadmapLike from '../../images/roadmapLike.svg'
import roadMapLike from '../../images/roadMapLike.svg'

const ROOT_CLASS = 'roadmap';

const discForMailStiones = {

};

const Popup = (props) => {
  return (
    <div className="popup-for-img" onClick={props.onClick}>
      <div className="popup-for-img__close-bg" ></div>
      <div className="popup-for-img__content">
        <div className="popup-for-img__close"></div>
        <img className="popup-for-img__img" src={props.src} alt="INVISIBLE_IMAGE" />
      </div>
    </div>
  )
}

export class Roadmap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  renderCircles = () => {
    let result = [];
    for (let i = 0; i < 7; i++) {
      result.push((
        <div
          className={`${ROOT_CLASS}__circle ${i===this.props.quartalCour?'active':null}`}
          onClick={() => {this.props.onClickQuartal(i)}}
          key={i}
        >
          { i < 1 ?
            <img src={roadMapLike} style={{ width: '100%', height: '100%' }} /> :
            <div className={`${ROOT_CLASS}__disc`} ></div>
          }
        </div>
      ));
    }
    return result;
  }

  render() {
    return (
      <div className={`${ROOT_CLASS} ${ROOT_CLASS}__headcontainer`}>
        { this.state.isOpen ?
          <Popup
            onClick={() => this.setState({ isOpen: false })}
            src={this.props.imageSrc}
          /> :
          null
        }
        <div className="size">
          <div className={`${ROOT_CLASS}__header`}>
            <div className="header_blocks">{ indexLngObj[lng]['roadmap#1'] }</div>
            {/* <div className={`${ROOT_CLASS}__buttons`}>
              <div className={`${ROOT_CLASS}__button`}>
                <Button
                  title={ "$3.8 M " + indexLngObj[lng]['roadmap#2'] }
                  theme={`${this.props.currentButton === '3.8m' ? 'gradient' : ''}`}
                  payload={{name: '3.8m'}}
                  onClick={this.props.onClickButton}
                />
              </div>
              <div className={`${ROOT_CLASS}__button`}>
                <Button
                  title={ "$12 M " + indexLngObj[lng]['roadmap#2'] }
                  theme={`${this.props.currentButton === '12m' ? 'gradient' : ''}`}
                  payload={{name: '12m'}}
                  onClick={this.props.onClickButton}
                />
              </div>
              <div className={`${ROOT_CLASS}__button`}>
                <Button
                  title={ "$21 M " + indexLngObj[lng]['roadmap#2'] }
                  theme={`${this.props.currentButton === '21m' ? 'gradient' : ''}`}
                  payload={{name: '21m'}}
                  onClick={this.props.onClickButton}
                />
              </div>
            </div> */}
          </div>
          <div className={ROOT_CLASS}>
            <div className={`${ROOT_CLASS}__content`}>
              <div className={`wrapper__${ROOT_CLASS}__map`}>
                <div className={`${ROOT_CLASS}__map`}>
                  <div className={`${ROOT_CLASS}__years`}>
                    <div className={`${ROOT_CLASS}__year ${ROOT_CLASS}__year_1`}>
                      2018
                    </div>
                    <div className={`${ROOT_CLASS}__year ${ROOT_CLASS}__year_2`}>
                      2019
                    </div>
                    <div className={`${ROOT_CLASS}__year ${ROOT_CLASS}__year_3`}>
                      2020
                    </div>
                  </div>
                  <div className={`${ROOT_CLASS}__quartals`}>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_3`}>
                      Q3
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_4`}>
                      Q4
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_5`}>
                      Q1
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_6`}>
                      Q2
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_7`}>
                      Q3
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_8`}>
                      Q4
                    </div>
                    <div className={`${ROOT_CLASS}__quartal ${ROOT_CLASS}__quartal_9`}>
                      Q1
                    </div>
                  </div>
                  <div className={`${ROOT_CLASS}__circles`}>
                    <div className={`${ROOT_CLASS}__line`} />
                    {this.renderCircles()}
                  </div>
                </div>
              </div>
              <div className={`${ROOT_CLASS}__wrapper-content`}>
                <p className={`${ROOT_CLASS}__text`}>
                  {this.props.descText}
                </p>
                <div
                  onClick={
                    () => {
                      if (window.innerWidth >= 768)
                        this.setState({ isOpen: true })
                    }
                  }
                  className={`${ROOT_CLASS}__image ${ROOT_CLASS}__image-${this.props.quartalCour}`}
                  style={{ backgroundImage: `url(${this.props.imageSrc})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
