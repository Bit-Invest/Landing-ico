import * as React from 'react';
import Slider from "react-slick";
import block_6_ava from '../../images/block_6_ava.png';
import './feedbackProject.css';

export class FeedbackProject extends React.Component {
  render() {
    const settings = {
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
      <div className="block_6">
        <div className="size">
        <h2>Feedback On Our Project</h2>
        <div className="carusel-block">
          <Slider {...settings}>

              <div>
                <img className="item" src={block_6_ava} alt={"block_6_ava"}/>
                <div className="left">
                  <div className="name">
                    <h3>Petr </h3>
                    <h4>Product Director</h4>
                    <a href="#" className="sb">
                      Watch Video
                    </a>
                  </div>
                  <hr />
                  <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
                </div>
              </div>

              <div>
                <img className="item" src={block_6_ava} alt={"block_6_ava"}/>
                <div className="left">
                  <div className="name">
                    <h3>Ivan </h3>
                    <h4>Product Director</h4>
                    <a href="#" className="sb">
                      Watch Video
                    </a>
                    <hr />
                  </div>
                  <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
                </div>
              </div>

          </Slider>
          <div className="clear" />
        </div>
        </div>
      </div>
    );
  }
}
