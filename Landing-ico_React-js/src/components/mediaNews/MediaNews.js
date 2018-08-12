import * as React from 'react';
import Slider from "react-slick";
import block_7_ava_1 from '../../images/block_7_ava_1.png';
import block_7_ava_bg from '../../images/block_7_ava_bg.png';
import './MediaNews.css';

export class MediaNews extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsNews = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsNews2 = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div class="block_7">
        <div className="size">
          <h2 className="header_blocks">Media</h2>
          <div className="settings">
            <Slider {...settings}>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
            </Slider>
          </div>
          <div className="settings2">
            <Slider {...settings2}>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
              <div className="txt">
                <div className="bg">
                  <h3>CINDX legal: The issuance of the CINX tokens</h3>
                  <p>CINDX aspires to be fully compliant with laws surrounding ICO/STO projects. We are committed to publishing the necessary licensure...</p><a target="blank" href=" https://medium.com/cindx/cindx-legal-the-issuance-of-cinx-tokens-381a26b9c12d">www.medium.com</a>
                </div>
              </div>
            </Slider>
          </div>
          <hr/>
          <h2 className="header_blocks">News</h2>
          <div className="settingsNews">
            <Slider {...settingsNews}>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
            </Slider>
          </div>
          <div className="settingsNews2">
            <Slider {...settingsNews2}>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txtNews">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
            </Slider>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
