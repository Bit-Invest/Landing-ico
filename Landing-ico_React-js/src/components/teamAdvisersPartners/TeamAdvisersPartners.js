import * as React from 'react';
import Slider from "react-slick";
import block_6_ava from '../../images/block_6_ava.png';
import ava_1 from '../../images/ava_1.png';
import ProgressorLogo from '../../media/ProgressorLogo.png';
import sum_and_substance1 from '../../media/sum_and_substance1.png';
import './TeamAdvisersPartners.css';

export class TeamAdvisersPartners extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsAdvisers = {
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    const settingsOurParners = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div class="block_8">
        <div className="size">

          <div className="team">
            <h2>Team of 40+ Members</h2>
            <Slider {...settings}>
              <div className="item">
                <img src={ava_1} alt={"CINDX"}/>
                <h3>Igor Okatiev</h3>
                <p>Chief Financial Officer</p>
                <hr />
                <p><span>5</span> years in entrepreneurship</p>
                <p><span>7</span> years in BRM</p>
                <p><span>10</span> years in financial markets</p>
              </div>
              <div className="item">
                <img src={ava_1} alt={"CINDX"}/>
                <h3>Yury Avdeev</h3>
                <p>Chief Executive Officer</p>
                <hr />
                <p><span>13</span> years in entrepreneurship</p>
                <p><span>9</span> ventures</p>
                <p><span>$2m</span> for crypto management </p>
                <a href>
                  <div src="../images/in.png" className="in" />
                </a>
              </div>
              <div className="item">
                <img src={ava_1} alt={"CINDX"}/>
                <h3>Artur Shamalov</h3>
                <p>Investment Director</p>
                <hr />
                <p><span>15</span> years in entrepreneurship</p>
                <p><span>5000</span> mixcart.ru clients</p>
                <p><span>$6.5 bn</span> investor in dc-daily.ru</p><a href="#" className="in" />
              </div>
              <div className="item">
                <img src={ava_1} alt={"CINDX"}/>
                <h3>Denis Eskenazi</h3>
                <p>Product Director</p>
                <hr />
                <p><span>7</span> years in entrepreneurship</p>
                <p><span>3</span> buisness degrees</p>
                <p><span>10</span> years in prezentation design</p><a href="#" className="in" />
              </div>
              <div className="item">
                <img src={ava_1} alt={"CINDX"}/>
                <h3>Igor Okatiev</h3>
                <p>Chief Financial Officer</p>
                <hr />
                <p><span>5</span> years in entrepreneurship</p>
                <p><span>7</span> years in BRM</p>
                <p><span>10</span> years in financial markets</p><a href="#" className="in" />
              </div>
            </Slider>
          </div>

          <div className="advisers">
            <h2>Advisers</h2>
            <Slider {...settingsAdvisers}>
              <div className="item">
                <img src={block_6_ava} alt={"block_6_ava"}/>
                <div className="right">
                  <div className="name">
                    <h3>Petr </h3>
                    <h4>Test</h4>
                    <a href="#" className="sb">
                      Watch Video
                    </a>
                    <hr />
                  </div>
                </div>
                <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
              </div>

              <div className="item">
                <img src={block_6_ava} alt={"block_6_ava"}/>
                <div className="right">
                  <div className="name">
                    <h3>Petr </h3>
                    <h4>Test</h4>
                    <a href="#" className="sb">
                      Watch Video
                    </a>
                    <hr />
                  </div>
                </div>
                <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
              </div>
            </Slider>
          </div>

          <div className="ourPartners">
            <h2>Our Partners</h2>
            <div className="carusel-block">
              <Slider {...settings}>
                <div>
                  <img className="img" src={ProgressorLogo} alt={"CINDX"}/>
                </div>
                <div>
                  <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                </div>
                <div>
                  <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                </div>
                <div>
                  <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                </div>
                <div>
                  <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
