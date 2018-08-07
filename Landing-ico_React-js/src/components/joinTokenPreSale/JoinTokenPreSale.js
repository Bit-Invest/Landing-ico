import * as React from 'react';
import './JoinTokenPreSale.css';
import bitcointalk_icon from '../../media/bitcointalk_icon.png';
import youtube_icon from '../../media/youtube_icon.png';
import instagram_icon from '../../media/instagram_icon.png';
import facebook_icon from '../../media/facebook_icon.png';
import reddit_icon from '../../media/reddit_icon.png';
import telegram_icon from '../../media/telegram_icon.png';
import twitter_icon from '../../media/twitter_icon.png';
import medium_icon from '../../media/medium_icon.png';
import linkedin_icon from '../../media/linkedin_icon.png';


export const JoinTokenPreSale = () => (
  <div className="block_9">
    <div className="size">
      <h2>Join Token Pre-Sale now!</h2>
      <div className="container2">
        <a href="#" className="sb">
          JOIN PRE-SALE
        </a>
        <a href="#" className="sb_2">
          TEST MVP
        </a>
        <div className="adress">
          <div className="adress_left">
            <div className="caption">Head Office</div>
            <p>
              Harjumaa, Erika 14, <br/>
              Talinn, 10416, Estonia
            </p>
            <p>
              Business inquiries | hello@cindx.io
            </p>
            <p>
              Legal Disclaimer
            </p>
          </div>
          <div className="adress_right">
            <div className="caption">Development and Marketing</div>
            <p>
              Presnenskaya naberezhnaya, 8 building 1,
            </p>
            <p>
              Moscow, 123112, Russia
            </p>
            <p>
              Careers | Join our team | hr@cindx.io
            </p>
          </div>
        </div>
        <div className="clear" />
        <div className="icon_block">
          <a>
            <img className="icon" src={bitcointalk_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={youtube_icon} alt={"CINDEX"}/></a>
          <a>
            <img className="icon" src={instagram_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={facebook_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={reddit_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={telegram_icon} alt={"CINDEX"}/>
          </a>
          <br/>
          <a>
            <img className="icon" src={twitter_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={medium_icon} alt={"CINDEX"}/></a>
          <a>
            <img className="icon" src={linkedin_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={bitcointalk_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={bitcointalk_icon} alt={"CINDEX"}/>
          </a>
          <a>
            <img className="icon" src={bitcointalk_icon} alt={"CINDEX"}/>
          </a>
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
)
