import * as React from 'react';
import { Button } from '@components/button';
import './Roadmap.css';

const ROOT_CLASS = 'roadmap';

export const Roadmap = props => {
  const renderCircles = () => {
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push((
        <div
          className={`${ROOT_CLASS}__circle`}
          onClick={() => {props.onClickQuartal(i)}}
          key={i}
        >
          <div className={`${ROOT_CLASS}__disc`} />
        </div>
      ));
    }
    return result;
  }

  return (
    <div className={`${ROOT_CLASS} ${ROOT_CLASS}__headcontainer`} id="exitAnimate">
      <div className="size">
        <div className={`${ROOT_CLASS}__header`}>
          <div className="header_blocks">Roadmap</div>
          <div className={`${ROOT_CLASS}__buttons`}>
            <div className={`${ROOT_CLASS}__button`}>
              <Button
                title="$3,8 M SCENARIO"
                theme={`${props.currentButton === '3.8m' ? 'gradient' : ''}`}
                payload={{name: '3.8m'}}
                onClick={props.onClickButton}
              />
            </div>
            <div className={`${ROOT_CLASS}__button`}>
              <Button
                title="$12 M SCENARIO"
                theme={`${props.currentButton === '12m' ? 'gradient' : ''}`}
                payload={{name: '12m'}}
                onClick={props.onClickButton}
              />
            </div>
            <div className={`${ROOT_CLASS}__button`}>
              <Button
                title="$21 M SCENARIO"
                theme={`${props.currentButton === '21m' ? 'gradient' : ''}`}
                payload={{name: '21m'}}
                onClick={props.onClickButton}
              />
            </div>
          </div>
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
                  {renderCircles()}
                </div>
              </div>
            </div>
            <p className={`${ROOT_CLASS}__text`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            </p>
            <img className={`${ROOT_CLASS}__image`} src={props.imageSrc} alt="CINDEX"/>
          </div>
        </div>
      </div>
    </div>
  )
};
