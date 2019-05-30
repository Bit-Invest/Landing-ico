import React from "react";

import './PopUpDisc.css'

const PopUpDisc = (props) => {
    return (
        <div className="popUp-disc" onClick={this.onClickClose}>
            <div className="popUp-disc-content">
                <div onClick={this.onClickClose} className="disc-close"></div>
                <div className="wrapper-popup-disc">
                    <div className="disc-text">
                        DISCLAIMER: The tokens described on this website, including provisions of the White Paper (“CINDX Tokens”), have not been, and will not be, registered under the Securities Act of 1933, as amended (the “Securities Act”), and may not be offered or sold within the United States or to, or for the account or benefit of, U.S. persons except pursuant to an exemption from, or in a transaction not subject to, the registration requirements of the Securities Act. Accordingly, the CINDX Tokens are being offered and sold only outside the United States to persons other than “U.S. persons” (as defined in Regulation S under the Securities Act (“Regulation S”)) in reliance upon Regulation S. None of the Securities and Exchange Commission (the “SEC”), any state securities commission, any foreign securities authority or any other federal, state or foreign regulatory authority has approved or disapproved of the CINDX Tokens or determined if the information in the White Paper is truthful or complete. Any representation to the contrary is unlawful and may be a criminal offense. No action has been taken in any jurisdiction to permit a public offering of the CINDX Tokens. To be eligible to participate in the offering of the CINDX Tokens, you will be required to represent to Savana F. Group OÜ (the “Company”) in writing that you are a non-U.S. person under Regulation S. A purchase of CINDX Tokens involves a high degree of risk, volatility and illiquidity. A prospective purchaser should thoroughly review the information contained in the White Paper and carefully consider whether an investment in the CINDX Tokens is suitable to the purchaser’s financial situation and goals. Purchasers should be aware that they will be required to bear the financial risks of this investment for an indefinite period of time and should be prepared to lose the full amount of their investment. Purchasers should consider the CINDX Tokens
                    </div>
                    <div className="disc-button">
                        I am not a US citizen
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpDisc