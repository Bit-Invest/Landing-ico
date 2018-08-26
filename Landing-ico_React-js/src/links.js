import * as React from 'react';
import wp_url from './docs/wp.pdf';
import pr_url from './docs/pr.pdf';
import op_url from './docs/op.pdf';
import fm_url from './docs/fm.pdf'; 
import ld_url from './docs/ld.pdf'; 
import lD_url from './docs/ld1.pdf';

let linkSearch = [], splitSearch = window.location.search.replace('?','').split('&');
for(let i in splitSearch){
  let key_val_split = splitSearch[i].split('=');
  linkSearch[key_val_split[0]] = key_val_split[1];
}

const getGAID = function(){
  var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
  var raw = (match) ? decodeURIComponent(match[1]) : null;
  if (raw) {
    match = raw.match(/(\d+\.\d+)$/);
  }

  var gacid = (match) ? match[1] : 'default';
  if (gacid) {
    return gacid;
  }
};

let clickid = linkSearch['clickid'];
let gaid = getGAID;

export class Join extends React.Component {
  constructor() {
    super();

    this.state = {
      gaid: null
    };

    setTimeout(this.getGaidAssync,1000);
  }

  getGaidAssync = () => {
    this.setState({
      gaid: getGAID()
    });
  }

  render() {
    const { gaid } = this.state;
    const { props } = this;

    return(
      <a target="_blank" href={links.joinpresale+`&gaid=${gaid}`} className={props.className}>
        {props.text}
      </a>
    )
  }
}

export const links = {
  anchor: '1',
  anchor: '2',
  anchor: '3',
  anchor: '4',
  mvp: 'http://mvp.cindx.io/registration/sign-in',
  joinpresale: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  wp: wp_url,
  pr: pr_url,
  op: op_url,
  fm: fm_url,
  ld: ld_url,
  buytokens: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  lD: lD_url,
  gaid: getGAID,
  clickid
};

export const lng = 'en';