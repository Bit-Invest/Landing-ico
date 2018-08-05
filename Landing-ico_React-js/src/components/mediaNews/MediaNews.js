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
    return (
      <div class="block_7">
        <div className="size">

          <div className="media">
            <h2>Media</h2>
            <Slider {...settings}>
                <div className="txt">
                  <div className="bg">
                    <h3>CINDX legal: How CINDX is ensuring legal compliance </h3>
                    <p>CINDX takes its business seriously with particular attention and cares to legal matters. We follow the letter of the law and want to give our investors the grounds...</p>
                    <a target="blank" href="https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-ee5fdf8a7642">www.medium.com</a>
                  </div>
                </div>
                <div className="txt">
                  <div className="bg">
                    <h3>CINDX legal: Crypto currency exchange license</h3>
                    <p>"Although cryptocurrencies have been introduced to global markets quite recently, they have already made a significant impact on the modern financial world."</p>
                    <a target="blank"       href="https://medium.com/cindx/cindx-legal-how-cindx-is-ensuring-legal-compliance-4e075b5d34">www.medium.com</a>
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

          <div className="news">
            <h2>News</h2>
            <Slider {...settings}>
                <div className="item">
                  <div className="txt">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txt">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txt">
                    <img className="img" src={block_7_ava_bg} alt={"CINDEX"}/>
                    <div className="content">
                      <h3>Meet World’s First Financial Crypto Social Network</h3>
                      <div className="clear" />
                      <p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль...</p>
                      <a href="#">read more</a></div>
                    </div>
                </div>
                <div className="item">
                  <div className="txt">
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
