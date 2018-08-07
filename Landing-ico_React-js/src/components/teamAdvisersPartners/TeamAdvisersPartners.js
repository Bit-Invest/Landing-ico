import * as React from 'react';
import Slider from "react-slick";
import block_6_ava from '../../images/block_6_ava.png';
import ava_1 from '../../images/ava_1.png';
import ProgressorLogo from '../../media/ProgressorLogo.png';
import sum_and_substance1 from '../../media/sum_and_substance1.png';
import ico_promo from '../../media/ico_promo.png';
import './TeamAdvisersPartners.css';

export class TeamAdvisersPartners extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingsTeam2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const settingsAdvisers = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingsOurParners = {
      arrows: false,
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
            <div className="settings">
              <Slider {...settings}>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Igor Okatiev</h3>
                  <p className="position">Chief Financial Officer</p>
                  <hr />
                  <p><span>5</span> years in entrepreneurship</p>
                  <p><span>7</span> years in BRM</p>
                  <p><span>10</span> years in financial markets</p>
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Yury Avdeev</h3>
                  <p className="position">Chief Executive Officer</p>
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
                  <p className="position">Investment Director</p>
                  <hr />
                  <p><span>15</span> years in entrepreneurship</p>
                  <p><span>5000</span> mixcart.ru clients</p>
                  <p><span>$6.5 bn</span> investor in dc-daily.ru</p><a href="#" className="in" />
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Denis Eskenazi</h3>
                  <p className="position">Product Director</p>
                  <hr />
                  <p><span>7</span> years in entrepreneurship</p>
                  <p><span>3</span> buisness degrees</p>
                  <p><span>10</span> years in prezentation design</p><a href="#" className="in" />
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Igor Okatiev</h3>
                  <p className="position">Chief Financial Officer</p>
                  <hr />
                  <p><span>5</span> years in entrepreneurship</p>
                  <p><span>7</span> years in BRM</p>
                  <p><span>10</span> years in financial markets</p><a href="#" className="in" />
                </div>
              </Slider>
            </div>
            <div className="settings2">
              <Slider {...settingsTeam2}>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Igor Okatiev</h3>
                  <p className="position">Chief Financial Officer</p>
                  <hr />
                  <p><span>5</span> years in entrepreneurship</p>
                  <p><span>7</span> years in BRM</p>
                  <p><span>10</span> years in financial markets</p>
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Yury Avdeev</h3>
                  <p className="position">Chief Executive Officer</p>
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
                  <p className="position">Investment Director</p>
                  <hr />
                  <p><span>15</span> years in entrepreneurship</p>
                  <p><span>5000</span> mixcart.ru clients</p>
                  <p><span>$6.5 bn</span> investor in dc-daily.ru</p><a href="#" className="in" />
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Denis Eskenazi</h3>
                  <p className="position">Product Director</p>
                  <hr />
                  <p><span>7</span> years in entrepreneurship</p>
                  <p><span>3</span> buisness degrees</p>
                  <p><span>10</span> years in prezentation design</p><a href="#" className="in" />
                </div>
                <div className="item">
                  <img src={ava_1} alt={"CINDX"}/>
                  <h3>Igor Okatiev</h3>
                  <p className="position">Chief Financial Officer</p>
                  <hr />
                  <p><span>5</span> years in entrepreneurship</p>
                  <p><span>7</span> years in BRM</p>
                  <p><span>10</span> years in financial markets</p><a href="#" className="in" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="clear" />
          <div className="advisers">
            <h2>Advisers</h2>
            <Slider {...settingsAdvisers}>
              <div>
                <div className="left_content">
                  <div className="icon_content"></div>
                  <div className="name_content">Philip Staehelin</div>
                  <hr/>
                  <div className="text_content">
                    <p>25 years of consulting and entrepreneurial experience</p>
                    <p>$500m alternative payments business under leadership</p>
                    <p>200+ startups from 20 countries mentored</p>
                  </div>
                  <div className="ln"></div>
                </div>
                <div className="right_content">
                  <p>
                    Im an innovator and a leader who blends contagious optimism with pragmatic realism. I find opportunity where others see none.
                    <br/><br/>
                    Ive leveraged my ability to "see things differently" and "make things happen" in corporate, consulting and start-up environments - all giving me broad new perspectives that provide fodder for new transformative ideas.
                    <br/><br/>
                    Finding solutions to hard challenges is what gets me out of bed in the morning.
                    <br/><br/>
                    Career and projects: BCG, Spectacler, Transparency International, StartupYard, Bethreum, Gjirafa Inc, Direct People, CINDX
                  </p>
                </div>
              </div>

              <div>
                <div className="left_content">
                  <div className="icon_content"></div>
                  <div className="name_content">Philip Staehelin</div>
                  <hr/>
                  <div className="text_content">
                    <p>25 years of consulting and entrepreneurial experience</p>
                    <p>$500m alternative payments business under leadership</p>
                    <p>200+ startups from 20 countries mentored</p>
                  </div>
                  <div className="ln"></div>
                </div>
                <div className="right_content">
                  <p>
                    Im an innovator and a leader who blends contagious optimism with pragmatic realism. I find opportunity where others see none.
                    <br/><br/>
                    Ive leveraged my ability to "see things differently" and "make things happen" in corporate, consulting and start-up environments - all giving me broad new perspectives that provide fodder for new transformative ideas.
                    <br/><br/>
                    Finding solutions to hard challenges is what gets me out of bed in the morning.
                    <br/><br/>
                    Career and projects: BCG, Spectacler, Transparency International, StartupYard, Bethreum, Gjirafa Inc, Direct People, CINDX
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="clear" />
          <div className="ourPartners">
            <h2>Our Partners</h2>
            <div className="container2">
                <Slider {...settingsOurParners}>
                  <div>
                    <img className="img" src={ProgressorLogo} alt={"CINDX"}/>
                  </div>
                  <div>
                    <img className="img" src={ico_promo} alt={"CINDX"}/>
                  </div>
                  <div>
                    <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                  </div>
                  <div>
                    <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                  </div>
                  <div>
                    <img className="img" src={ProgressorLogo} alt={"CINDX"}/>
                  </div>
                  <div>
                    <img className="img" src={sum_and_substance1} alt={"CINDX"}/>
                  </div>
                </Slider>
            </div>
          </div>
          <div className="clear" />

        </div>
      </div>
    );
  }
}
