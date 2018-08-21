import * as React from 'react';
import Slider from "react-slick";
import ico_check from '../../images/ico_check.png';
import './LegalSchedule.css';

export class LegalSchedule extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    const settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const settings3 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="block_5">
        <div className="size">
          <h2 className="header_blocks">Legal Schedule</h2>
            <div className="block_arrow_relative">
              <div className="settings">
                <div className="container">
                  <Slider {...settings}>
                      <div className="item one">
                        <div className="cont_item all">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            (FVR000110)
                            TO EXCHANGE
                            VIRTUAL
                            CURRENCY TO
                            FIAT SERVICES
                          </p>
                          <div className="numb">
                            4.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPLIED FOR
                            TRADEMARK
                            REGISTRATION
                            IN ESTONIA
                            AND EU
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            LICENSE
                            FFA000254
                            FOR OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            FFA000254
                            FOR
                            OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            WORKED OUT PROSPECTUS IN ACCORDANCE WITH ESTONIAN LAW
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            CLAIMED FSA LICENSE (ESTONIAN FINANCIAL SUPERVISION AUTHORITY) 
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE FOR
                            PROVIDING A
                            VIRTUAL
                            CURRENCY
                            WALLET
                            SERVICE
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            UNDER
                            EXEMPTION D
                            IN SEC
                          </p>
                          <div className="numb">
                            8.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPOINTED
                            A PERSONAL
                            DATA
                            MANAGER
                            TO MEET GDPR
                            REQUIREMENTS
                          </p>
                          <div className="numb">
                            9.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            RECEIVED
                            THE FSA
                            LICENSE
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            THE
                            PROSPECTUS
                            EU 809-2004
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            ISSUED
                            CINX
                            SECURITY
                            TOKENS
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                  </Slider>
                </div>
              </div>
              <div className="settings2">
                <div className="container">
                <Slider {...settings2}>
                      <div className="item one">
                        <div className="cont_item all">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            (FVR000110)
                            TO EXCHANGE
                            VIRTUAL
                            CURRENCY TO
                            FIAT SERVICES
                          </p>
                          <div className="numb">
                            4.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPLIED FOR
                            TRADEMARK
                            REGISTRATION
                            IN ESTONIA
                            AND EU
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            LICENSE
                            FFA000254
                            FOR OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            FFA000254
                            FOR
                            OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            WORKED OUT PROSPECTUS IN ACCORDANCE WITH ESTONIAN LAW
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            CLAIMED FSA LICENSE (ESTONIAN FINANCIAL SUPERVISION AUTHORITY) 
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE FOR
                            PROVIDING A
                            VIRTUAL
                            CURRENCY
                            WALLET
                            SERVICE
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            UNDER
                            EXEMPTION D
                            IN SEC
                          </p>
                          <div className="numb">
                            8.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPOINTED
                            A PERSONAL
                            DATA
                            MANAGER
                            TO MEET GDPR
                            REQUIREMENTS
                          </p>
                          <div className="numb">
                            9.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            RECEIVED
                            THE FSA
                            LICENSE
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            THE
                            PROSPECTUS
                            EU 809-2004
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            ISSUED
                            CINX
                            SECURITY
                            TOKENS
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                  </Slider>
                </div>
              </div>
              <div className="settings3">
                <div className="container">
                <Slider {...settings3}>
                      <div className="item one">
                        <div className="cont_item all">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            (FVR000110)
                            TO EXCHANGE
                            VIRTUAL
                            CURRENCY TO
                            FIAT SERVICES
                          </p>
                          <div className="numb">
                            4.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPLIED FOR
                            TRADEMARK
                            REGISTRATION
                            IN ESTONIA
                            AND EU
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            LICENSE
                            FFA000254
                            FOR OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE
                            FFA000254
                            FOR
                            OPERATING
                            AS A FINANCIAL
                            INSTITUTION
                          </p>
                          <div className="numb">
                            5.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            WORKED OUT PROSPECTUS IN ACCORDANCE WITH ESTONIAN LAW
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            CLAIMED FSA LICENSE (ESTONIAN FINANCIAL SUPERVISION AUTHORITY) 
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            RECEIVED
                            LICENSE FOR
                            PROVIDING A
                            VIRTUAL
                            CURRENCY
                            WALLET
                            SERVICE
                          </p>
                          <div className="numb">
                            7.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            UNDER
                            EXEMPTION D
                            IN SEC
                          </p>
                          <div className="numb">
                            8.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <img src={ico_check} alt={"CINDEX"}/>
                          <p>
                            APPOINTED
                            A PERSONAL
                            DATA
                            MANAGER
                            TO MEET GDPR
                            REQUIREMENTS
                          </p>
                          <div className="numb">
                            9.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            RECEIVED
                            THE FSA
                            LICENSE
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            REGISTERED
                            THE
                            PROSPECTUS
                            EU 809-2004
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="cont_item one">
                          <p>
                            ISSUED
                            CINX
                            SECURITY
                            TOKENS
                          </p>
                          <div className="numb">
                            10.18
                          </div>
                        </div>
                      </div>
                  </Slider>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
