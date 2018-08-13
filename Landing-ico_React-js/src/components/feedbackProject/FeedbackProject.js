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
        <h2 className="header_blocks">Feedback On Our Project</h2>
          <div className="block_arrow_relative">
          <div className="carusel-block">
              <Slider {...settings}>

                <div>
                  <img className="item" src={block_6_ava} alt={"block_6_ava"}/>
                  <div className="left">
                    <div className="name">
                      <a href="#" className="sb"></a>
                      <h3>Ivan </h3>
                      <h4>Product Director</h4>
                      <hr />
                      <a href="#" className="sb2"></a>
                    </div>
                    <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
                  </div>
                </div>

                <div>
                  <img className="item" src={block_6_ava} alt={"block_6_ava"}/>
                  <div className="left">
                    <div className="name">
                      <a href="#" className="sb"></a>
                      <h3>Ivan </h3>
                      <h4>Product Director</h4>
                      <hr />
                      <a href="#" className="sb2"></a>
                    </div>
                    <p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p>
                  </div>
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
